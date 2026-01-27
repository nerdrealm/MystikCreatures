document.addEventListener("DOMContentLoaded", function() {
  
  // --- INJECT EXACT SIDEBAR HTML FROM CODEX.HTML ---
  const sidebarHTML = `
    <h1>Mystik Creatures™</h1>
    <div class="sidebar-powers">
      <img src="Powers.png" alt="Elemental Powers">
    </div>
    <nav class="sidebar-nav">
      <a href="index.html">Overview</a>
      <a href="card_list.html">Card List</a>
      <a href="codex.html">The Mystik Codex</a>
      <a href="search.html">Search</a>
      <a href="compare.html">Compare Cards</a>
      <a href="deck_builder.html">Deck Builder</a>
      <a href="gameplay.html">Gameplay</a>
      <a href="planet.html">Explore Myrithil</a>
      <a href="https://www.royalroad.com/fiction/142593/the-last-concordant" target="_blank" rel="noopener noreferrer" style="color: #feebc8;">The Last Concordant</a>
      <a href="https://www.facebook.com/MystikCreatures/" target="_blank" rel="noopener noreferrer" style="color: #1877f2;">News/Updates</a>
      <a href="shop.html" style="color:#feb2b2;" id="shop-link">Official Shop</a>
    </nav>
    <div class="sidebar-logo-bottom">
      <img src="MystikLogo-PNG.png" alt="Mystik Creatures Logo">
    </div>
  `;
  
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && !sidebar.innerHTML.trim()) {
    sidebar.innerHTML = sidebarHTML;
  }
  
  // --- INJECT DYNAMIC STYLES ---
  
  // No highlight on focus (accessibility preserved with :focus-visible)
  const noHighlightStyle = document.createElement('style');
  noHighlightStyle.innerHTML = `
    *:focus:not(:focus-visible) { 
      outline: none !important; 
      box-shadow: none !important; 
    }
  `;
  document.head.appendChild(noHighlightStyle);
  
  // Mobile responsive adjustments
  const mobileStyle = document.createElement('style');
    mobileStyle.innerHTML = `
      @media (max-width: 800px) {
        .sidebar-powers { margin-top: -1.5rem !important; }
        .sidebar-logo-bottom img { max-width: 80% !important; }
      }
    `;
  document.head.appendChild(mobileStyle);

  // --- SIDEBAR INTERACTIVITY ---

  // Top Image (Powers.png) -> Links to Home
  const topImage = document.querySelector('.sidebar-powers img');
  if (topImage) {
    topImage.style.cursor = 'pointer';
    topImage.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Sidebar Title Text (Mystik Creatures™) -> Links to Home
  const sidebarTitle = document.querySelector('.sidebar h1');
  if (sidebarTitle) {
    sidebarTitle.style.cursor = 'pointer';
    sidebarTitle.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Bottom Image (Mystik Logo) -> Add Tagline
  const bottomImage = document.querySelector('.sidebar-logo-bottom img');
  if (bottomImage) {
    // Ensure correct logo source
    bottomImage.src = "Mystik.png"; 
    bottomImage.style.marginTop = "10px";
    bottomImage.style.marginBottom = "0px"; 

    // Import Cinzel font for tagline
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap'; 
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Create tagline element
    const tagline = document.createElement('div');
    tagline.innerText = "A New Realm Awaits";
    
    // Apply tagline styles
    Object.assign(tagline.style, {
      fontFamily: "'Cinzel', serif",
      fontSize: "0.8rem",
      fontWeight: "400",
      color: "#e2e8f0",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "2px",
      marginTop: "-20px",
      marginBottom: "20px",
      textShadow: "0 0 8px rgba(255, 255, 255, 0.4)",
      width: "100%",
      opacity: "0.9"
    });

    // Insert tagline after the bottom logo
    bottomImage.insertAdjacentElement('afterend', tagline);
  }

  // --- MOBILE MENU TOGGLE ---
  const menuBtn = document.getElementById("mobile-menu-btn");
  const sidebarEl = document.querySelector('.sidebar');

  if (menuBtn && sidebarEl) {
    // Toggle menu on button click
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebarEl.classList.toggle('mobile-open');
      menuBtn.classList.toggle('btn-open');
      
      // Change icon: hamburger (☰) or close (✕)
      menuBtn.innerHTML = sidebarEl.classList.contains('mobile-open') 
        ? "&#10005;" 
        : "&#9776;";
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (sidebarEl.classList.contains('mobile-open') && 
          !sidebarEl.contains(e.target) && 
          e.target !== menuBtn) {
        sidebarEl.classList.remove('mobile-open');
        menuBtn.classList.remove('btn-open');
        menuBtn.innerHTML = "&#9776;";
      }
    });
  }

  // --- ACTIVE PAGE HIGHLIGHTING ---
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Find and highlight the active navigation link
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

    // Show shop icon only on shop page
  if (currentPage === 'shop.html') {
    const shopLink = document.getElementById('shop-link');
    if (shopLink) {
      shopLink.innerHTML = '<i class="fa-solid fa-shop"></i> Official Shop';
    }
  }
});