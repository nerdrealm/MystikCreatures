document.addEventListener("DOMContentLoaded", function() {

  // --- 1. MAKE POWERS IMAGE CLICKABLE (New Code) ---
  const powersImg = document.querySelector('.sidebar-powers img');
  if (powersImg) {
    // Change cursor to indicate it's clickable
    powersImg.style.cursor = 'pointer';
    // Add click event to redirect to Overview
    powersImg.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

  // --- 2. INJECT THE HAMBURGER BUTTON ---
  const menuBtn = document.createElement("button");
  menuBtn.id = "mobile-menu-btn";
  menuBtn.innerHTML = "&#9776;"; // The Unicode Hamburger Symbol
  document.body.prepend(menuBtn);

  // --- 3. INJECT THE MOBILE CSS STYLES ---
  const style = document.createElement('style');
  style.innerHTML = `
    /* --- DESKTOP (Default) --- */
    #mobile-menu-btn {
      display: none;
    }

    /* --- MOBILE (Max Width 800px) --- */
    @media (max-width: 800px) {

    /* --- CUSTOM MOBILE SIZES --- */
      
      /* 1. "Mystik Creatures" Title Size */
      .sidebar h1 {
        font-size: 1.5rem !important; 
        text-align: center;
        margin-top: 10px; /* Space for the close button */
      }

      /* 2. "Powers.png" Image Size */
      .sidebar-powers img {
        max-width: 50% !important; 
        margin-bottom: 20px !important;
      }
      
      /* MAIN LAYOUT ADJUSTMENT */
      body {
        position: relative;
        overflow-x: hidden;
      }

      /* PUSH MAIN CONTENT DOWN SLIGHTLY */
      .main {
        padding-top: 60px !important; 
      }

      /* THE BUTTON (Icon Only) */
      #mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        
        /* START ON THE LEFT */
        top: 15px;
        left: 15px; 
        
        z-index: 10000;
        
        /* SMALLER SIZE */
        width: 36px;  
        height: 36px;
        font-size: 20px; 
        
        background-color: #4fd1c5; /* Accent Color */
        color: #05070b;
        border: none;
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.5);
        cursor: pointer;
        
        /* SMOOTH ANIMATION FOR MOVING RIGHT */
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* BUTTON POSITION WHEN OPEN (Move to Right side of Sidebar) */
      #mobile-menu-btn.btn-open {
        left: 230px; /* Moves button to the right edge of the 280px sidebar */
        background-color: #f56565 !important; /* Red */
        color: white !important;
      }

      /* HIDE SIDEBAR BY DEFAULT */
      .sidebar {
        position: fixed !important;
        top: 0;
        left: 0;
        height: 100vh !important;
        width: 280px !important;
        z-index: 9999;
        transform: translateX(-100%); /* Push off-screen left */
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 5px 0 15px rgba(0,0,0,0.7);
        border-right: 1px solid #2d3748;
      }

      /* OPEN STATE */
      .sidebar.mobile-open {
        transform: translateX(0);
      }

      /* DIM BACKGROUND */
      .sidebar.mobile-open::before {
        content: '';
        position: fixed;
        top: 0;
        left: 280px;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.6);
        z-index: 9998;
      }
    }
  `;
  document.head.appendChild(style);

  // --- 4. ADD CLICK EVENT LISTENER FOR MENU ---
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const sidebar = document.querySelector('.sidebar');
    
    // Toggle classes on Sidebar AND Button
    sidebar.classList.toggle('mobile-open');
    menuBtn.classList.toggle('btn-open');
    
    // Toggle Icon
    if (sidebar.classList.contains('mobile-open')) {
      menuBtn.innerHTML = "&#10005;"; // The 'X' symbol
    } else {
      menuBtn.innerHTML = "&#9776;"; // The Hamburger symbol
    }
  });

  // Close sidebar if clicking outside
  document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('mobile-menu-btn');
    
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== btn) {
      sidebar.classList.remove('mobile-open');
      btn.classList.remove('btn-open'); // Move button back to left
      btn.innerHTML = "&#9776;";
    }
  });

  // --- 5. LEGAL FOOTER ---
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
        &copy; 2026 <strong>Mystik Creatures™ TCG & Mystik Creatures, Inc.</strong>. All Rights Reserved.
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
});