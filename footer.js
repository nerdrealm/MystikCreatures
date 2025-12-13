document.addEventListener("DOMContentLoaded", function() {
  
  // 1. INJECT THE HAMBURGER BUTTON
  const menuBtn = document.createElement("button");
  menuBtn.id = "mobile-menu-btn";
  menuBtn.innerHTML = "☰ MENU";
  document.body.prepend(menuBtn); // Adds it to the very top of the body

  // 2. INJECT THE MOBILE CSS STYLES
  const style = document.createElement('style');
  style.innerHTML = `
    /* --- DESKTOP (Default) --- */
    #mobile-menu-btn {
      display: none; /* Hidden on computer */
    }

    /* --- MOBILE (Max Width 800px) --- */
    @media (max-width: 800px) {
      
      /* MAIN LAYOUT ADJUSTMENT */
      body {
        position: relative;
        overflow-x: hidden; /* Prevents side scrolling when menu opens */
      }

      /* THE BUTTON */
      #mobile-menu-btn {
        display: block;
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 10000;
        background-color: #4fd1c5; /* Your Accent Color */
        color: #05070b;
        border: none;
        padding: 10px 16px;
        border-radius: 8px;
        font-weight: bold;
        font-family: system-ui, sans-serif;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        cursor: pointer;
      }

      /* HIDE SIDEBAR BY DEFAULT */
      .sidebar {
        position: fixed !important; /* Force fixed over static */
        top: 0;
        left: 0;
        height: 100vh !important;
        width: 280px !important;
        z-index: 9999;
        transform: translateX(-100%); /* Push it off-screen to the left */
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 5px 0 15px rgba(0,0,0,0.7);
        border-right: 1px solid #2d3748;
      }

      /* OPEN STATE */
      .sidebar.mobile-open {
        transform: translateX(0); /* Slide it back in */
      }

      /* DIM THE BACKGROUND CONTENT WHEN OPEN */
      .sidebar.mobile-open::before {
        content: '';
        position: fixed;
        top: 0;
        left: 280px; /* Starts where sidebar ends */
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
    e.stopPropagation(); // Prevent immediate closing
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
    
    // Toggle button text
    if (sidebar.classList.contains('mobile-open')) {
      menuBtn.innerHTML = "✕ CLOSE";
      menuBtn.style.backgroundColor = "#f56565"; // Red color when open
    } else {
      menuBtn.innerHTML = "☰ MENU";
      menuBtn.style.backgroundColor = "#4fd1c5"; // Green color when closed
    }
  });

  // Close sidebar if clicking outside of it
  document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('mobile-menu-btn');
    
    // If sidebar is open, and click is NOT on sidebar and NOT on button
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== btn) {
      sidebar.classList.remove('mobile-open');
      btn.innerHTML = "☰ MENU";
      btn.style.backgroundColor = "#4fd1c5";
    }
  });

  // 4. ORIGINAL FOOTER CONTENT
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
