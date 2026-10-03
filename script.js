(function () {
  const navBtns = document.querySelectorAll('.nav-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const logoLink = document.getElementById('logo-link');
  const quickCards = document.querySelectorAll('.quick-card');

  function switchTab(tabId) {
    panels.forEach(p => p.classList.remove('active'));
    navBtns.forEach(b => b.classList.remove('active'));

    const panel = document.getElementById('tab-' + tabId);
    if (panel) panel.classList.add('active');

    navBtns.forEach(b => {
      if (b.dataset.tab === tabId) b.classList.add('active');
    });

    // Close mobile menu
    if (mobileNav) mobileNav.classList.remove('open');

    // Scroll to top of main content on tab change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  quickCards.forEach(card => {
    card.addEventListener('click', () => {
      const tab = card.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('home');
    });
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (
      mobileNav &&
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mobileNav.classList.remove('open');
    }
  });
})();
