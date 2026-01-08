document.addEventListener("DOMContentLoaded", function() {

  // ======================================================
  // CONFIGURATION
  // ======================================================
  const WATERMARK_URL = 'SAMPLE.png'; // Must be in same folder as HTML
  const WATERMARK_OPACITY = 0.5;      // 0.1 to 1.0

  // ======================================================
  // 1. SIDEBAR & TAGLINE LOGIC
  // ======================================================
  const sidebarImages = document.querySelectorAll('.sidebar img');
  
  // Target the SECOND image (Index 1). Fallback to Index 0 if only 1 exists.
  const targetImage = sidebarImages.length > 1 ? sidebarImages[1] : sidebarImages[0];

  if (targetImage) {
    // A. MAKE IT CLICKABLE
    targetImage.style.cursor = 'pointer';
    targetImage.addEventListener('click', function() {
      window.location.href = 'index.html';
    });

    // B. REMOVE GAP FROM IMAGE
    targetImage.style.marginBottom = "0px"; 

    // C. INJECT TAGLINE
    
    // 1. Load "Cinzel" Font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap'; 
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // 2. Create Tagline
    const tagline = document.createElement('div');
    tagline.innerText = "A New Realm Awaits";
    
    // 3. Style Tagline
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

    // 4. INSERT AFTER THE TARGET IMAGE
    targetImage.insertAdjacentElement('afterend', tagline);
  }

  // ======================================================
  // 2. MOBILE HAMBURGER BUTTON
  // ======================================================
  const menuBtn = document.createElement("button");
  menuBtn.id = "mobile-menu-btn";
  menuBtn.innerHTML = "&#9776;"; 
  document.body.prepend(menuBtn);

  // ======================================================
  // 3. CSS STYLES
  // ======================================================
  const style = document.createElement('style');
  style.innerHTML = `
    /* --- IMAGE PROTECTION --- */
    img {
      -webkit-touch-callout: none !important;
      -webkit-user-select: none !important;
      user-select: none !important;
      pointer-events: auto; 
    }

    /* --- BRANDING FONT UPDATE --- */
    .sidebar h1 {
      font-family: 'Cinzel', serif !important;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* --- DESKTOP (Default) --- */
    #mobile-menu-btn { display: none; }

    /* --- MOBILE (Max Width 800px) --- */
    @media (max-width: 800px) {
      
      .sidebar h1 {
        font-size: 1.5rem !important; 
        text-align: center;
        margin-top: 10px; 
        font-family: 'Cinzel', serif !important;
      }
      
      .sidebar img:nth-of-type(2) {
        max-width: 60% !important; 
        margin-bottom: 0px !important; 
      }
      
      body { position: relative; overflow-x: hidden; }
      .main { padding-top: 60px !important; }

      /* HAMBURGER BUTTON */
      #mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 15px; left: 15px; 
        z-index: 10000;
        width: 36px; height: 36px;
        font-size: 20px; 
        background-color: #4fd1c5; 
        color: #05070b;
        border: none;
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.5);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      #mobile-menu-btn.btn-open {
        left: 230px; 
        background-color: #f56565 !important; 
        color: white !important;
      }

      /* SIDEBAR DRAWER */
      .sidebar {
        position: fixed !important;
        top: 0; left: 0;
        height: 100vh !important;
        width: 280px !important;
        z-index: 9999;
        transform: translateX(-100%); 
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 5px 0 15px rgba(0,0,0,0.7);
        border-right: 1px solid #2d3748;
        background-color: #05070b; /* Ensure solid bg */
      }

      .sidebar.mobile-open { transform: translateX(0); }

      .sidebar.mobile-open::before {
        content: '';
        position: fixed;
        top: 0; left: 280px;
        width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.6);
        z-index: 9998;
      }
    }
  `;
  document.head.appendChild(style);

  // ======================================================
  // 4. MENU INTERACTION LOGIC
  // ======================================================
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    menuBtn.classList.toggle('btn-open');
    
    if (sidebar.classList.contains('mobile-open')) {
      menuBtn.innerHTML = "&#10005;"; 
    } else {
      menuBtn.innerHTML = "&#9776;"; 
    }
  });

  document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('mobile-menu-btn');
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== btn) {
      sidebar.classList.remove('mobile-open');
      btn.classList.remove('btn-open'); 
      btn.innerHTML = "&#9776;";
    }
  });

  // ======================================================
  // 5. WATERMARK LOGIC (THE BAKING METHOD)
  // ======================================================
  // This physically combines the watermark with the image pixels.
  // This solves the animation/scroll issues.

  const watermarkImg = new Image();
  watermarkImg.src = WATERMARK_URL;
  watermarkImg.crossOrigin = "Anonymous";

  // A. The Baking Function
  function bakeWatermark(targetImg) {
    // Safety Checks
    if (targetImg.dataset.watermarked) return; 
    if (targetImg.closest('.sidebar')) return; 
    if (targetImg.width < 50 || targetImg.height < 50) return; // Skip tiny icons
    
    // Mark processed
    targetImg.dataset.watermarked = "true";

    try {
      // 1. Create Canvas
      const canvas = document.createElement('canvas');
      canvas.width = targetImg.naturalWidth;
      canvas.height = targetImg.naturalHeight;
      const ctx = canvas.getContext('2d');

      // 2. Draw Original
      ctx.drawImage(targetImg, 0, 0);

      // 3. Configure Blend Mode (Removes White BG from Watermark)
      ctx.globalCompositeOperation = 'multiply'; 
      ctx.globalAlpha = WATERMARK_OPACITY;

      // 4. Calculate Scale (Fit watermark to card)
      const scale = Math.min(
        canvas.width / watermarkImg.width,
        canvas.height / watermarkImg.height
      );
      
      const w = watermarkImg.width * scale;
      const h = watermarkImg.height * scale;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;

      // 5. Draw Watermark & Replace Image
      ctx.drawImage(watermarkImg, x, y, w, h);
      targetImg.src = canvas.toDataURL();
      
    } catch (e) {
      // Security Fallback (if browser blocks canvas access)
      console.warn("Watermark skipped (Security):", targetImg.src);
      applyFallbackOverlay(targetImg);
    }
  }

  // B. Fallback Function (Overlay method)
  function applyFallbackOverlay(img) {
    const parent = img.parentElement;
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0'; overlay.style.left = '0';
    overlay.style.width = '100%'; overlay.style.height = '100%';
    overlay.style.backgroundImage = `url('${WATERMARK_URL}')`;
    overlay.style.backgroundSize = 'contain';
    overlay.style.backgroundPosition = 'center';
    overlay.style.backgroundRepeat = 'no-repeat';
    overlay.style.mixBlendMode = 'multiply';
    overlay.style.pointerEvents = 'none';
    overlay.style.opacity = WATERMARK_OPACITY;
    parent.appendChild(overlay);
  }

  // C. Execution Loop
  watermarkImg.onload = function() {
    // 1. Process existing images
    document.querySelectorAll('img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) bakeWatermark(img);
      else img.onload = () => bakeWatermark(img);
    });

    // 2. Watch for NEW images (Popups/Enlarged)
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


  // ======================================================
  // 6. LEGAL FOOTER
  // ======================================================
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

  const target = document.querySelector('.main-inner') || document.querySelector('.main');
  if (target) {
    target.insertAdjacentHTML('beforeend', footerContent);
  }

  // ======================================================
  // 7. DISABLE RIGHT-CLICK
  // ======================================================
  document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });
  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });
});
