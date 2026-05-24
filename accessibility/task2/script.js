document.addEventListener('DOMContentLoaded', () => {

  // Get all dropdown containers
  const dropdownContainers = document.querySelectorAll('.has-dropdown');

  // Loop through each dropdown
  dropdownContainers.forEach(container => {

    const trigger = container.querySelector('.dropdown-trigger');
    const menu = container.querySelector('.dropdown-menu');

    // Open dropdown when trigger is clicked
    trigger.addEventListener('click', (e) => {

      e.stopPropagation();

      const isExpanded =
        trigger.getAttribute('aria-expanded') === 'true';

      // Close other open dropdowns
      closeAllDropdowns();

      // Open current dropdown if closed
      if (!isExpanded) {

        trigger.setAttribute('aria-expanded', 'true');

        menu.classList.add('is-visible');

        container.classList.add('is-open');

      }

    });

  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {

    closeAllDropdowns();

  });

  // Handle Escape key
  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

      // Close dropdowns
      closeAllDropdowns();

      // Close mobile menu if open
      if (
        mobileToggle.getAttribute('aria-expanded') === 'true'
      ) {

        toggleMobileMenu();

      }

    }

  });

  // Close all dropdown menus
  function closeAllDropdowns() {

    dropdownContainers.forEach(container => {

      const trigger =
        container.querySelector('.dropdown-trigger');

      const menu =
        container.querySelector('.dropdown-menu');

      trigger.setAttribute('aria-expanded', 'false');

      menu.classList.remove('is-visible');

      container.classList.remove('is-open');

    });

  }

  // Mobile menu button
  const mobileToggle =
    document.querySelector('.mobile-nav-toggle');

  // Main navigation wrapper
  const mainNavWrapper =
    document.querySelector('.header-bottom-tier');

  // Toggle mobile navigation
  function toggleMobileMenu() {

    const isExpanded =
      mobileToggle.getAttribute('aria-expanded') === 'true';

    mobileToggle.setAttribute(
      'aria-expanded',
      !isExpanded
    );

    // Change icon
    mobileToggle.textContent =
      !isExpanded ? '✕' : '☰';

    // Show / hide menu
    mainNavWrapper.classList.toggle('is-active');

  }

  // Mobile toggle click event
  if (mobileToggle) {

    // Default hamburger icon
    mobileToggle.textContent = '☰';

    mobileToggle.addEventListener('click', (e) => {

      e.stopPropagation();

      toggleMobileMenu();

    });

  }

});