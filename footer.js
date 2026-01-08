document.addEventListener("DOMContentLoaded", function() {

  // --- 1. WATERMARK LOGIC ---
  const WATERMARK_URL = 'SAMPLE.png'; 
  const WATERMARK_OPACITY = 0.5;
  const BATCH_SIZE = 3; 

  // Hide images until ready
  const hideStyle = document.createElement('style');
  hideStyle.id = 'watermark-hide';
  hideStyle.innerHTML = `body:not(.watermark-ready) img:not(.sidebar img) { visibility: hidden !important; }`;
  document.head.appendChild(hideStyle);

  const watermarkImg = new Image();
  watermarkImg.src = WATERMARK_URL;
  watermarkImg.crossOrigin = "Anonymous";

  async function bakeWatermarkAsync(targetImg) {
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') return;
    if (targetImg.dataset.watermarked) return;
    if (targetImg.closest('.sidebar') || targetImg.id === 'modal-image') return;
    if (targetImg.width < 50 || targetImg.height < 50) return;
    
    targetImg.dataset.watermarked = "true";

    return new Promise((resolve) => {
      const processFrame = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = targetImg.naturalWidth;
          canvas.height = targetImg.naturalHeight;
          const ctx = canvas.getContext('2d', { alpha: false });
          ctx.drawImage(targetImg, 0, 0);
          ctx.globalCompositeOperation = 'multiply'; 
          ctx.globalAlpha = WATERMARK_OPACITY;

          const scale = Math.min(canvas.width / watermarkImg.width, canvas.height / watermarkImg.height);
          const w = watermarkImg.width * scale;
          const h = watermarkImg.height * scale;
          const x = (canvas.width - w) / 2;
          const y = (canvas.height - h) / 2;

          ctx.drawImage(watermarkImg, x, y, w, h);
          canvas.toBlob((blob) => {
            targetImg.src = URL.createObjectURL(blob);
            resolve();
          }, 'image/jpeg', 0.92);
        } catch (e) {
          resolve();
        }
      };
      setTimeout(processFrame, 0);
    });
  }

  async function processBatch(images) {
    for (let i = 0; i < images.length; i += BATCH_SIZE) {
      await Promise.all(images.slice(i, i + BATCH_SIZE).map(img => bakeWatermarkAsync(img)));
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }

  watermarkImg.onload = async function() {
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      document.body.classList.add('watermark-ready');
      return;
    }
    const readyImages = Array.from(document.querySelectorAll('img')).filter(img => 
      img.complete && img.naturalWidth > 0 && !img.closest('.sidebar')
    );
    await processBatch(readyImages);
    document.body.classList.add('watermark-ready');
  };

  watermarkImg.onerror = function() { document.body.classList.add('watermark-ready'); };

  // --- 2. SIDEBAR LOGO CLICK ---
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

  // --- 3. MOBILE MENU LOGIC ---
  const menuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.querySelector('.sidebar');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('mobile-open');
      menuBtn.classList.toggle('btn-open');
      menuBtn.innerHTML = sidebar.classList.contains('mobile-open') ? "&#10005;" : "&#9776;";
    });

    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove('mobile-open');
        menuBtn.classList.remove('btn-open');
        menuBtn.innerHTML = "&#9776;";
      }
    });
  }

  // --- 4. FOOTER ---
  const footerContent = `
    <style>
      .legal-footer { margin-top: 4rem; padding: 1.5rem 0; border-top: 1px solid #1a202c; text-align: center; font-size: 0.75rem; color: #a0aec0; line-height: 1.6; }
      .legal-footer strong { color: #f7fafc; }
      .legal-footer a { color: #4fd1c5; text-decoration: none; }
      .legal-footer a:hover { text-decoration: underline; }
    </style>
    <footer class="legal-footer">
      <p>&copy; 2026 <strong>Mystik Creatures™ TCG</strong><br>All Rights Reserved.</p>
      <p>Mystik Creatures™, card designs, and all associated assets are the property of Mystik Creatures, Inc.</p>
      <p style="margin-top: 0.5rem;"><a href="legal.html">Privacy Policy</a> &bull; <a href="legal.html">Terms</a> &bull; <a href="mailto:mystikcreatures@gmail.com">Contact</a></p>
    </footer>
  `;
  const main = document.querySelector('.main-inner') || document.querySelector('.main');
  if (main) main.insertAdjacentHTML('beforeend', footerContent);

  document.addEventListener('contextmenu', e => { if (e.target.tagName === 'IMG') e.preventDefault(); });
});