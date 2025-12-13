document.addEventListener("DOMContentLoaded", function() {
  
  // 1. INJECT THE HAMBURGER BUTTON
  const menuBtn = document.createElement("button");
  menuBtn.id = "mobile-menu-btn";
  menuBtn.innerHTML = "&#9776;"; // The Unicode Hamburger Symbol
  document.body.prepend(menuBtn);

  // 2. INJECT THE MOBILE CSS STYLES
  const style = document.createElement('style');
  style.innerHTML = `
    /* --- DESKTOP (Default) --- */
    #mobile-menu-btn {
      display: none;
    }

    /* --- MOBILE (Max Width 800px) --- */
    @media (max-width: 800px) {
      
      /* MAIN LAYOUT ADJUSTMENT */
      body {
        position: relative;
        overflow-x: hidden;
      }

      /* PUSH MAIN CONTENT DOWN SLIGHTLY SO BUTTON DOESN'T COVER TITLE */
      .main {
        padding-top: 60px !important; 
      }

      /* THE BUTTON (Icon Only, Top Left) */
      #mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 15px;
        left: 15px; /* MOVED TO LEFT */
        z-index: 10000;
        
        width: 45px;  /* Square shape */
        height: 45px;
        font-size: 24px; /* Large Icon */
        
        background-color: #4fd1c5; /* Your Accent Color */
        color: #05070b;
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        cursor: pointer;
        transition: background 0.2s;
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

  // 3. ADD CLICK EVENT LISTENER
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    
    // Toggle Icon and Color
    if (sidebar.classList.contains('mobile-open')) {
      menuBtn.innerHTML = "&#10005;"; // The 'X' symbol
      menuBtn.style.backgroundColor = "#f56565"; // Red
      menuBtn.style.color = "#fff";
    } else {
      menuBtn.innerHTML = "&#9776;"; // The Hamburger symbol
      menuBtn.style.backgroundColor = "#4fd1c5"; // Green/Teal
      menuBtn.style.color = "#05070b";
    }
  });

  // Close sidebar if clicking outside
  document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('mobile-menu-btn');
    
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== btn) {
      sidebar.classList.remove('mobile-open');
      btn.innerHTML = "&#9776;";
      btn.style.backgroundColor = "#4fd1c5";
      btn.style.color = "#05070b";
    }
  });

  // 4. LEGAL FOOTER
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
        Mystik Creatures, card designs, and all associated assets are the property of Mystik Creatures, Inc.
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
