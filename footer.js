document.addEventListener("DOMContentLoaded", function() {
    
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // Disable keyboard shortcuts for DevTools
  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u')) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  document.addEventListener('touchstart', function(e) {
      if (e.target.tagName === 'IMG' && 
        !e.target.closest('.sidebar') &&
        !e.target.classList.contains('card-thumbnail') && 
        !e.target.closest('.card-item-image') &&
        !e.target.closest('.product-image') &&
        e.target.id !== 'modal-image') {
      e.preventDefault();
    }
  }, { passive: false });

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
        &copy; 2026 <strong>Mystik Creatures™ TCG & Mystik Creatures Inc.</strong>
        <br>
        All Rights Reserved.
      </p>
      <p>
        Mystik Creatures™, card designs, and all associated assets are the property of Mystik Creatures Inc.
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

  // --- ORGANIC 3D ELEMENTAL ORBS BACKGROUND ---
(function initMystikParticles() {
    // 1. EXCLUDE PLANET.HTML
    // Do not run this script if we are on the 3D planet page
    if (window.location.pathname.toLowerCase().includes('planet.html')) return;

    // 2. CREATE AND INJECT CANVAS
    const canvas = document.createElement('canvas');
    canvas.id = 'mystik-orb-canvas';
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Ensures you can still click cards/links through the canvas
        zIndex: '0'            // Sits right above the body background gradient
    });
    
    // Insert the canvas as the very first element in the body
    document.body.insertBefore(canvas, document.body.firstChild);

    // 3. ELEVATE EXISTING CONTENT
    // Ensure the sidebar and main content sit above the particles
    const style = document.createElement('style');
    style.innerHTML = `
        .sidebar, .main { position: relative; z-index: 1; }
        #image-modal, .editor-modal { z-index: 10000; } /* Keep modals safely on top */
    `;
    document.head.appendChild(style);

    // 4. CANVAS SETUP
    const ctx = canvas.getContext('2d', { alpha: true });
    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        // Adjust for high-DPI (Retina) displays for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resize);
    resize();

    // 5. ELEMENTAL COLORS (RGB format for easy opacity blending)
    const elementColors = [
        '165, 105, 189', // Dark (Purple)
        '224, 205, 174', // Earth (Tan)
        '243, 156, 18',  // Fire (Orange)
        '46, 204, 113',  // Forest (Green)
        '255, 255, 255', // Light (White)
        '244, 208, 63',  // Thunder (Yellow)
        '52, 152, 219',  // Water (Blue)
        '135, 206, 235'  // Wind (Sky Blue)
    ];

    // Responsive Orb Count (fewer on mobile to save battery/CPU)
    const ORB_COUNT = width < 800 ? 30 : 65;
    const orbs = [];

    // 6. ORB CLASS (Handles organic Parallax movement)
    class Orb {
        constructor() {
            this.reset(true);
        }

        reset(randomY = false) {
            // Z-Depth factor (0.1 to 1.0) - creates the 3D parallax illusion
            this.z = Math.random() * 0.9 + 0.1; 
            
            this.x = Math.random() * width;
            // If initializing, spawn anywhere. If resetting after floating off screen, spawn at bottom.
            this.y = randomY ? Math.random() * height : height + 50; 
            
            // Size is influenced by Z-depth (closer = bigger)
            this.baseRadius = Math.random() * 40 + 10;
            this.radius = this.baseRadius * this.z;
            
            // Velocity is influenced by Z-depth (closer = moves faster)
            this.vy = -(Math.random() * 0.5 + 0.2) * this.z; 
            
            // Wobble for organic floating effect
            this.wobbleSpeed = Math.random() * 0.02 + 0.005;
            this.wobbleAngle = Math.random() * Math.PI * 2;
            this.wobbleRadius = Math.random() * 0.5 * this.z;

            // Appearance
            this.color = elementColors[Math.floor(Math.random() * elementColors.length)];
            // Opacity is influenced by Z-depth (closer = brighter, max 25% opacity so it's not distracting)
            this.opacity = (Math.random() * 0.15 + 0.05) * this.z;
        }

        update() {
            this.y += this.vy;
            this.wobbleAngle += this.wobbleSpeed;
            this.x += Math.sin(this.wobbleAngle) * this.wobbleRadius;

            // Reset orb if it floats off the top of the screen
            if (this.y < -this.radius) {
                this.reset();
            }
        }

        draw(ctx) {
            ctx.beginPath();
            // Create a soft glowing radial gradient
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);          // Core
            gradient.addColorStop(0.4, `rgba(${this.color}, ${this.opacity * 0.6})`);    // Mid
            gradient.addColorStop(1, `rgba(${this.color}, 0)`);                         // Faded Edge
            
            ctx.fillStyle = gradient;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize Orbs
    for (let i = 0; i < ORB_COUNT; i++) {
        orbs.push(new Orb());
    }

    // 7. ANIMATION LOOP
    function animate() {
        // Clear canvas every frame
        ctx.clearRect(0, 0, width, height);

        // Blending mode 'screen' makes overlapping orbs glow together beautifully
        ctx.globalCompositeOperation = 'screen';

        for (let i = 0; i < orbs.length; i++) {
            orbs[i].update();
            orbs[i].draw(ctx);
        }

        requestAnimationFrame(animate);
    }

    // Start the magic
    animate();

})();

});
