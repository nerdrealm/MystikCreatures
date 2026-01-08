document.addEventListener("DOMContentLoaded", function() {

  // --- CONFIGURATION ---
  const WATERMARK_URL = 'SAMPLE.png'; 
  const WATERMARK_OPACITY = 0.5;
  const BATCH_SIZE = 3; // Process images in small batches
  let isProcessing = false;

  // --- 1. HIDE IMAGES IMMEDIATELY ---
  const hideStyle = document.createElement('style');
  hideStyle.id = 'watermark-hide';
  hideStyle.innerHTML = `
    body:not(.watermark-ready) img:not(.sidebar img) {
      visibility: hidden !important;
    }
  `;
  document.head.appendChild(hideStyle);

  // --- 2. PRELOAD WATERMARK ---
  const watermarkImg = new Image();
  watermarkImg.src = WATERMARK_URL;
  watermarkImg.crossOrigin = "Anonymous";

  // --- 3. OPTIMIZED BAKING (Async batching) ---
  async function bakeWatermarkAsync(targetImg) {
    // Skip index page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      return;
    }
    
    // Safety checks
    if (targetImg.dataset.watermarked) return;
    if (targetImg.closest('.sidebar') || targetImg.id === 'modal-image') return;
    if (targetImg.width < 50 || targetImg.height < 50) return;
    
    targetImg.dataset.watermarked = "true";

    return new Promise((resolve) => {
      // Use requestIdleCallback for non-blocking processing
      const processFrame = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = targetImg.naturalWidth;
          canvas.height = targetImg.naturalHeight;
          const ctx = canvas.getContext('2d', { alpha: false }); // Performance hint

          ctx.drawImage(targetImg, 0, 0);
          ctx.globalCompositeOperation = 'multiply'; 
          ctx.globalAlpha = WATERMARK_OPACITY;

          const scale = Math.min(
            canvas.width / watermarkImg.width,
            canvas.height / watermarkImg.height
          );
          
          const w = watermarkImg.width * scale;
          const h = watermarkImg.height * scale;
          const x = (canvas.width - w) / 2;
          const y = (canvas.height - h) / 2;

          ctx.drawImage(watermarkImg, x, y, w, h);

          // Convert to blob instead of base64 (MUCH faster)
          canvas.toBlob((blob) => {
            targetImg.src = URL.createObjectURL(blob);
            resolve();
          }, 'image/jpeg', 0.92); // JPEG is faster than PNG
          
        } catch (e) {
          console.error("Watermark failed:", e);
          applyFallbackOverlay(targetImg);
          resolve();
        }
      };

      // Use requestIdleCallback if available, otherwise setTimeout
      if ('requestIdleCallback' in window) {
        requestIdleCallback(processFrame, { timeout: 1000 });
      } else {
        setTimeout(processFrame, 0);
      }
    });
  }

  // --- 4. BATCH PROCESSOR ---
  async function processBatch(images) {
    for (let i = 0; i < images.length; i += BATCH_SIZE) {
      const batch = images.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map(img => bakeWatermarkAsync(img)));
      // Allow browser to breathe between batches
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }

  // --- 5. FALLBACK OVERLAY (Cached) ---
  const overlayCache = new WeakMap();
  function applyFallbackOverlay(img) {
    if (overlayCache.has(img)) return;
    
    const parent = img.parentElement;
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-image: url('${WATERMARK_URL}');
      background-size: contain; background-position: center; background-repeat: no-repeat;
      mix-blend-mode: multiply; pointer-events: none; opacity: ${WATERMARK_OPACITY};
    `;
    parent.appendChild(overlay);
    overlayCache.set(img, overlay);
  }

  // --- 6. MAIN EXECUTION ---
  watermarkImg.onload = async function() {
    console.log("✓ Watermark loaded");
    
    // Skip on index
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      document.body.classList.add('watermark-ready');
      return;
    }
    
    // Get all images and filter ready ones
    const allImages = Array.from(document.querySelectorAll('img'));
    const readyImages = allImages.filter(img => 
      img.complete && img.naturalWidth > 0 && !img.closest('.sidebar')
    );

    console.log(`Processing ${readyImages.length} images...`);
    
    // Process in batches
    await processBatch(readyImages);
    
    // Reveal all at once
    document.body.classList.add('watermark-ready');
    console.log(`✓ ${readyImages.length} images watermarked`);

    // Handle lazy-loaded images
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (!img.dataset.watermarked) {
            bakeWatermarkAsync(img).then(() => {
              img.style.visibility = 'visible';
            });
          }
          lazyObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });

    // Watch for new images (throttled)
    let mutationTimeout;
    const observer = new MutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(() => {
        const newImages = document.querySelectorAll('img:not([data-watermarked])');
        newImages.forEach(img => {
          if (!img.closest('.sidebar')) {
            lazyObserver.observe(img);
          }
        });
      }, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  watermarkImg.onerror = function() {
    console.error("✗ Failed to load watermark");
    document.body.classList.add('watermark-ready');
  };

  // --- 7. SIDEBAR & UI LOGIC ---
  const sidebarImages = document.querySelectorAll('.sidebar img');
  const targetImage = sidebarImages.length > 1 ? sidebarImages[1] : sidebarImages[0];

  if (targetImage) {
    targetImage.style.cursor = 'pointer';
    targetImage.addEventListener('click', () => window.location.href = 'index.html');
    targetImage.style.marginBottom = "0px"; 

    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap'; 
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const tagline = document.createElement('div');
    tagline.innerText = "A New Realm Awaits";
    Object.assign(tagline.style, {
      fontFamily: "'Cinzel', serif", fontSize: "0.8rem", fontWeight: "400", 
      color: "#e2e8f0", textAlign: "center", textTransform: "uppercase", 
      letterSpacing: "2px", marginTop: "-40px", marginBottom: "20px",
      textShadow: "0 0 8px rgba(255, 255, 255, 0.4)", width: "100%", opacity: "0.9"             
    });
    targetImage.insertAdjacentElement('afterend', tagline);
  }

  // Mobile Menu
  const menuBtn = document.createElement("button");
  menuBtn.id = "mobile-menu-btn";
  menuBtn.innerHTML = "&#9776;"; 
  document.body.prepend(menuBtn);

  // CSS Styles
  const style = document.createElement('style');
  style.innerHTML = `
    img { -webkit-touch-callout: none; user-select: none; }
    .sidebar h1 { font-family: 'Cinzel', serif !important; font-weight: 700; text-transform: uppercase; text-align: center; }
    .sidebar { padding-top: 1rem; }
    .sidebar img { margin-top: -2rem; }
    .sidebar img[src*="Powers.png"] { margin-top: 0 !important; }
    #mobile-menu-btn { display: none; }
    @media (max-width: 800px) {
      .sidebar h1 { font-size: 1.5rem; text-align: center; }
      .sidebar img:nth-of-type(2) { max-width: 60%; margin-bottom: 0; }
      body { position: relative; overflow-x: hidden; }
      .main { padding-top: 60px; }
      #mobile-menu-btn {
        display: flex; align-items: center; justify-content: center;
        position: fixed; top: 15px; left: 15px; z-index: 10000;
        width: 36px; height: 36px; font-size: 20px; 
        background-color: #4fd1c5; color: #05070b; border: none; border-radius: 6px;
      }
      #mobile-menu-btn.btn-open { left: 230px; background-color: #f56565 !important; color: white !important; }
      .sidebar {
        position: fixed; top: 0; left: 0; height: 100vh; width: 280px;
        z-index: 9999; transform: translateX(-100%); transition: 0.3s;
        box-shadow: 5px 0 15px rgba(0,0,0,0.7); background: #05070b;
      }
      .sidebar.mobile-open { transform: translateX(0); }
    }
  `;
  document.head.appendChild(style);

  // Menu Logic
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    menuBtn.classList.toggle('btn-open');
    menuBtn.innerHTML = sidebar.classList.contains('mobile-open') ? "&#10005;" : "&#9776;";
  });
  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== menuBtn) {
      sidebar.classList.remove('mobile-open');
      menuBtn.classList.remove('btn-open');
      menuBtn.innerHTML = "&#9776;";
    }
  });

  // Footer & No Right Click
  const footerContent = `
    <style>
      .legal-footer {
        margin-top: 4rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-top: 1px solid #1a202c;
        text-align: center;
        font-size: 0.75rem;
        color: #a0aec0;
        line-height: 1.6;
      }
      .legal-footer strong { color: #f7fafc; }
      .legal-footer a { color: #4fd1c5; text-decoration: none; }
      .legal-footer a:hover { text-decoration: underline; }
    </style>
    
    <footer class="legal-footer">
      <p>
        &copy; 2026 <strong>Mystik Creatures™ TCG & Mystik Creatures, Inc.</strong>
        <br>
        All Rights Reserved.
      </p>
      <p>
        Mystik Creatures™, card designs, and all associated assets are the property of Mystik Creatures, Inc.
        <br>
        This site is for educational and gameplay utility purposes only.
      </p>
      <p style="margin-top: 0.5rem;">
        <a href="legal.html">Privacy Policy</a> &bull; 
        <a href="legal.html">Terms of Service</a> &bull; 
        <a href="mailto:mystikcreatures@gmail.com">Contact Support</a>
      </p>
    </footer>
  `;

  const main = document.querySelector('.main-inner') || document.querySelector('.main');
  if (main) main.insertAdjacentHTML('beforeend', footerContent);

  document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
});