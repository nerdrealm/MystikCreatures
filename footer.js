document.addEventListener("DOMContentLoaded", function() {
  
  const noHighlightStyle = document.createElement('style');
  noHighlightStyle.innerHTML = `
    *:focus:not(:focus-visible) { 
      outline: none !important; 
      box-shadow: none !important; 
    }
  `;
  document.head.appendChild(noHighlightStyle);

  // --- 1. SIDEBAR LOGIC ---

  // A. Top Image (Powers.png) -> LINKS TO HOME
  const topImage = document.querySelector('.sidebar-powers img');
  if (topImage) {
    topImage.style.cursor = 'pointer';
    topImage.addEventListener('click', () => window.location.href = 'index.html');
  }

  // B. Sidebar Title Text (Mystik Creatures™) -> LINKS TO HOME
  const sidebarTitle = document.querySelector('.sidebar h1');
  if (sidebarTitle) {
    sidebarTitle.style.cursor = 'pointer';
    sidebarTitle.addEventListener('click', () => window.location.href = 'index.html');
  }

  // C. Bottom Image (MystikLogo) -> KEEPS THE TAGLINE
  const bottomImage = document.querySelector('.sidebar-logo-bottom img');
  if (bottomImage) {
    bottomImage.src = "Mystik.png"; 
    bottomImage.parentElement.style.marginTop = "20px";
    bottomImage.style.marginTop = "10px";
    bottomImage.style.marginBottom = "0px"; 

    // Add Font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap'; 
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Create Tagline
    const tagline = document.createElement('div');
    tagline.innerText = "A New Realm Awaits";
    
    // Apply Styles
    Object.assign(tagline.style, {
      fontFamily: "'Cinzel', serif", fontSize: "0.8rem", fontWeight: "400", 
      color: "#e2e8f0", textAlign: "center", textTransform: "uppercase", 
      letterSpacing: "2px", 
      marginBottom: "20px",
      textShadow: "0 0 8px rgba(255, 255, 255, 0.4)", width: "100%", opacity: "0.9"             
    });

    // Insert Tagline AFTER the Bottom Logo
    bottomImage.insertAdjacentElement('afterend', tagline);
  
    // Control mobile vs desktop margin
  function setTaglineMargin() {
    if (window.innerWidth <= 800) {
      tagline.style.marginTop = "-25px"; // CHANGE THIS FOR MOBILE
    } else {
      tagline.style.marginTop = "-25px"; // Desktop
    }
  }
  
  setTaglineMargin();
  window.addEventListener('resize', setTaglineMargin);
  }

  // --- 2. MOBILE MENU LOGIC ---
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

  document.addEventListener('contextmenu', e => { if (e.target.tagName === 'IMG') e.preventDefault(); });
});