document.addEventListener("DOMContentLoaded", function() {

  // --- CONFIGURATION ---
  const WATERMARK_URL = 'SAMPLE.png'; 
  const WATERMARK_OPACITY = 0.5; // 0.1 to 1.0

  // --- 1. SETUP: PRELOAD WATERMARK ---
  const watermarkImg = new Image();
  watermarkImg.src = WATERMARK_URL;
  watermarkImg.crossOrigin = "Anonymous"; 

  // --- 2. THE BAKING FUNCTION (Watermark Logic) ---
  function bakeWatermark(targetImg) {
    if (targetImg.dataset.watermarked) return; 
    if (targetImg.closest('.sidebar')) return; 
    if (targetImg.width < 50 || targetImg.height < 50) return; 
    
    targetImg.dataset.watermarked = "true";

    try {
      const canvas = document.createElement('canvas');
      canvas.width = targetImg.naturalWidth;
      canvas.height = targetImg.naturalHeight;
      const ctx = canvas.getContext('2d');

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
      targetImg.src = canvas.toDataURL();
      
    } catch (e) {
      // Fallback if security blocks canvas
      applyFallbackOverlay(targetImg);
    }
  }

  // --- 3. FALLBACK OVERLAY ---
  function applyFallbackOverlay(img) {
    const parent = img.parentElement;
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
      backgroundImage: `url('${WATERMARK_URL}')`, backgroundSize: 'contain',
      backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
      mixBlendMode: 'multiply', pointerEvents: 'none', opacity: WATERMARK_OPACITY
    });
    parent.appendChild(overlay);
  }

  // --- 4. EXECUTION LOOP ---
  watermarkImg.onload = function() {
    document.querySelectorAll('img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) bakeWatermark(img);
      else img.onload = () => bakeWatermark(img);
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { 
            if (node.tagName === 'IMG') {
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
    observer.observe(document.body, { childList: true, subtree: true });
  };

  // --- 5. SIDEBAR & UI LOGIC ---
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
      fontFamily: "'Cinzel', serif", fontSize: "0.8rem", fontWeight: "400", 
      color: "#e2e8f0", textAlign: "center", textTransform: "uppercase", 
      letterSpacing: "2px", marginTop: "-40px", marginBottom: "20px",
      textShadow: "0 0 8px rgba(255, 255, 255, 0.4)", width: "100%", opacity: "0.9"             
    });
    targetImage.insertAdjacentElement('afterend', tagline);
  }

  // Mobile Menu Button
  const menuBtn = document.createElement("button");
  menuBtn.id = "mobile-menu-btn";
  menuBtn.innerHTML = "&#9776;"; 
  document.body.prepend(menuBtn);

  // --- 6. CSS STYLES (Includes Mobile Fit Fixes) ---
  const style = document.createElement('style');
  style.innerHTML = `
    img { -webkit-touch-callout: none; user-select: none; }
    .sidebar h1 { font-family: 'Cinzel', serif !important; font-weight: 700; text-transform: uppercase; }
    
    /* Default (Desktop) */
    #mobile-menu-btn { display: none; }

    /* --- MOBILE ADJUSTMENTS --- */
    @media (max-width: 800px) {
      
      body { position: relative; overflow-x: hidden; }
      .main { padding-top: 60px; }

      /* Toggle Button */
      #mobile-menu-btn {
        display: flex; align-items: center; justify-content: center;
        position: fixed; top: 15px; left: 15px; z-index: 10000;
        width: 36px; height: 36px; font-size: 20px; 
        background-color: #4fd1c5; color: #05070b; border: none; border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.5);
      }
      #mobile-menu-btn.btn-open { left: 230px; background-color: #f56565 !important; color: white !important; }

      /* Sidebar Drawer - FIT TO SCREEN LOGIC */
      .sidebar {
        position: fixed; top: 0; left: 0; height: 100vh; width: 280px;
        z-index: 9999; transform: translateX(-100%); transition: 0.3s;
        box-shadow: 5px 0 15px rgba(0,0,0,0.7); background: #05070b;
        
        /* Flexbox to squash content vertically */
        display: flex !important;
        flex-direction: column !important;
        justify-content: flex-start !important; 
        align-items: center !important;
        
        /* Add padding for top close button, but minimize elsewhere */
        padding-top: 60px !important; 
        padding-bottom: 20px !important;
        overflow-y: auto; /* Allow scroll only if absolutely necessary */
      }
      
      .sidebar.mobile-open { transform: translateX(0); }

      /* TIGHTEN SIDEBAR ELEMENTS */
      .sidebar h1 { 
        font-size: 1.4rem !important; 
        margin-top: 0 !important; 
        margin-bottom: 10px !important;
        text-align: center; 
      }
      
      /* Limit logo height so it doesn't push menu off screen */
      .sidebar img:nth-of-type(2) { 
        max-width: 50% !important; 
        max-height: 15vh !important; /* Cap height at 15% of screen */
        width: auto !important;
        margin-bottom: 10px !important; 
      }

      /* Tighten Lists and Links */
      .sidebar ul, .sidebar ol, .sidebar nav {
        margin-top: 5px !important;
        margin-bottom: 5px !important;
        width: 100%;
        text-align: center;
      }

      .sidebar li {
        margin-bottom: 5px !important; /* Move links closer together */
      }
    }
    
    /* Extra tiny screens (landscape phone) */
    @media (max-height: 500px) and (max-width: 800px) {
        .sidebar { padding-top: 10px !important; }
        .sidebar img:nth-of-type(2) { display: none; } /* Hide logo on extremely short screens to show links */
    }
  `;
  document.head.appendChild(style);

  // Menu Events
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

  // --- 7. RESTORED FULL FOOTER ---
  const footerHTML = `
    <style>
      .legal-footer {
        margin-top: 4rem; padding-top: 1.5rem; padding-bottom: 1.5rem;
        border-top: 1px solid #1a202c; text-align: center;
        font-size: 0.75rem; color: #a0aec0; line-height: 1.6;
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
  if (main) main.insertAdjacentHTML('beforeend', footerHTML);

  // --- 8. DISABLE RIGHT CLICK ---
  document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });
});
