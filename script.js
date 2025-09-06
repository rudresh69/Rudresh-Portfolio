
    document.addEventListener('DOMContentLoaded', function() {
      // --- Typing Effect ---
      if(document.getElementById('typing-effect')){
          new Typed('#typing-effect', {
            strings: ['FullStack Developer', 'UI/UX Enthusiast', 'Problem Solver'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
          });
      }

      // --- Mobile Menu Toggle ---
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenuButton.addEventListener('click', () => {
        const isDisplayed = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isDisplayed ? 'none' : 'block';
      });

      const mobileNavLinks = mobileMenu.getElementsByTagName('a');
      for (let link of mobileNavLinks) {
          link.addEventListener('click', () => {
              mobileMenu.style.display = 'none';
          });
      }
      
      // --- Sticky Header on Scroll ---
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      });

      // --- Active Nav Link on Scroll ---
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.desktop-nav a.nav-link');

      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
          }
        });
      });

      // --- Reveal sections on scroll ---
      const revealElements = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      revealElements.forEach(el => revealObserver.observe(el));

    });
