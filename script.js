/* ============================================
   NORD ELECTRIC - JAVASCRIPT
   Interactive Functionality & User Experience
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initializeHamburgerMenu();
  initializeButtons();
  initializeScrollAnimations();
  initializeNewsletterForm();
  initializeContactForm();
  initializeAccessibility();
});

/* ============================================
   HAMBURGER MENU
   ============================================ */

function initializeHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInside && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.focus();
    }
  });
}

/* ============================================
   BUTTON INTERACTIONS
   ============================================ */

function initializeButtons() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    // Ripple effect on click
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      // Remove existing ripple
      const existingRipple = this.querySelector('.ripple');
      if (existingRipple) {
        existingRipple.remove();
      }

      this.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);

      // Add active state
      this.classList.add('active');
      setTimeout(() => {
        this.classList.remove('active');
      }, 300);
    });

    // Keyboard support (Enter and Space)
    button.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });

    // Focus management
    button.addEventListener('focus', function() {
      this.style.outline = '2px solid rgba(0, 102, 204, 0.5)';
      this.style.outlineOffset = '2px';
    });

    button.addEventListener('blur', function() {
      this.style.outline = 'none';
    });
  });
}

/* ============================================
   SCROLL ANIMATIONS (Intersection Observer)
   ============================================ */

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animation to improve performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.solution-card, .news-card, .client-logo, .work-card, .badge'
  );

  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

/* ============================================
   NEWSLETTER FORM VALIDATION
   ============================================ */

function initializeNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  const emailInput = form?.querySelector('input[type="email"]');
  const submitButton = form?.querySelector('button');

  if (!form || !emailInput || !submitButton) return;

  // Real-time email validation
  emailInput.addEventListener('input', function() {
    const isValid = validateEmail(this.value);
    if (isValid) {
      this.style.borderColor = '#27ae60';
    } else if (this.value.length > 0) {
      this.style.borderColor = '#e74c3c';
    } else {
      this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    }
  });

  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validateEmail(emailInput.value)) {
      emailInput.style.borderColor = '#e74c3c';
      emailInput.focus();
      return;
    }

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    submitButton.classList.add('loading');

    // Simulate form submission
    setTimeout(() => {
      submitButton.textContent = 'Obrigado!';
      submitButton.style.background = '#27ae60';

      // Reset after 3 seconds
      setTimeout(() => {
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = 'Inscrever';
        submitButton.style.background = '';
        submitButton.classList.remove('loading');
        emailInput.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      }, 3000);
    }, 1000);
  });

  // Focus states for accessibility
  emailInput.addEventListener('focus', function() {
    this.style.boxShadow = '0 0 10px rgba(26, 188, 156, 0.3)';
  });

  emailInput.addEventListener('blur', function() {
    if (this.value.length === 0) {
      this.style.boxShadow = 'none';
    }
  });
}

/* ============================================
   EMAIL VALIDATION HELPER
   ============================================ */

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ============================================
   CONTACT FORM HANDLER
   ============================================ */

function initializeContactForm() {
  const form = document.getElementById('contactForm');
  const submitButton = form?.querySelector('button[type="submit"]');

  if (!form || !submitButton) return;

  form.addEventListener('submit', function(e) {
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    submitButton.style.opacity = '0.7';

    // Form will naturally submit to FormSubmit.co
    // No preventDefault - let it submit normally
  });
}

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================ */

function initializeAccessibility() {
  // Keyboard navigation for cards
  const interactiveCards = document.querySelectorAll('.solution-card, .news-card, .client-logo, .work-card');

  interactiveCards.forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Trigger any click handlers if card is clickable
        const link = this.querySelector('a');
        if (link) {
          link.click();
        }
      }
    });
  });

  // Skip to main content link (if needed)
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.style.position = 'absolute';
  skipLink.style.top = '-40px';
  skipLink.style.left = '0';
  skipLink.style.backgroundColor = '#000';
  skipLink.style.color = '#fff';
  skipLink.style.padding = '8px';
  skipLink.style.zIndex = '100';

  skipLink.addEventListener('focus', function() {
    this.style.top = '0';
  });

  skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  // Announce dynamic content updates to screen readers
  announceToScreenReaders('Página carregada com sucesso');
}

/* ============================================
   SCREEN READER ANNOUNCEMENTS
   ============================================ */

function announceToScreenReaders(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.textContent = message;
  announcement.style.position = 'absolute';
  announcement.style.left = '-10000px';
  announcement.style.width = '1px';
  announcement.style.height = '1px';
  announcement.style.overflow = 'hidden';

  document.body.appendChild(announcement);

  setTimeout(() => {
    announcement.remove();
  }, 1000);
}

/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/* ============================================
   ACTIVE NAV LINK
   ============================================ */

window.addEventListener('scroll', function() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const sections = document.querySelectorAll('section');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

/* ============================================
   PERFORMANCE OPTIMIZATIONS
   ============================================ */

// Lazy load images (if needed)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

/* ============================================
   RIPPLE EFFECT STYLES (CSS)
   ============================================ */

const style = document.createElement('style');
style.innerHTML = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-expand 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-expand {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .btn:active {
    transform: scale(0.96);
  }

  .nav-menu a.active {
    color: var(--primary-color);
    font-weight: 600;
  }

  .nav-menu a.active::after {
    width: 100%;
  }
`;

document.head.appendChild(style);

/* ============================================
   THEME SWITCHER (Optional)
   ============================================ */

function initializeThemeSwitcher() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  const themeButtons = document.querySelectorAll('[data-theme]');
  themeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const theme = this.getAttribute('data-theme');
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

// Uncomment the line below to enable theme switching
// initializeThemeSwitcher();

/* ============================================
   WINDOW RESIZE HANDLER
   ============================================ */

let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    // Handle resize events here
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (window.innerWidth > 480) {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    }
  }, 250);
});

/* ============================================
   LOCAL STORAGE MANAGEMENT
   ============================================ */

function saveUserPreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function clearUserPreferences() {
  localStorage.clear();
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============================================
   INITIALIZATION COMPLETE
   ============================================ */

(function() {
  console.log('Nord Electric - Fully initialized and ready!');
})();
