// Navbar scroll effect
    window.addEventListener('scroll', () => {
      document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
      document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const link = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, {
      threshold: 0.4
    });
    sections.forEach(s => observer.observe(s));



    // Product tabs
    document.getElementById('catTabs').addEventListener('click', e => {
      if (!e.target.classList.contains('cat-tab')) return;
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.prod-panel').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById('panel-' + e.target.dataset.panel).classList.add('active');
    });