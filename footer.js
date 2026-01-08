document.addEventListener("DOMContentLoaded", function() {
  // --- CONFIGURATION ---
  // Ensure "SAMPLE.png" is in the same folder.
  // This method combines the watermark with your images mathematically.
  const WATERMARK_URL = 'SAMPLE.png';
  const WATERMARK_OPACITY = 0.5; // 0.1 to 1.0

  // --- 1. SETUP: PRELOAD WATERMARK ---
  const watermarkImg = new Image();
  watermarkImg.src = WATERMARK_URL;
  watermarkImg.crossOrigin = "Anonymous"; // Try to prevent security errors

  // --- 2. THE BAKING FUNCTION ---
  // This function takes an image, draws it onto a canvas, adds the watermark,
  // and replaces the original image source with the new combined version.
  function bakeWatermark(targetImg) {
    // Safety Checks
    if (targetImg.dataset.watermarked) return; // Already done
    if (targetImg.closest('.sidebar')) return; // Don't touch sidebar
    if (targetImg.width < 50 || targetImg.height < 50) return; // Skip tiny icons

    // Mark as processing so we don't loop forever
    targetImg.dataset.watermarked = "true";

    try {
      // 1. Create a Canvas matching the image size
      const canvas = document.createElement('canvas');
      canvas.width = targetImg.naturalWidth;
      canvas.height = targetImg.naturalHeight;
      const ctx = canvas.getContext('2d');

      // 2. Draw the Original Card
      ctx.drawImage(targetImg, 0, 0);

      // 3. Configure Watermark Style
      // "multiply" makes the white background of your SAMPLE.png transparent
      ctx.globalCompositeOperation = 'multiply';
      ctx.globalAlpha = WATERMARK_OPACITY;

      // 4. Calculate Watermark Scaling (Fit to card)
      // We want the watermark to fill the card but maintain aspect ratio
      const scale = Math.min(
        canvas.width / watermarkImg.width,
        canvas.height / watermarkImg.height
      );
      const w = watermarkImg.width * scale;
      const h = watermarkImg.height * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;

      // 5. Draw Watermark
      ctx.drawImage(watermarkImg, x, y, w, h);

      // 6. Replace the Image Source
      // This updates the visible image on the page
      targetImg.src = canvas.toDataURL();
    } catch (e) {
      console.warn("Watermark skipped (CORS/Security restriction):", targetImg.src);
      // Fallback: If canvas fails (e.g. running locally without a server),
      // we apply a basic CSS overlay so you still have protection.
      applyFallbackOverlay(targetImg);
    }
  }

  // --- 3. FALLBACK METHOD (If Canvas Fails) ---
  function applyFallbackOverlay(img) {
    // Only used if browser security blocks the pixel-baking method
    const parent = img.parentElement;
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }

    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundImage = `url('${WATERMARK_URL}')`;
    overlay.style.backgroundSize = 'contain';
    overlay.style.backgroundPosition = 'center';
    overlay.style.backgroundRepeat = 'no-repeat';
    overlay.style.mixBlendMode = 'multiply';
    overlay.style.pointerEvents = 'none';
    overlay.style.opacity = WATERMARK_OPACITY;
    parent.appendChild(overlay);
  }

  // --- 4. EXECUTION LOOP ---
  // Wait for the watermark image to load first
  watermarkImg.onload = function() {
    // A. Process existing images
    document.querySelectorAll('img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) bakeWatermark(img);
      else img.onload = () => bakeWatermark(img);
    });

    // B. Watch for New/Enlarged Images (Mutation Observer)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.tagName === 'IMG') {
              // Wait for load
              if(node.complete) bakeWatermark(node);
              else node.onload = () => bakeWatermark(node);
            } else {
              node.querySelectorAll('img').forEach(img => {
                if(img.complete) bakeWatermark(img);
                else img.onload = () => bakeWatermark(img);
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  };

  // --- 5. SIDEBAR & UI LOGIC (Kept from your original) ---
  const sidebarImages = document.querySelectorAll('.sidebar img');
  const targetImage = sidebarImages.length > 1 ? sidebarImages[1] : sidebarImages[0];

  if (targetImage) {
    targetImage.style.cursor = 'pointer';
    targetImage.addEventListener('click', () => window.location.href = 'index.html');
    targetImage.style.marginBottom = "0px";

    // Inject Tagline
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    const tagline = document.createElement('div');
    tagline.innerText = "A New Realm Awaits";
    Object.assign(tagline.style, {
      fontFamily: "'Cinzel', serif",
      fontSize: "0.8rem",
      fontWeight: "400",
      color: "#e2e8f0",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginTop: "-40px",
      marginBottom: "20px",
      textShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
      width: "100%",
      opacity: "0.9"
    });

    targetImage.insertAdjacentElement('afterend', tagline);
  }

  // Mobile Menu
  const menuBtn = document.createElement("button");
  menuBtn.id = "mobile-menu-btn";
  menuBtn.innerHTML = "☰";
  document.body.prepend(menuBtn);

  // CSS Styles
  const style = document.createElement('style');
  style.innerHTML = `
    img {
      -webkit-touch-callout: none;
      user-select: none;
    }

    .sidebar h1 {
      font-family: 'Cinzel', serif !important;
      font-weight: 700;
      text-transform: uppercase;
    }

    #mobile-menu-btn {
      display: none;
    }

    @media (max-width: 800px) {
      .sidebar h1 {
        font-size: 1.5rem;
        text-align: center;
      }

      .sidebar img:nth-of-type(2) {
        max-width: 60%;
        margin-bottom: 0;
      }

      body {
        position: relative;
        overflow-x: hidden;
      }

      .main {
        padding-top: 60px;
      }

      #mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 15px;
        left: 15px;
        z-index: 10000;
        width: 36px;
        height: 36px;
        font-size: 20px;
        background-color: #4fd1c5;
        color: #05070b;
        border: none;
        border-radius: 6px;
      }

      #mobile-menu-btn.btn-open {
        left: 230px;
        background-color: #f56565 !important;
        color: white !important;
      }

      .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 280px;
        z-index: 9999;
        transform: translateX(-100%);
        transition: 0.3s;
        box-shadow: 5px 0 15px rgba(0,0,0,0.7);
        background: #05070b;
        overflow-y: hidden !important;
        overflow-x: hidden !important;
        display: flex;
        flex-direction: column;
      }

      .sidebar.mobile-open {
        transform: translateX(0);
      }

      .sidebar > * {
        flex-shrink: 1;
      }

      .sidebar nav {
        overflow-y: auto;
        flex: 1;
        max-height: calc(100vh - 200px);
      }
    }
  `;
  document.head.appendChild(style);

  // Menu Logic
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    menuBtn.classList.toggle('btn-open');
    menuBtn.innerHTML = sidebar.classList.contains('mobile-open') ? "✕" : "☰";
  });

  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('mobile-open') && 
        !sidebar.contains(e.target) && 
        e.target !== menuBtn) {
      sidebar.classList.remove('mobile-open');
      menuBtn.classList.remove('btn-open');
      menuBtn.innerHTML = "☰";
    }
  });

  // Footer & No Right Click
  const footerContent = `
    <div style="margin-top: 60px; padding: 30px 20px; background: linear-gradient(to bottom, #0a0e17, #05070b); border-top: 2px solid #1a202c; text-align: center; font-size: 0.85rem; color: #718096; line-height: 1.8;">
      <p style="margin-bottom: 10px; font-weight: 600; color: #a0aec0;">© 2026 Mystik Creatures™ TCG & Mystik Creatures, Inc. All Rights Reserved.</p>
      <p style="margin-bottom: 15px; font-size: 0.8rem;">Mystik Creatures™, card designs, and all associated assets are the property of Mystik Creatures, Inc. This site is for educational and gameplay utility purposes only.</p>
      <p style="font-size: 0.75rem; color: #4a5568;">Privacy Policy • Terms of Service • Contact Support</p>
    </div>
  `;

  const main = document.querySelector('.main-inner') || document.querySelector('.main');
  if (main) main.insertAdjacentHTML('beforeend', footerContent);

  document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
});
