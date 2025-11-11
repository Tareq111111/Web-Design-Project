 
    // Keep a small error-handler as a safety net for remote images.
    (function() {
      document.querySelectorAll('img').forEach((img, idx) => {
        img.addEventListener('error', function() {
          if (this.dataset.fallbacked) return;
          this.dataset.fallbacked = '1';
          const fallback = 'https://picsum.photos/seed/fallback-' + idx + '/900/600';
          this.src = fallback;
          this.alt = (this.alt || 'Image') + ' (fallback)';
        });
        if (img.complete && img.naturalWidth === 0) {
          img.dispatchEvent(new Event('error'));
        }
      });

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    })();