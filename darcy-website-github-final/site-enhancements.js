(function () {
  'use strict';

  var app = document.getElementById('app');
  var routePages = {
    privacy: ['Privacy Policy', 'Darcy Construction is committed to protecting and respecting your privacy.', 'We may process information you provide by phone, email, enquiry, recruitment contact or website use to respond to requests, provide services, meet legal obligations and administer our relationship with you. Questions about personal data should be sent to enquiries@darcyconstruction.co.uk.'],
    cookies: ['Cookie Policy', 'Darcy Construction uses cookies to record visits and improve the website experience.', 'The final cookie inventory, consent wording and retention periods must be confirmed against the production analytics configuration before launch.']
  };

  var contentPages = {
    story: ['Our Story', 'Founded by three construction professionals, Darcy has built a reputation for quality projects and long-lasting client relationships.', '<p>Darcy is led by three Directors whose experience and complementary skills shape how projects are delivered.</p><h2>People who stay close</h2><p>Robert Mew is Construction Director, Parminder Mew is Founder and Managing Director, and Peter Oliver is Commercial Director. The wider on-site and head-office team shares the same goal: deliver what Darcy promises and exceed expectations.</p><p>Integrity and open communication sit at the centre of the business.</p>'],
    services: ['What We Do', 'From project management and pre-construction to main contracting and developments.', '<div class="cards"><article class="card"><h2>Project management &amp; pre-construction</h2><p>Darcy manages a build from pre-construction through handover, taking time to understand non-negotiables, limitations and the decisions ahead.</p></article><article class="card"><h2>Main contracting</h2><p>Planning and implementing construction with quality craftsmanship, regular communication and a clear route through delivery.</p></article><article class="card"><h2>Developments</h2><p>Creating unique homes for private clients and developers, with experienced guidance from early decisions to completion.</p></article></div>'],
    work: ['Projects', 'Real projects, considered carefully and delivered in partnership.', '<div class="cards"><article class="card"><h2>Sozo Ministries</h2><p>Community project case study.</p><a class="text-link" href="#case-study">Read the case study</a></article><article class="card"><h2>Pauncefoot House</h2><p>Residential project case study.</p><a class="text-link" href="#pauncefoot-house">Read the case study</a></article><article class="card"><h2>Canada Common</h2><p>Residential project case study.</p><a class="text-link" href="#canada-common">Read the case study</a></article><article class="card"><h2>Farleigh School</h2><p>Education project case study.</p><a class="text-link" href="#farleigh-school">Read the case study</a></article><article class="card"><h2>Canterton House</h2><p>Published Darcy case study.</p></article><article class="card"><h2>Tanglemere, Sarisbury Green</h2><p>Published Darcy case study.</p></article><article class="card"><h2>QE2 Activity Centre, Southampton</h2><p>Published Darcy case study.</p></article><article class="card"><h2>October Books, Southampton</h2><p>Published Darcy case study.</p></article></div>'],
    contact: ['Contact Darcy Construction', 'Tell us what you are considering. A first conversation can clarify a great deal.', '<div class="contact-grid"><div><h2>Get in touch with the team</h2><p>Head Office</p><p><a href="tel:01794519545">01794 519545</a><br><a href="mailto:enquiries@darcyconstruction.co.uk">enquiries@darcyconstruction.co.uk</a></p><p>Unit 13 Westlink,<br>Belbins Business Park,<br>Cupernham Lane,<br>Romsey, Hampshire,<br>SO51 7JF</p><p><a href="https://www.linkedin.com/company/darcy-construction-limited/" rel="external noopener">LinkedIn</a> · <a href="https://www.facebook.com/Darcy-Construction-100425191386116" rel="external noopener">Facebook</a> · <a href="https://www.instagram.com/darcyconstruction.co.uk/" rel="external noopener">Instagram</a></p></div><form id="contact-form" novalidate aria-describedby="contact-form-status"><div id="contact-form-status" class="form-status" role="status" aria-live="polite" aria-atomic="true"></div><label for="contact-name"><span>Name</span><input id="contact-name" name="name" autocomplete="name" required></label><label for="contact-email"><span>Email</span><input id="contact-email" name="email" type="email" autocomplete="email" required></label><label for="contact-project"><span>What are you considering?</span><select id="contact-project" name="project"><option>New build</option><option>Refurbishment</option><option>Pre-construction advice</option><option>Something else</option></select></label><label for="contact-message"><span>Tell us a little more</span><textarea id="contact-message" name="message" required></textarea></label><button class="button" type="submit">Send enquiry <span aria-hidden="true">↗</span></button></form></div>']
  };

  function renderPolicy(key) {
    var page = routePages[key];
    if (!page || !app) return;
    document.title = page[0] + ' | Darcy Construction';
    app.innerHTML = '<section class="page-hero" aria-labelledby="policy-title"><p class="eyebrow">Darcy Construction</p><h1 id="policy-title" tabindex="-1">' + page[0] + '</h1><p>' + page[1] + '</p></section><section class="section page-body"><h2>Our approach</h2><p>' + page[2] + '</p><p><a class="text-link" href="#contact">Start a conversation</a></p></section>';
    var heading = document.getElementById('policy-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function renderContent(key) {
    var page = contentPages[key];
    if (!page || !app) return;
    document.title = page[0] + ' | Darcy Construction';
    app.innerHTML = '<section class="page-hero" aria-labelledby="enhanced-title"><p class="eyebrow">Darcy Construction</p><h1 id="enhanced-title" tabindex="-1">' + page[0] + '</h1><p>' + page[1] + '</p></section><section class="section page-body">' + page[2] + '<p><a class="text-link" href="#contact">Start a conversation</a></p></section>';
    var heading = document.getElementById('enhanced-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function ensureFooterLinks() {
    var footer = document.getElementById('site-footer');
    if (!footer || footer.querySelector('[data-legal-links]')) return;
    var footerBase = footer.querySelector('.footer-base span:last-child');
    if (footerBase) footerBase.innerHTML = '<a href="/privacy/">Privacy</a><span aria-hidden="true"> · </span><a href="/cookies/">Cookies</a>';
    var projectLink = footer.querySelector('a[href="#work"]');
    if (projectLink) projectLink.textContent = 'Projects';
    var links = document.createElement('p');
    links.dataset.legalLinks = 'true';
    links.className = 'footer-legal-links';
    links.innerHTML = '<a href="#privacy">Privacy policy</a><span aria-hidden="true"> · </span><a href="#cookies">Cookie policy</a>';
    footer.appendChild(links);
  }

  function normaliseProductionLinks() {
    var projectRoutes = {
      'Sozo Ministries': '/projects/sozo-ministries-conference-hall/',
      'Sozo Ministries Conference Hall': '/projects/sozo-ministries-conference-hall/',
      'Pauncefoot House': '/projects/pauncefoot-house/',
      'Canada Common': '/projects/canada-common/',
      'Farleigh School': '/projects/farleigh-school/'
    };
    var routeMap = {
      '#home': '/', '#story': '/our-story/', '#approach': '/our-approach/', '#services': '/what-we-do/',
      '#sectors': '/sectors/', '#commercial': '/sectors/commercial/', '#residential': '/sectors/residential/',
      '#education': '/sectors/education/', '#community': '/sectors/community/', '#work': '/projects/',
      '#insights': '/insights/', '#careers': '/careers/', '#contact': '/contact/', '#privacy': '/privacy/', '#cookies': '/cookies/',
      '#pre-construction-planning': '/what-we-do/pre-construction-planning/', '#design-build': '/what-we-do/design-build/', '#main-contracting': '/what-we-do/main-contracting/', '#construction-management': '/what-we-do/construction-management/', '#project-management': '/what-we-do/project-management/', '#refurbishment-alterations': '/what-we-do/refurbishment-alterations/', '#refurbishment': '/what-we-do/refurbishment/'
    };
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      if (link.closest('.site-header')) return;
      var destination = routeMap[link.getAttribute('href')];
      if (destination) link.setAttribute('href', destination);
    });
    document.querySelectorAll('a[href="#case-study"]').forEach(function (link) {
      link.setAttribute('href', '/projects/sozo-ministries-conference-hall/');
    });
    document.querySelectorAll('.featured-project, .project, .card').forEach(function (card) {
      var heading = card.querySelector('h2, h3');
      var href = heading && projectRoutes[heading.textContent.trim()];
      if (!href) return;
      card.querySelectorAll('a').forEach(function (link) { link.setAttribute('href', href); });
    });
  }

  function refineHeader() {
    var nav = document.getElementById('nav');
    if (!nav || nav.dataset.refined === 'true') return;
    nav.innerHTML = '<a href="#home">Home</a><a href="#story">About</a><a href="#services">Services</a><a href="#work">Projects</a><a href="#sectors">Sectors</a><a href="#contact">Contact</a><a class="mobile-nav-cta" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>';
    nav.dataset.refined = 'true';
  }

  function refineProfessionalShell() {
    var key = location.hash.slice(1) || 'home';
    var header = document.getElementById('site-header');
    var footer = document.getElementById('site-footer');
    if (header) header.classList.add('professional-header');
    if (footer) footer.classList.add('professional-footer');
    if (app) app.classList.toggle('case-review-reset', key === 'case-study' || /^(farleigh-school|pauncefoot-house|canada-common)$/.test(key));
  }

  function refineHomepage() {
    if (location.hash.slice(1) !== 'home' && location.hash.slice(1) !== '') return;
    var title = document.getElementById('hero-title');
    if (title) title.innerHTML = 'Building trust.<br><em>Delivering exceptional projects.</em>';
    var hero = document.querySelector('.hero');
    if (hero) {
      var actions = hero.querySelectorAll('.hero-actions a');
      if (actions[0]) { actions[0].href = '/projects/'; actions[0].firstChild.textContent = 'View projects '; }
      if (actions[1]) { actions[1].href = '/contact/'; actions[1].firstChild.textContent = 'Contact us '; }
    }
    var finalCta = document.querySelector('#app > .statement:last-child');
    if (finalCta && !finalCta.querySelector('a, button')) {
      var ctaLink = document.createElement('a');
      ctaLink.className = 'button button-light';
      ctaLink.href = '/contact/';
      ctaLink.innerHTML = 'Start a conversation <span aria-hidden="true">↗</span>';
      finalCta.appendChild(ctaLink);
    }
    var trustbar = document.querySelector('.hero + .trustbar');
    if (trustbar && !document.getElementById('homepage-introduction')) {
      var introduction = document.createElement('section');
      introduction.id = 'homepage-introduction';
      introduction.className = 'section homepage-introduction';
      introduction.setAttribute('aria-labelledby', 'homepage-introduction-title');
      introduction.innerHTML = '<div class="section-intro"><span class="eyebrow">Darcy Construction</span><div><h2 id="homepage-introduction-title">Construction expertise, personally delivered.</h2><p>Darcy Construction plans, manages and delivers building projects across Hampshire. We combine disciplined project control with the accessibility of a senior team that stays close to the work.</p><a class="text-link" href="/our-story/">Meet Darcy Construction <span aria-hidden="true">→</span></a></div></div>';
      trustbar.parentNode.insertBefore(introduction, trustbar.nextSibling);
    }
    var sectionCopy = {
      '.sector-proof .section-intro h2': 'Sectors with different pressures. One accountable team.',
      '.evidence-section .section-intro h2': 'Why clients choose Darcy.',
      '.evidence-section .section-intro p': 'The reasons are practical: long-term relationships, experienced leadership and project evidence that can be checked.',
      '.outcomes .section-intro h2': 'What does your project need to solve?',
      '.featured-work .section-intro h2': 'Real projects. Clear evidence.',
      '.featured-work .section-intro p': 'Read how Darcy approached different ambitions, settings and constraints—then decide whether the same way of working fits your project.',
      '.testimonials .testimonial-intro h2': 'What clients remember.',
      '.testimonials .testimonial-intro p': 'Published client voices speak to the experience of working with Darcy, not just the finished building.'
    };
    Object.keys(sectionCopy).forEach(function (selector) {
      var node = document.querySelector(selector);
      if (node) node.textContent = sectionCopy[selector];
    });
    var why = document.querySelector('.why-darcy');
    if (why) {
      var whyTitle = why.querySelector('h2');
      var whyLead = why.querySelector('.why-darcy-lead');
      var whySignature = why.querySelector('.why-darcy-signature');
      if (whyTitle) whyTitle.innerHTML = 'A better building experience.<br>From the outset.';
      if (whyLead) whyLead.textContent = 'You should feel looked after, not managed. Darcy brings clear advice, honest conversations and senior attention to the decisions that shape your project.';
      if (whySignature) whySignature.textContent = 'Three practical reasons clients choose to work with us.';
      var whyReasons = [
        ['We listen first', 'Your priorities shape the brief before recommendations begin.'],
        ['We stay clear', 'Direct advice keeps cost, risk and programme understandable.'],
        ['We stay close', 'Senior people remain connected from first conversation to handover.']
      ];
      why.querySelectorAll('.why-darcy-reasons li').forEach(function (item, index) {
        var strong = item.querySelector('strong');
        var body = item.querySelector('p');
        if (whyReasons[index]) {
          if (strong) strong.textContent = whyReasons[index][0];
          if (body) body.textContent = whyReasons[index][1];
        }
      });
    }
    var process = document.querySelector('.process');
    if (process && !process.dataset.homeRefined) {
      var processSteps = [
        ['01', 'Discover', 'We listen carefully to the ambition, setting and priorities behind the project.'],
        ['02', 'Plan', 'We connect scope, cost, programme and risk before work begins.'],
        ['03', 'Build', 'We coordinate the detail and keep decisions moving with calm accountability.'],
        ['04', 'Deliver', 'We protect quality through handover and make the finished place ready to use.'],
        ['05', 'Support', 'We remain available after handover as you settle into the result.']
      ];
      process.querySelectorAll('.steps .step').forEach(function (step, index) {
        var data = processSteps[index];
        if (!data) return;
        var number = step.querySelector('b');
        var heading = step.querySelector('h3');
        var body = step.querySelector('p');
        if (number) number.textContent = data[0];
        if (heading) heading.textContent = data[1];
        if (body) body.textContent = data[2];
      });
      process.dataset.homeRefined = 'true';
    }
    var projectDetails = [
      ['Community · Conference hall', 'A place with purpose, protected through change.'],
      ['Residential · Family home', 'An established home, renewed for the life ahead.'],
      ['Residential · New build', 'A rural home shaped with patience and precision.']
    ];
    document.querySelectorAll('.featured-work .featured-project').forEach(function (project, index) {
      if (project.querySelector('.project-context') || !projectDetails[index]) return;
      var context = document.createElement('span');
      context.className = 'project-context';
      context.textContent = projectDetails[index][0];
      var story = project.querySelector('.featured-project-copy p');
      if (story) story.textContent = projectDetails[index][1];
      var copy = project.querySelector('.featured-project-copy');
      if (copy) copy.insertBefore(context, copy.firstChild);
    });
    if (!document.getElementById('commitments')) {
      var anchor = document.querySelector('.evidence-section, .outcomes');
      if (anchor) {
        var section = document.createElement('section');
        section.id = 'commitments';
        section.className = 'section commitments-section';
        section.setAttribute('aria-labelledby', 'commitments-title');
        section.innerHTML = '<div class="section-intro"><span class="eyebrow">Our commitments</span><div><h2 id="commitments-title">The standard we bring to every project.</h2><p>These are practical promises about how Darcy works with clients, teams and the places entrusted to us.</p></div></div><div class="commitments-grid"><article><h3>Safety first</h3><p>People come home safely, and decisions begin with their wellbeing.</p></article><article><h3>Honest communication</h3><p>Clear advice, early conversations and no avoidable surprises.</p></article><article><h3>Quality without compromise</h3><p>Careful workmanship and attention to the details that make a place last.</p></article><article><h3>Trusted partnerships</h3><p>We work collaboratively and stay accountable from first conversation to aftercare.</p></article><article><h3>Sustainable thinking</h3><p>We consider longevity, reuse and responsible choices within each brief.</p></article><article><h3>Supporting our communities</h3><p>We value the local relationships and places our work helps to shape.</p></article></div>';
        anchor.parentNode.insertBefore(section, anchor.nextSibling);
      }
    }
    enhanceHomepageMotion();
  }

  function renderDarcyHomepageV2() {
    var key = location.hash.slice(1) || 'home';
    if (key !== 'home' || !app) return;
    app.className = 'darcy-home-v2';
    app.setAttribute('tabindex', '-1');
    app.innerHTML = '<section class="dh2-hero" aria-labelledby="dh2-hero-title"><div class="dh2-hero-media"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/community-550x450x.jpg" alt="Completed Darcy Construction project" width="1800" height="1100" fetchpriority="high"><div class="dh2-hero-shade"></div></div><div class="dh2-container dh2-hero-content"><span class="dh2-kicker">Darcy Construction · Romsey, Hampshire</span><h1 id="dh2-hero-title" tabindex="-1">Building trusted relationships.<br><em>Delivering quality with care.</em></h1><p>Professional construction delivery with the personal service of a trusted regional partner.</p><a class="dh2-button dh2-button-gold" href="/contact/">Start a conversation <span aria-hidden="true">↗</span></a></div></section>' +
      '<section class="dh2-intro" aria-labelledby="dh2-intro-title"><div class="dh2-container dh2-grid"><span class="dh2-kicker">Darcy Construction</span><div><h2 id="dh2-intro-title">Construction expertise, personally delivered.</h2><p>Established in Romsey in 1999, Darcy Construction plans, manages and delivers building projects with clear advice, senior attention and a relationship that stays close to the work.</p><a class="dh2-text-link" href="/our-story/">Meet Darcy Construction <span aria-hidden="true">→</span></a></div></div></section>' +
      '<section class="dh2-projects" aria-labelledby="dh2-projects-title"><div class="dh2-container"><div class="dh2-section-head"><span class="dh2-kicker">Featured projects</span><div><h2 id="dh2-projects-title">Evidence in the places we build.</h2><p>Real projects, clearly told. Explore the decisions, constraints and care behind the finished place.</p></div></div><div class="dh2-project-grid"><a class="dh2-project dh2-project-wide" href="/projects/farleigh-school/"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/staff-room-4-2-scaled.jpg" alt="Farleigh School project by Darcy Construction" width="1400" height="900" loading="lazy"><span class="dh2-project-meta">Education · Live school environment</span><h3>Farleigh School</h3><p>Published work delivered around school operations and holiday windows.</p><span class="dh2-text-link">Read the case study <span aria-hidden="true">→</span></span></a><a class="dh2-project" href="/projects/sozo-ministries-conference-hall/"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/community.jpg" alt="Sozo Ministries Conference Hall project by Darcy Construction" width="1200" height="800" loading="lazy"><span class="dh2-project-meta">Community · Conference hall</span><h3>Sozo Ministries Conference Hall</h3><p>A community project shaped around a listed setting and neighbouring properties.</p><span class="dh2-text-link">Read the case study <span aria-hidden="true">→</span></span></a><a class="dh2-project" href="/projects/pauncefoot-house/"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/055.jpg" alt="Pauncefoot House project by Darcy Construction" width="1200" height="800" loading="lazy"><span class="dh2-project-meta">Residential · Family home</span><h3>Pauncefoot House</h3><p>A five-bedroom family home with open-plan living and carefully coordinated detail.</p><span class="dh2-text-link">Read the case study <span aria-hidden="true">→</span></span></a></div><a class="dh2-button dh2-button-dark" href="/projects/">View all projects <span aria-hidden="true">↗</span></a></div></section>' +
      '<section class="dh2-services" aria-labelledby="dh2-services-title"><div class="dh2-container"><div class="dh2-section-head"><span class="dh2-kicker">What we do</span><div><h2 id="dh2-services-title">A clear route through the work.</h2><p>Support shaped around the decisions your project needs to make.</p></div></div><div class="dh2-service-list"><a href="/what-we-do/pre-construction-planning/"><span>01</span><strong>Pre-construction planning</strong><p>Shape scope, cost and programme before they become expensive problems.</p><i aria-hidden="true">↗</i></a><a href="/what-we-do/design-build/"><span>02</span><strong>Design &amp; build</strong><p>Keep design thinking and construction delivery moving together.</p><i aria-hidden="true">↗</i></a><a href="/what-we-do/main-contracting/"><span>03</span><strong>Main contracting</strong><p>Coordinate quality, communication and delivery through to handover.</p><i aria-hidden="true">↗</i></a><a href="/what-we-do/refurbishment-alterations/"><span>04</span><strong>Refurbishment &amp; alterations</strong><p>Renew existing places without losing what matters.</p><i aria-hidden="true">↗</i></a></div></div></section>' +
      '<section class="dh2-sectors" aria-labelledby="dh2-sectors-title"><div class="dh2-container"><div class="dh2-section-head"><span class="dh2-kicker">Where we work</span><div><h2 id="dh2-sectors-title">Different settings. The same care.</h2><p>Darcy’s approach adapts to the people, pressures and purpose of each project.</p></div></div><div class="dh2-sector-grid"><a href="/sectors/commercial/"><span>Commercial</span><p>Evidence and project outcomes remain approval-gated until confirmed.</p><i aria-hidden="true">↗</i></a><a href="/sectors/residential/"><span>Residential</span><p>Homes and developments shaped around the people who will live with the result.</p><i aria-hidden="true">↗</i></a><a href="/sectors/education/"><span>Education</span><p>Learning environments delivered with care and respect for live settings.</p><i aria-hidden="true">↗</i></a><a href="/sectors/community/"><span>Community</span><p>Purpose-led places where the building needs to serve more than one brief.</p><i aria-hidden="true">↗</i></a></div></div></section>' +
      '<section class="dh2-why" aria-labelledby="dh2-why-title"><div class="dh2-container dh2-grid"><span class="dh2-kicker">Why Darcy</span><div><h2 id="dh2-why-title">A construction partner who stays close.</h2><p>Darcy combines professional systems with personal responsibility, so advice, decisions and delivery remain connected.</p><div class="dh2-proof-list"><div><b>01</b><strong>Established since 1999</strong><p>Local knowledge built through long-term relationships.</p></div><div><b>02</b><strong>Senior accountability</strong><p>The leadership team remains visible and involved.</p></div><div><b>03</b><strong>Personal service</strong><p>Clear conversations before, during and after the work.</p></div><div><b>04</b><strong>Verified delivery</strong><p>Published project stories show the approach in practice.</p></div></div></div></div></section>' +
      '<section class="dh2-evidence" aria-labelledby="dh2-evidence-title"><div class="dh2-container dh2-grid"><span class="dh2-kicker">Client voice</span><div><h2 id="dh2-evidence-title">“The end result is much acclaimed.”</h2><p>Farleigh School · Education refurbishment</p><a class="dh2-text-link" href="/projects/farleigh-school/">Read the verified case study <span aria-hidden="true">→</span></a></div></div></section>' +
      '<section class="dh2-contact" aria-labelledby="dh2-contact-title"><div class="dh2-container dh2-grid"><div><span class="dh2-kicker">Start a conversation</span><h2 id="dh2-contact-title">Tell us what you are considering.</h2></div><div><p>You do not need a finished brief. Darcy will listen first and help clarify the next useful step.</p><a class="dh2-button dh2-button-gold" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></div></section>';
    var heading = document.getElementById('dh2-hero-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function renderDarcyHomepageV4() {
    var key = location.hash.slice(1) || 'home';
    if (key !== 'home' || !app) return;
    app.className = 'darcy-home-v4';
    app.setAttribute('tabindex', '-1');
    app.innerHTML = '<section class="dv4-hero" aria-labelledby="dv4-hero-title"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/community-550x450x.jpg" alt="Completed Darcy Construction project" width="2000" height="1200" fetchpriority="high"><div class="dv4-hero-overlay"></div><div class="dv4-container dv4-hero-content"><span class="dv4-label">Darcy Construction · Romsey, Hampshire</span><h1 id="dv4-hero-title" tabindex="-1">Building with confidence.</h1><p>Professional construction delivery with the personal service of a trusted regional partner.</p><a class="dv4-button dv4-button-gold" href="/contact/">Start a conversation <span aria-hidden="true">↗</span></a></div></section>' +
      '<section class="dv4-intro" aria-labelledby="dv4-intro-title"><div class="dv4-container dv4-grid"><span class="dv4-label">Company</span><div><h2 id="dv4-intro-title">An experienced construction partner, close to the work.</h2><p>Established in Romsey in 1999, Darcy Construction combines professional project delivery with personal, relationship-led service. The senior team stays connected from the first conversation through to handover.</p><a class="dv4-link" href="/our-story/">About Darcy Construction <span aria-hidden="true">→</span></a></div></div></section>' +
      '<section class="dv4-why" aria-labelledby="dv4-why-title"><div class="dv4-container dv4-grid"><span class="dv4-label">Why Darcy</span><div><h2 id="dv4-why-title">Established experience. Personal responsibility.</h2><div class="dv4-proof"><div><b>01</b><h3>Established since 1999</h3><p>Local knowledge built through long-term relationships.</p></div><div><b>02</b><h3>Senior accountability</h3><p>The leadership team remains visible and involved in the work.</p></div><div><b>03</b><h3>Personal service</h3><p>Clear conversations before, during and after the project.</p></div><div><b>04</b><h3>Verified delivery</h3><p>Published case studies show the approach in practice.</p></div></div></div></div></section>' +
      '<section class="dv4-projects" aria-labelledby="dv4-projects-title"><div class="dv4-container"><div class="dv4-heading-row"><span class="dv4-label">Featured projects</span><div><h2 id="dv4-projects-title">Proof in the places we build.</h2><p>Explore real projects shaped by their clients, settings and practical constraints.</p></div></div><div class="dv4-project-grid"><a class="dv4-project dv4-project-lead" href="/projects/farleigh-school/"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/staff-room-4-2-scaled.jpg" alt="Farleigh School project by Darcy Construction" width="1400" height="900" loading="lazy"><span class="dv4-meta">Education · Live school environment</span><h3>Farleigh School</h3><p>Published work delivered around school operations and holiday windows.</p><span class="dv4-link">Read the case study <span aria-hidden="true">→</span></span></a><a class="dv4-project" href="/projects/sozo-ministries-conference-hall/"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/community.jpg" alt="Sozo Ministries Conference Hall project by Darcy Construction" width="1200" height="800" loading="lazy"><span class="dv4-meta">Community · Conference hall</span><h3>Sozo Ministries Conference Hall</h3><p>A community project shaped around a listed setting and neighbouring properties.</p><span class="dv4-link">Read the case study <span aria-hidden="true">→</span></span></a><a class="dv4-project" href="/projects/pauncefoot-house/"><img src="https://darcyconstruction.co.uk/wp-content/uploads/2021/07/055.jpg" alt="Pauncefoot House project by Darcy Construction" width="1200" height="800" loading="lazy"><span class="dv4-meta">Residential · Family home</span><h3>Pauncefoot House</h3><p>A five-bedroom family home with open-plan living and carefully coordinated detail.</p><span class="dv4-link">Read the case study <span aria-hidden="true">→</span></span></a></div><a class="dv4-button dv4-button-navy" href="/projects/">View all projects <span aria-hidden="true">↗</span></a></div></section>' +
      '<section class="dv4-services" aria-labelledby="dv4-services-title"><div class="dv4-container"><div class="dv4-heading-row"><span class="dv4-label">What we do</span><div><h2 id="dv4-services-title">Capability, made personal.</h2><p>Construction support shaped around the decisions your project needs to make.</p></div></div><div class="dv4-service-list"><a href="/what-we-do/pre-construction-planning/"><span>01</span><strong>Pre-construction planning</strong><p>Shape scope, cost and programme before they become expensive problems.</p><i aria-hidden="true">↗</i></a><a href="/what-we-do/design-build/"><span>02</span><strong>Design &amp; build</strong><p>Keep design thinking and construction delivery moving together.</p><i aria-hidden="true">↗</i></a><a href="/what-we-do/main-contracting/"><span>03</span><strong>Main contracting</strong><p>Coordinate quality, communication and delivery through to handover.</p><i aria-hidden="true">↗</i></a><a href="/what-we-do/refurbishment-alterations/"><span>04</span><strong>Refurbishment &amp; alterations</strong><p>Renew existing places without losing what matters.</p><i aria-hidden="true">↗</i></a></div></div></section>' +
      '<section class="dv4-sectors" aria-labelledby="dv4-sectors-title"><div class="dv4-container"><div class="dv4-heading-row"><span class="dv4-label">Sectors</span><div><h2 id="dv4-sectors-title">Different settings. The same care.</h2><p>Darcy’s approach adapts to the people, pressures and purpose of each project.</p></div></div><div class="dv4-sector-list"><a href="/sectors/commercial/"><span>Commercial</span><p>Evidence and project outcomes remain approval-gated until confirmed.</p><i aria-hidden="true">↗</i></a><a href="/sectors/residential/"><span>Residential</span><p>Homes and developments shaped around the people who will live with the result.</p><i aria-hidden="true">↗</i></a><a href="/sectors/education/"><span>Education</span><p>Learning environments delivered with care and respect for live settings.</p><i aria-hidden="true">↗</i></a><a href="/sectors/community/"><span>Community</span><p>Purpose-led places where the building needs to serve more than one brief.</p><i aria-hidden="true">↗</i></a></div></div></section>' +
      '<section class="dv4-evidence" aria-labelledby="dv4-evidence-title"><div class="dv4-container dv4-grid"><span class="dv4-label">Client evidence</span><div><h2 id="dv4-evidence-title">“The end result is much acclaimed.”</h2><p>Farleigh School · Education refurbishment</p><a class="dv4-link" href="/projects/farleigh-school/">Read the verified case study <span aria-hidden="true">→</span></a></div></div></section>' +
      '<section class="dv4-contact" aria-labelledby="dv4-contact-title"><div class="dv4-container dv4-grid"><div><span class="dv4-label">Start a conversation</span><h2 id="dv4-contact-title">Tell us what you are considering.</h2></div><div><p>You do not need a finished brief. Darcy will listen first and help clarify the next useful step.</p><a class="dv4-button dv4-button-gold" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></div></section>';
    var heading = document.getElementById('dv4-hero-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function renderDarcyHomepageV6() {
    var key = location.hash.slice(1) || 'home';
    if (document.body) document.body.classList.toggle('darcy-home-route', key === 'home');
    if (key !== 'home' || !app) return;
    app.className = 'darcy-home-v6';
    app.setAttribute('tabindex', '-1');
    app.innerHTML = '<section class="d6-hero" aria-labelledby="d6-hero-title"><div class="d6-hero-media"><img src="assets/project/hero.jpg" alt="Completed Darcy Construction project" width="1200" height="799" fetchpriority="high"><div class="d6-hero-copy d6-container"><span class="d6-label">Darcy Construction · Romsey, Hampshire</span><h1 id="d6-hero-title" tabindex="-1">Building trusted relationships and exceptional projects since 1999.</h1><p>Professional construction delivery with the personal commitment of a trusted regional partner.</p><div class="d6-actions"><a class="d6-button d6-button-gold" href="/projects/">View Projects <span aria-hidden="true">↗</span></a><a class="d6-button d6-button-outline" href="/contact/">Start a Conversation <span aria-hidden="true">↗</span></a></div></div></div></section>' +
      '<section class="home-v6-who" aria-labelledby="home-v6-who-title-runtime"><div class="home-v6-who-container"><div class="home-v6-who-grid"><div class="home-v6-who-copy"><span class="home-v6-who-label">Who we are</span><h2 class="home-v6-who-title" id="home-v6-who-title-runtime">A trusted regional contractor, close to the work.</h2><p class="home-v6-who-text">Since 1999, Darcy Construction has delivered commercial, education and residential projects across Southern England, combining the expertise of a major contractor with the personal commitment of a trusted regional partner.</p><a class="home-v6-who-link" href="/our-story/">Learn more about Darcy <span aria-hidden="true">→</span></a></div><figure class="home-v6-who-media"><img src="assets/project/hero.jpg" alt="Darcy Construction project detail" width="1200" height="799" loading="lazy"><figcaption class="home-v6-who-caption">Quality is visible in the detail.</figcaption></figure></div></div></section>' +
      '<section class="d6-featured" aria-labelledby="d6-featured-title"><div class="d6-container"><span class="d6-label">Featured project</span><a class="d6-featured-link" href="/projects/farleigh-school/"><img src="assets/project/selected-community.jpg" alt="Farleigh School project by Darcy Construction" width="1200" height="799" loading="lazy"><div class="d6-project-caption"><div><span class="d6-meta">Education · Live school environment</span><h2 id="d6-featured-title">Farleigh School</h2><p>Published work delivered around school operations and holiday windows, with a verified client voice describing the finished result as much acclaimed.</p></div><span class="d6-link">View project <span aria-hidden="true">→</span></span></div></a></div></section>' +
      '<section class="d6-selected" aria-labelledby="d6-selected-title"><div class="d6-container"><div class="d6-section-head"><span class="d6-label">Selected projects</span><h2 id="d6-selected-title">More work, carefully considered.</h2></div><div class="d6-selected-grid"><a href="/projects/sozo-ministries-conference-hall/"><img src="assets/project/selected-community.jpg" alt="Sozo Ministries Conference Hall project by Darcy Construction" width="1200" height="799" loading="lazy"><span class="d6-meta">Community · Conference hall</span><h3>Sozo Ministries Conference Hall</h3><span class="d6-link">View project <span aria-hidden="true">→</span></span></a><a href="/projects/pauncefoot-house/"><img src="assets/project/selected-residential.jpg" alt="Pauncefoot House project by Darcy Construction" width="400" height="400" loading="lazy"><span class="d6-meta">Residential · Family home</span><h3>Pauncefoot House</h3><span class="d6-link">View project <span aria-hidden="true">→</span></span></a></div><a class="d6-button d6-button-navy" href="/projects/">View all projects <span aria-hidden="true">↗</span></a></div></section>' +
      '<section class="d6-expertise" aria-labelledby="d6-expertise-title"><div class="d6-container"><div class="d6-section-head"><span class="d6-label">Our expertise</span><h2 id="d6-expertise-title">Clear routes through different settings.</h2></div><div class="d6-expertise-grid"><div><h3>Services</h3><a href="/what-we-do/construction-management/">Construction Management <span aria-hidden="true">↗</span></a><a href="/what-we-do/main-contracting/">Main Contracting <span aria-hidden="true">↗</span></a><a href="/what-we-do/design-build/">Design &amp; Build <span aria-hidden="true">↗</span></a><a href="/what-we-do/refurbishment-alterations/">Refurbishment <span aria-hidden="true">↗</span></a></div><div><h3>Sectors</h3><a href="/sectors/education/">Education <span aria-hidden="true">↗</span></a><a href="/sectors/commercial/">Commercial <span aria-hidden="true">↗</span></a><a href="/sectors/residential/">Residential <span aria-hidden="true">↗</span></a><a href="/sectors/community/">Community <span aria-hidden="true">↗</span></a></div></div></div></section>' +
      '<section class="d6-why" aria-labelledby="d6-why-title"><div class="d6-container d6-split"><span class="d6-label">Why clients choose Darcy</span><div><h2 id="d6-why-title">Confidence built into the relationship.</h2><div class="d6-proof"><p>Established since 1999.</p><p>Senior people stay involved.</p><p>Transparent communication.</p><p>Trusted regional delivery.</p><p>Quality without compromise.</p></div></div></div></section>' +
      '<section class="d6-cta" aria-labelledby="d6-cta-title"><img src="assets/project/cta.jpg" alt="Darcy Construction project exterior" width="7710" height="5172" loading="lazy"><div class="d6-cta-overlay"></div><div class="d6-container d6-cta-content"><span class="d6-label">Start your project</span><h2 id="d6-cta-title">Let’s discuss your next project.</h2><a class="d6-button d6-button-gold" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></section>';
    var removedFeatured = app.querySelector('.d6-featured');
    if (removedFeatured) removedFeatured.remove();
    var heading = document.getElementById('d6-hero-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function rebuildHomepagePresentation() {
    var key = location.hash.slice(1) || 'home';
    if (!app) return;
    if (app.classList.contains('darcy-home-v2')) return;
    app.classList.remove('homepage-reset', 'about-reset');
    if (key === 'home') {
      app.classList.add('homepage-reset');
      var order = ['.hero', '.trustbar', '#homepage-introduction', '.why-darcy', '.featured-work', '.outcomes', '.sector-proof', '.process', '.leadership-preview', '.testimonials', '.evidence-section', '.statement'];
      var nodes = [];
      order.forEach(function (selector) { var node = app.querySelector(selector); if (node && nodes.indexOf(node) < 0) nodes.push(node); });
      nodes.forEach(function (node) { app.appendChild(node); });
      var projects = app.querySelector('.featured-work .featured-projects');
      if (projects) projects.classList.add('visual-project-grid');
      var outcomes = app.querySelector('.outcome-list');
      if (outcomes) outcomes.classList.add('visual-service-list');
      var sectors = app.querySelector('.sector-proof-grid');
      if (sectors) sectors.classList.add('visual-sector-links');
      var finalCta = app.querySelector('.statement:last-child');
      if (finalCta) finalCta.classList.add('visual-final-cta');
    } else if (key === 'story') {
      app.classList.add('about-reset');
      var aboutHero = app.querySelector('.about-hero, .internal-hero');
      if (aboutHero) aboutHero.classList.add('visual-internal-hero');
      app.querySelectorAll('.about-story, .about-difference, .about-values, .about-safety, .about-sectors, .about-trust, .about-cta').forEach(function (section) { section.classList.add('visual-internal-section'); });
    }
  }

  function enhanceHomepageMotion() {
    if (document.documentElement.dataset.homeMotion === 'true') return;
    document.documentElement.dataset.homeMotion = 'true';
    var elements = document.querySelectorAll('.homepage-introduction, .sector-proof, .why-darcy, .leadership-preview, .evidence-section, .outcomes, .process, .featured-work, .testimonials, #commitments, .statement');
    elements.forEach(function (element) { element.classList.add('reveal-ready'); });
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(function (element) { element.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries, instance) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    elements.forEach(function (element) { observer.observe(element); });
  }

  function removeUnverifiedPlaceholders() {
    document.querySelectorAll('.content-placeholder').forEach(function (node) { node.remove(); });
    document.querySelectorAll('.evidence-note').forEach(function (node) { node.remove(); });
    document.querySelectorAll('.case-testimonial-pending').forEach(function (node) { node.remove(); });
    document.querySelectorAll('.case-gallery .section-intro p').forEach(function (node) { node.textContent = 'Published Darcy project photography.'; });
    document.querySelectorAll('.project-facts .section-intro p').forEach(function (node) { node.textContent = 'Published project information.'; });
    document.querySelectorAll('.fact-list > div').forEach(function (row) {
      var value = row.querySelector('dd');
      if (value && /to confirm|approval-gated/i.test(value.textContent)) row.remove();
    });
  }

  function refineProjectExperience() {
    var key = location.hash.slice(1);
    var projectRoutes = {
      'Sozo Ministries': ['/projects/sozo-ministries-conference-hall/', 'Community · Conference hall', 'Romsey area'],
      'Sozo Ministries Conference Hall': ['/projects/sozo-ministries-conference-hall/', 'Community · Conference hall', 'Romsey area'],
      'Pauncefoot House': ['/projects/pauncefoot-house/', 'Residential · Family home', 'Chilworth'],
      'Canada Common': ['/projects/canada-common/', 'Residential · New build', 'West Wellow'],
      'Farleigh School': ['/projects/farleigh-school/', 'Education · Live school environment', '']
    };
    if (key === 'work') {
      var projectGrid = document.querySelector('#app .project-index .featured-projects, #app .featured-work .featured-projects');
      if (projectGrid) {
        var flagship = [
          ['Farleigh School', 'Education · Live school environment', 'Published work delivered around school operations and holiday windows.', 'https://darcyconstruction.co.uk/wp-content/uploads/2021/07/staff-room-4-2-scaled.jpg', '/projects/farleigh-school/'],
          ['Sozo Ministries Conference Hall', 'Community · Conference hall', 'A community project shaped around a listed setting and neighbouring properties.', 'https://darcyconstruction.co.uk/wp-content/uploads/2021/07/community.jpg', '/projects/sozo-ministries-conference-hall/'],
          ['Pauncefoot House', 'Residential · Family home', 'A five-bedroom family home with open-plan living and carefully coordinated detail.', 'https://darcyconstruction.co.uk/wp-content/uploads/2021/07/055.jpg', '/projects/pauncefoot-house/'],
          ['Canada Common', 'Residential · New Forest setting', 'A traditional-build detached house with specialist brick, lime mortar and timber details.', 'https://darcyconstruction.co.uk/wp-content/uploads/2022/03/Capture.jpg', '/projects/canada-common/']
        ];
        projectGrid.classList.add('case-study-index-grid');
        projectGrid.innerHTML = flagship.map(function (project) {
          return '<article class="featured-project case-index-card"><a class="featured-project-image" href="' + project[4] + '" aria-label="Read the ' + project[0] + ' case study"><img src="' + project[3] + '" alt="' + project[0] + ' project photography from Darcy Construction" width="1200" height="800" loading="lazy" decoding="async"><span>Read the story <i aria-hidden="true">↗</i></span></a><div class="featured-project-copy"><span class="project-context">' + project[1] + '</span><h2><a href="' + project[4] + '">' + project[0] + '</a></h2><p>' + project[2] + '</p><a class="project-card-link" href="' + project[4] + '">Open case study <span aria-hidden="true">→</span></a></div></article>';
        }).join('');
      }
    }
    var order = [
      ['Sozo Ministries Conference Hall', '/projects/sozo-ministries-conference-hall/'],
      ['Pauncefoot House', '/projects/pauncefoot-house/'],
      ['Canada Common', '/projects/canada-common/'],
      ['Farleigh School', '/projects/farleigh-school/']
    ];
    var currentIndex = key === 'case-study' ? 0 : order.findIndex(function (item) { return item[1].replace('/projects/','').replace(/\/$/,'') === key; });
    if (currentIndex >= 0 && app) {
      app.classList.add('case-study-template');
      var relatedCards = app.querySelectorAll('.related-projects .featured-project');
      relatedCards.forEach(function (card) {
        var heading = card.querySelector('h3, h2');
        var project = heading && projectRoutes[heading.textContent.trim()];
        if (!project) return;
        card.querySelectorAll('a').forEach(function (link) { link.href = project[0]; });
      });
    }
    var facts = document.querySelector('.project-facts');
    if (currentIndex >= 0 && facts && !facts.querySelector('.approval-gated-note')) {
      var note = document.createElement('p');
      note.className = 'approval-gated-note';
      note.innerHTML = '<strong>Approval-gated fields</strong> Client permissions, final photography, outstanding project facts and any additional outcomes remain to be confirmed before publication.';
      facts.appendChild(note);
    }
    var gallery = document.querySelector('.case-gallery .gallery-grid');
    if (currentIndex >= 0 && gallery && !gallery.querySelector('.gallery-placeholder')) {
      var placeholder = document.createElement('figure');
      placeholder.className = 'gallery-placeholder';
      placeholder.innerHTML = '<div class="asset-placeholder" role="img" aria-label="Additional Darcy-owned project photography to be supplied"><span>Photography to be supplied</span><strong>Additional gallery image</strong></div><figcaption>Additional exterior, detail and in-use images require Darcy ownership and permission approval.</figcaption>';
      gallery.appendChild(placeholder);
    }
    document.querySelectorAll('.case-narrative').forEach(function (section, index) {
      section.classList.toggle('case-narrative-alt', index % 2 === 1);
    });
    if (currentIndex < 0 || document.querySelector('.case-navigation')) return;
    var previous = order[(currentIndex + order.length - 1) % order.length];
    var next = order[(currentIndex + 1) % order.length];
    var related = document.querySelector('.related-projects');
    var navigation = document.createElement('nav');
    navigation.className = 'case-navigation';
    navigation.setAttribute('aria-label', 'Case study navigation');
    navigation.innerHTML = '<a href="' + previous[1] + '"><span>Previous project</span><strong>' + previous[0] + '</strong></a><a class="all-projects" href="/projects/"><span>Portfolio</span><strong>All projects</strong></a><a href="' + next[1] + '"><span>Next project</span><strong>' + next[0] + '</strong></a>';
    if (related && related.parentNode) related.parentNode.insertBefore(navigation, related.nextSibling);
  }

  function refineServiceExperience() {
    var key = location.hash.slice(1);
    var extended = {
      'pre-construction-planning': {
        label: 'Pre-construction planning', title: 'Make the important decisions earlier.',
        intro: 'Early construction advice helps clients test the brief, understand constraints and shape a more informed route into delivery.',
        overview: 'Before work begins, Darcy can help bring scope, buildability, cost, programme and procurement into one practical conversation.',
        audience: 'For clients and professional teams who want construction thinking early enough to influence the outcome.',
        includes: [['Brief and feasibility','Clarify ambition, condition, constraints and the decisions that will shape the project.'],['Buildability and risk','Test practical assumptions before they become expensive changes.'],['Cost and programme thinking','Connect scope, procurement and timing so choices have context.']],
        benefits: [['Better-informed decisions','Understand the implications before committing to a route.'],['Fewer late surprises','Surface unknowns and interfaces while there is still room to respond.'],['A clearer start','Move into delivery with responsibilities and next steps understood.']],
        sectors: [['Commercial','/sectors/commercial/'],['Education','/sectors/education/'],['Residential','/sectors/residential/'],['Community','/sectors/community/']],
        evidence: [['Farleigh School','A published example of coordinated design and build and traditional delivery around a live school.','/projects/farleigh-school/']],
        note: 'Detailed pre-construction deliverables, fees and programme examples require Darcy approval before publication.'
      },
      'design-build': {
        label: 'Design & build', title: 'Keep design and delivery moving together.',
        intro: 'Design and build can give clients one connected route from developing the brief to delivering the finished place, when the responsibilities are clearly defined.',
        overview: 'Darcy’s published Farleigh School case study records a hybrid of design and build and traditional delivery, with consultant and design-team coordination.',
        audience: 'For clients who value a connected route through design decisions, buildability and construction delivery.',
        includes: [['Design coordination','Keep client, consultant and construction information connected as the brief develops.'],['Buildability input','Bring practical construction knowledge into decisions before they reach site.'],['Delivery coordination','Maintain a clear relationship between design intent, quality and programme.']],
        benefits: [['One connected conversation','Reduce gaps between what is designed and what is delivered.'],['Earlier practical insight','Use construction knowledge while choices can still be shaped.'],['Clearer accountability','Agree responsibilities before the project moves into delivery.']],
        sectors: [['Education','/sectors/education/'],['Residential','/sectors/residential/'],['Community','/sectors/community/']],
        evidence: [['Farleigh School','Published evidence of a hybrid design and build and traditional route around a live school environment.','/projects/farleigh-school/']],
        note: 'Design-team roles, appointment scope and commercial route require project-specific approval.'
      },
      'main-contracting': {
        label: 'Main contracting', title: 'A clear route from site start to handover.',
        intro: 'Main contracting brings construction delivery, coordination, quality and communication together under one agreed route.',
        overview: 'The right main-contracting relationship gives clients a clear point of accountability while the wider project team and specialist trades are coordinated around the programme.',
        audience: 'For clients with an established brief who need an experienced contractor to coordinate construction through to completion.',
        includes: [['Pre-start coordination','Confirm scope, information, responsibilities and the decisions needed before site starts.'],['Construction delivery','Coordinate trades, sequencing, quality and site communication as the work progresses.'],['Handover and aftercare','Plan completion, familiarisation and the next useful conversation rather than stopping at practical completion.']],
        benefits: [['One accountable route','Know who is coordinating the construction response.'],['Visible progress','Keep decisions, risks and changes understandable.'],['Quality protected','Keep workmanship and detail in view throughout delivery.']],
        sectors: [['Commercial','/sectors/commercial/'],['Education','/sectors/education/'],['Residential','/sectors/residential/'],['Community','/sectors/community/']],
        evidence: [['Sozo Ministries Conference Hall','Published works included structural alterations, a new roof, extension, external works and internal finishes.','/projects/sozo-ministries-conference-hall/'],['Farleigh School','Published education work delivered around school operations and holiday periods.','/projects/farleigh-school/']],
        note: 'Procurement routes, contract forms, project values and completion dates remain approval-gated unless published for a specific project.'
      },
      'construction-management': {
        label: 'Construction management', title: 'Clarity before complexity takes hold.',
        intro: 'Construction management gives clients a more informed route through feasibility, buildability, cost, programme and delivery decisions.',
        overview: 'Darcy’s published service material describes early construction input and coordination as a way to keep scope, risk and delivery decisions connected.',
        audience: 'For clients, developers and professional teams who need experienced construction input early and a clear line of accountability through delivery.',
        includes: [['Early feasibility','Test the brief, constraints and practical route before decisions become expensive to change.'],['Cost and programme thinking','Bring scope, risk, procurement and timing into the same conversation.'],['Design and delivery coordination','Keep consultants, information and site decisions connected as the project develops.']],
        benefits: [['Earlier risk visibility','Make unknowns and interfaces easier to discuss.'],['Informed procurement','Choose a route with a clearer understanding of the project.'],['Connected decisions','Keep design, cost and delivery conversations aligned.']],
        sectors: [['Commercial','/sectors/commercial/'],['Education','/sectors/education/'],['Community','/sectors/community/'],['Residential','/sectors/residential/']],
        evidence: [['Our approach','Meet, understand, plan, build and support—so every stage gives the client greater clarity.','/our-approach/'],['Farleigh School','A published example of coordinated delivery around a live school.','/projects/farleigh-school/']],
        note: 'Detailed scope, fee structure and appointment responsibilities require project-specific approval.'
      },
      'project-management': {
        label: 'Project management', title: 'Keep the whole project moving as one.',
        intro: 'Project management connects people, decisions, information and programme so clients can understand what is happening and what needs attention next.',
        overview: 'Darcy’s approved positioning is relationship-led: listen first, explain decisions clearly and stay close to the work through delivery and handover.',
        audience: 'For clients who want experienced coordination across consultants, contractors, decisions and the practical life of the project.',
        includes: [['Set the decision rhythm','Make responsibilities, approvals and next steps clear to the people involved.'],['Coordinate information','Keep design, procurement and delivery conversations connected.'],['Support handover','Plan completion and aftercare as part of the project experience.']],
        benefits: [['A calmer route through complexity','Know which decision matters next and why.'],['Clear communication','Keep stakeholders informed without unnecessary noise.'],['Senior attention','Maintain a direct relationship with the people accountable for progress.']],
        sectors: [['Education','/sectors/education/'],['Community','/sectors/community/'],['Residential','/sectors/residential/'],['Commercial','/sectors/commercial/']],
        evidence: [['Farleigh School','Published evidence of consultant and design-team coordination around a live school setting.','/projects/farleigh-school/'],['Sozo Ministries Conference Hall','A published community project with structural, external and internal works.','/projects/sozo-ministries-conference-hall/']],
        note: 'Project-management appointment scope, reporting formats and fees require Darcy approval.'
      },
      'refurbishment-alterations': {
        label: 'Refurbishment & alterations', title: 'Renew existing places without losing what matters.',
        intro: 'Refurbishment and alterations require careful investigation, practical sequencing and communication that respects the building and the people who use it.',
        overview: 'Darcy’s published projects include refurbishment and alteration work in community, education and residential settings, with delivery shaped around existing buildings and live operations.',
        audience: 'For organisations, schools, community groups and homeowners improving an existing place while it remains valuable and often in use.',
        includes: [['Understand the existing building','Work from known condition, unknowns and the operational reality around the site.'],['Plan the interfaces','Coordinate access, temporary arrangements, specialist trades and decisions affecting continuity.'],['Protect the finished quality','Keep workmanship, detail and long-term usability visible through delivery.']],
        benefits: [['Less disruption','Plan around the people and activities that still need to use the building.'],['Better-informed choices','Make condition and sequencing part of the conversation early.'],['Careful renewal','Improve the place while respecting what already gives it value.']],
        sectors: [['Education','/sectors/education/'],['Community','/sectors/community/'],['Residential','/sectors/residential/']],
        evidence: [['Sozo Ministries Conference Hall','Published works included structural alterations, a new roof, extension, external works and internal finishes.','/projects/sozo-ministries-conference-hall/'],['Farleigh School','Published projects were planned around school operations and holiday periods.','/projects/farleigh-school/']],
        note: 'Existing-building surveys, permissions, project dates and photography require approval for each project.'
      }
    }[key];
    if (extended && app) {
      var include = extended.includes.map(function (item, i) { return '<article class="card service-detail-card"><span class="number">0' + (i + 1) + '</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>'; }).join('');
      var benefits = extended.benefits.map(function (item, i) { return '<article class="card service-benefit-card"><span class="number">0' + (i + 1) + '</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>'; }).join('');
      var sectors = extended.sectors.map(function (item) { return '<a class="sector-service-link" href="' + item[1] + '">' + item[0] + ' <span aria-hidden="true">↗</span></a>'; }).join('');
      var evidence = extended.evidence.map(function (item) { return '<a class="card linked-card service-evidence-card" href="' + item[2] + '"><span class="eyebrow">Published evidence</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p><span class="card-link">Read the story <span aria-hidden="true">→</span></span></a>'; }).join('');
      app.innerHTML = '<section class="page-hero internal-hero service-hero" aria-labelledby="service-page-title"><span class="eyebrow">Darcy Construction · ' + extended.label + '</span><h1 id="service-page-title" tabindex="-1">' + extended.title + '</h1><p>' + extended.intro + '</p></section>' +
        '<section class="section service-overview" aria-labelledby="service-overview-title"><div class="section-intro"><span class="eyebrow">Service overview</span><div><h2 id="service-overview-title">A practical route through the work.</h2><p>' + extended.overview + '</p></div></div><p class="service-audience"><span class="eyebrow">Who it is for</span><strong>' + extended.audience + '</strong></p></section>' +
        '<section class="section service-includes" aria-labelledby="service-includes-title"><div class="section-intro"><span class="eyebrow">What it includes</span><div><h2 id="service-includes-title">The decisions this service helps you make.</h2><p>Every appointment is shaped around the project. These are the areas the service can support, subject to an agreed scope.</p></div></div><div class="cards service-detail-grid">' + include + '</div></section>' +
        '<section class="section service-delivery" aria-labelledby="service-delivery-title"><div class="section-intro"><span class="eyebrow">How Darcy delivers it</span><div><h2 id="service-delivery-title">Meet. Understand. Plan. Build. Support.</h2><p>Five stages keep the client experience visible while the work develops.</p></div></div><ol class="service-process-list"><li><span>01</span><h3>Meet</h3><p>Listen to the ambition, constraints and people involved.</p></li><li><span>02</span><h3>Understand</h3><p>Clarify the brief, condition and decisions ahead.</p></li><li><span>03</span><h3>Plan</h3><p>Shape the route, programme and responsibilities.</p></li><li><span>04</span><h3>Build</h3><p>Coordinate quality, communication and delivery.</p></li><li><span>05</span><h3>Support</h3><p>Stay connected through handover and the next useful step.</p></li></ol></section>' +
        '<section class="section service-benefits" aria-labelledby="service-benefits-title"><div class="section-intro"><span class="eyebrow">Key client benefits</span><div><h2 id="service-benefits-title">What this gives the client.</h2><p>The benefit is not a label. It is greater clarity around the decisions, people and work that move the project forward.</p></div></div><div class="cards service-benefit-grid">' + benefits + '</div></section>' +
        '<section class="section service-sectors" aria-labelledby="service-sectors-title"><div class="section-intro"><span class="eyebrow">Relevant sectors</span><div><h2 id="service-sectors-title">Different settings. The same care.</h2><p>Explore the sector pressures that may shape the right route for your project.</p></div></div><div class="service-sector-links">' + sectors + '</div></section>' +
        '<section class="section service-evidence" aria-labelledby="service-evidence-title"><div class="section-intro"><span class="eyebrow">Relevant case studies</span><div><h2 id="service-evidence-title">See the approach in context.</h2><p>Published project stories provide evidence without asking you to take an unsupported claim on trust.</p></div></div><div class="cards service-evidence-grid">' + evidence + '</div><div class="service-approval-note"><span class="eyebrow">Approval-gated content</span><p>' + extended.note + '</p></div></section>' +
        '<section class="statement internal-cta service-cta" aria-labelledby="service-cta-title"><div><span class="eyebrow">Start a conversation</span><h2 id="service-cta-title">Not sure which route fits?</h2></div><div><p>Tell us what you are considering. Darcy will listen first and offer an honest view of the next useful step.</p><a class="button button-light" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></section>';
      var serviceHeading = document.getElementById('service-page-title');
      if (serviceHeading) serviceHeading.focus({ preventScroll: true });
      return;
    }
    var service = {
      services: {
        eyebrow: 'What we do', title: 'Construction support shaped around the outcome.',
        intro: 'Darcy Construction helps clients make clear decisions, manage complexity and deliver high-quality buildings with one accountable team.',
        includeTitle: 'Choose the right route for the project.',
        include: [['Pre-construction planning', 'Shape scope, cost, programme and risk before they become expensive problems.', '/what-we-do/pre-construction-planning/'], ['Design & build', 'Keep design thinking and construction delivery connected when that route suits the brief.', '/what-we-do/design-build/'], ['Main contracting', 'Coordinate construction, quality, safety and communication through to handover.', '/what-we-do/main-contracting/'], ['Construction management', 'Bring buildability, procurement, programme and delivery decisions into one conversation.', '/what-we-do/construction-management/'], ['Project management', 'Keep people, information and decisions moving as one accountable programme.', '/what-we-do/project-management/'], ['Refurbishment & alterations', 'Renew existing places with careful investigation, sequencing and communication.', '/what-we-do/refurbishment-alterations/']],
        audience: 'For clients who want experienced guidance without unnecessary layers between the decision and the people delivering it.',
        evidence: [['Farleigh School', 'Education work delivered around live school operations and holiday windows.', '/projects/farleigh-school/'], ['Canada Common', 'A high-specification traditional-build home in the New Forest National Park.', '/projects/canada-common/'], ['Sozo Ministries Conference Hall', 'A community project coordinated around a listed setting and neighbouring properties.', '/projects/sozo-ministries-conference-hall/']]
      },
      'construction-management': {
        eyebrow: 'Construction management', title: 'Clarity before complexity takes hold.',
        intro: 'Construction management gives clients a more informed route through feasibility, buildability, cost, programme and delivery decisions.',
        includeTitle: 'What construction management covers.',
        include: [['Early feasibility', 'Test the brief, constraints and practical route before decisions become expensive to change.', '/contact/'], ['Cost and programme thinking', 'Bring scope, risk, procurement and timing into the same conversation.', '/contact/'], ['Design and delivery coordination', 'Keep consultants, information and site decisions connected as the project develops.', '/what-we-do/']],
        audience: 'For clients, developers and professional teams who need experienced construction input early and want a clear line of accountability through delivery.',
        evidence: [['Our approach', 'Meet, understand, plan, build and support—so every stage gives the client greater clarity.', '/our-approach/'], ['Farleigh School', 'A published example of coordinated design and build and traditional delivery around a live school.', '/projects/farleigh-school/'], ['Start a conversation', 'The right construction route depends on the project. Darcy will listen before recommending one.', '/contact/']]
      },
      refurbishment: {
        eyebrow: 'Refurbishment', title: 'Renew existing places without losing what matters.',
        intro: 'Refurbishment projects need careful investigation, practical sequencing and communication that respects the building and the people who use it.',
        includeTitle: 'What refurbishment demands.',
        include: [['Understand the existing building', 'Work from the known condition, the unknowns and the operational reality around the site.', '/contact/'], ['Plan the interfaces', 'Coordinate access, temporary arrangements, specialist trades and decisions that affect continuity.', '/our-approach/'], ['Protect the finished quality', 'Keep workmanship, detail and long-term usability visible throughout delivery.', '/projects/sozo-ministries-conference-hall/']],
        audience: 'For organisations, schools, community groups and homeowners improving an existing place while it remains valuable and often in use.',
        evidence: [['Sozo Ministries Conference Hall', 'Published works included structural alterations, a new roof, extension, external works and internal finishes.', '/projects/sozo-ministries-conference-hall/'], ['Farleigh School', 'Projects were planned around school operations and holiday periods to minimise disruption.', '/projects/farleigh-school/'], ['Our approach', 'Clear decisions and direct communication help existing-building work stay manageable.', '/our-approach/']]
      }
    }[key];
    if (!service || !app) return;
    var includeCards = service.include.map(function (item, index) {
      return '<a class="card linked-card service-landing-card" href="' + item[2] + '"><span class="number">0' + (index + 1) + '</span><h2>' + item[0] + '</h2><p>' + item[1] + '</p><span class="card-link">Explore <i aria-hidden="true">→</i></span></a>';
    }).join('');
    var evidenceCards = service.evidence.map(function (item) {
      return '<a class="card linked-card service-evidence-card" href="' + item[2] + '"><span class="eyebrow">Evidence</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p><span class="card-link">Read more <i aria-hidden="true">→</i></span></a>';
    }).join('');
    app.innerHTML = '<section class="page-hero internal-hero" aria-labelledby="service-page-title"><span class="eyebrow">' + service.eyebrow + '</span><h1 id="service-page-title" tabindex="-1">' + service.title + '</h1><p>' + service.intro + '</p></section><section class="section service-introduction" aria-labelledby="service-introduction-title"><div class="section-intro"><span class="eyebrow">A practical starting point</span><div><h2 id="service-introduction-title">The service should make the project clearer.</h2><p>' + service.audience + '</p></div></div></section><section class="section service-includes" aria-labelledby="service-includes-title"><div class="section-intro"><span class="eyebrow">Scope</span><div><h2 id="service-includes-title">' + service.includeTitle + '</h2><p>Darcy can join at the point that is useful to you, then bring the right experience around the decisions ahead.</p></div></div><div class="cards">' + includeCards + '</div></section><section class="section process service-process" aria-labelledby="service-process-title"><div class="section-intro"><span class="eyebrow">Delivery</span><div><h2 id="service-process-title">A clear route through the work.</h2><p>We listen first, establish the constraints, plan the route and keep communication direct as the project moves forward.</p></div></div><ol class="steps"><li class="step"><b>01</b><h3>Understand</h3><p>Clarify ambition, condition, constraints and the people the place needs to serve.</p></li><li class="step"><b>02</b><h3>Plan</h3><p>Connect scope, cost, programme, risk and responsibilities before work begins.</p></li><li class="step"><b>03</b><h3>Deliver</h3><p>Coordinate the detail, communicate clearly and stay accountable through handover.</p></li></ol></section><section class="section service-evidence" aria-labelledby="service-evidence-title"><div class="section-intro"><span class="eyebrow">Relevant evidence</span><div><h2 id="service-evidence-title">See how the approach translates to real projects.</h2><p>These published Darcy pages provide context without asking you to take a claim on trust.</p></div></div><div class="cards">' + evidenceCards + '</div></section><section class="statement internal-cta"><div><span class="eyebrow">Start a conversation</span><h2>Not sure which route fits?</h2></div><div><p>Tell us what you are considering. Darcy will listen first and offer an honest view of the best next step.</p><a class="button button-light" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></section>';
    var heading = document.getElementById('service-page-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function refineSectorExperience() {
    var key = location.hash.slice(1);
    var sectors = {
      commercial: {
        label: 'Commercial',
        title: 'Commercial projects, approached with clarity.',
        intro: 'Darcy’s published company material identifies commercial and residential developments as part of its work. Sector-specific project evidence and outcomes remain approval-gated until confirmed.',
        overview: 'Commercial work has to respect the organisation behind the building. Early decisions, clear communication and a disciplined route through delivery help clients understand what happens next.',
        why: [['Listen before advising','Understand the brief, constraints and people affected before recommending a route.'],['Keep decisions clear','Surface cost, programme and delivery choices early, in plain language.'],['Stay accountable','Keep the relationship direct from first conversation through handover.']],
        services: [['Construction management','Early advice and coordination that bring buildability, cost and programme into one conversation.','/what-we-do/construction-management/'],['Refurbishment','Careful planning for existing buildings and the organisations that continue to use them.','/what-we-do/refurbishment/'],['Main contracting','A coordinated delivery route with quality, safety and communication kept visible.','/what-we-do/']],
        projects: [],
        note: 'Commercial project names, client permissions, locations, outcomes and photography require Darcy approval before publication.'
      },
      education: {
        label: 'Education',
        title: 'Build around the school day.',
        intro: 'Darcy’s published education work shows a careful approach to construction in live learning environments, with safety, access and communication planned around pupils and staff.',
        overview: 'Education projects carry immovable dates and a responsibility to keep learning moving. Darcy’s Farleigh School case study describes phased work, zoning and delivery planned around holiday periods.',
        why: [['Protect the live environment','Plan access, segregation and communication around pupils, staff and visitors.'],['Work to the academic calendar','Use fixed term dates and occupation windows to shape a realistic programme.'],['Prepare for handover','Keep commissioning, familiarisation and defects planning visible before the final week.']],
        services: [['Construction management','Coordinate design, procurement and delivery around an occupied campus.','/what-we-do/construction-management/'],['Refurbishment','Renew existing teaching, dining and support spaces with careful sequencing.','/what-we-do/refurbishment/'],['Main contracting','Deliver defined packages with one accountable route through construction.','/what-we-do/']],
        projects: [['Farleigh School','Education refurbishment','/projects/farleigh-school/']],
        note: 'Additional education projects, photography, dates and client permissions remain approval-gated.'
      },
      residential: {
        label: 'Residential',
        title: 'A home is personal. The process should be too.',
        intro: 'Darcy’s published residential material emphasises communication and regular meetings to understand individual needs, alongside bespoke homes and developments.',
        overview: 'Residential work is shaped by the way a client wants to live. Clear choices, regular conversations and attention to detail give the project a steadier route from ambition to finished home.',
        why: [['Understand how you live','Start with priorities, routines and the details that make a home feel yours.'],['Make choices manageable','Separate essentials from possibilities so design and budget decisions stay clear.'],['Keep the conversation open','Regular communication helps questions surface while they can still be answered.']],
        services: [['Construction management','Bring early feasibility, buildability and programme decisions into focus.','/what-we-do/construction-management/'],['Refurbishment','Improve an existing home while respecting its fabric and the people living around it.','/what-we-do/refurbishment/'],['Developments','Coordinate quality construction for residential developments and bespoke homes.','/what-we-do/']],
        projects: [['Pauncefoot House','Residential','/projects/pauncefoot-house/'],['Canada Common','Residential','/projects/canada-common/']],
        note: 'Residential project photography, completion dates, values and additional outcomes remain approval-gated where not published.'
      },
      community: {
        label: 'Community',
        title: 'Places with a wider purpose.',
        intro: 'Darcy’s published sector material covers community and charitable organisations, including construction and renovation of significant or historical buildings.',
        overview: 'Community projects need careful stewardship of ambition, budget and the people who rely on the building. Darcy’s Sozo Ministries case study provides published evidence of this approach.',
        why: [['Listen to the people who use it','Bring trustees, users and the delivery team into the brief early.'],['Keep purpose visible','Connect scope and investment to access, service delivery and long-term use.'],['Make decisions transparent','Clear assumptions and approvals help teams govern change with confidence.']],
        services: [['Construction management','Shape a practical route through feasibility, procurement and delivery.','/what-we-do/construction-management/'],['Refurbishment','Renew existing and significant buildings with careful investigation and sequencing.','/what-we-do/refurbishment/'],['Main contracting','Coordinate construction, quality and communication through to handover.','/what-we-do/']],
        projects: [['Sozo Ministries Conference Hall','Community','/projects/sozo-ministries-conference-hall/']],
        note: 'Additional community project evidence, impact figures, photography and client permissions remain approval-gated.'
      }
    }[key];
    if (!sectors || !app) return;
    var reasons = sectors.why.map(function (item, i) { return '<article class="card sector-reason"><span class="number">0' + (i + 1) + '</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>'; }).join('');
    var services = sectors.services.map(function (item, i) { return '<a class="card linked-card sector-service" href="' + item[2] + '"><span class="number">0' + (i + 1) + '</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p><span class="card-link">Explore <span aria-hidden="true">→</span></span></a>'; }).join('');
    var projects = sectors.projects.length ? sectors.projects.map(function (item) { return '<a class="sector-project" href="' + item[2] + '"><div class="asset-placeholder" role="img" aria-label="Darcy-owned photography for ' + item[0] + ' to be supplied"><span>Project photography</span><strong>' + item[0] + '</strong></div><div class="sector-project-copy"><span class="eyebrow">' + item[1] + '</span><h3>' + item[0] + '</h3><span class="text-link">Read the case study <span aria-hidden="true">→</span></span></div></a>'; }).join('') : '<div class="sector-approval-note"><span class="eyebrow">Evidence to be confirmed</span><p>' + sectors.note + '</p></div>';
    app.innerHTML = '<section class="page-hero internal-hero sector-hero" aria-labelledby="sector-page-title"><span class="eyebrow">Darcy Construction · ' + sectors.label + '</span><h1 id="sector-page-title" tabindex="-1">' + sectors.title + '</h1><p>' + sectors.intro + '</p></section>' +
      '<section class="section sector-overview" aria-labelledby="sector-overview-title"><div class="section-intro"><span class="eyebrow">Sector overview</span><div><h2 id="sector-overview-title">The setting shapes the work.</h2><p>' + sectors.overview + '</p></div></div><div class="sector-overview-note"><span class="eyebrow">A considered starting point</span><p>Darcy listens first, then helps clarify the practical route through the project.</p></div></section>' +
      '<section class="section sector-why" aria-labelledby="sector-why-title"><div class="section-intro"><span class="eyebrow">Why Darcy in ' + sectors.label.toLowerCase() + '</span><div><h2 id="sector-why-title">Experience that stays close to the brief.</h2><p>Three practical commitments shape the relationship from the first conversation.</p></div></div><div class="cards sector-reasons">' + reasons + '</div></section>' +
      '<section class="section sector-services" aria-labelledby="sector-services-title"><div class="section-intro"><span class="eyebrow">Services provided</span><div><h2 id="sector-services-title">A route shaped around the project.</h2><p>Explore the services that may support your brief. The right combination depends on the building, people and decisions involved.</p></div></div><div class="cards sector-service-grid">' + services + '</div></section>' +
      '<section class="section sector-projects" aria-labelledby="sector-projects-title"><div class="section-intro"><span class="eyebrow">Published evidence</span><div><h2 id="sector-projects-title">Relevant project stories.</h2><p>Read the case studies that show how Darcy has approached related settings and ambitions.</p></div></div><div class="sector-case-grid">' + projects + '</div></section>' +
      '<section class="section sector-process" aria-labelledby="sector-process-title"><div class="section-intro"><span class="eyebrow">How we work</span><div><h2 id="sector-process-title">Clear steps. Fewer surprises.</h2><p>Meet, understand, plan, build and support. Each stage gives the client a clearer next decision.</p></div></div><ol class="sector-process-list"><li><span>01</span><h3>Meet</h3><p>Listen to the ambition, constraints and people involved.</p></li><li><span>02</span><h3>Understand</h3><p>Clarify the brief, priorities and practical risks.</p></li><li><span>03</span><h3>Plan</h3><p>Shape the route, programme and decisions ahead.</p></li><li><span>04</span><h3>Build</h3><p>Coordinate delivery, quality and communication.</p></li><li><span>05</span><h3>Support</h3><p>Stay connected through handover and the next useful step.</p></li></ol></section>' +
      '<section class="statement internal-cta sector-cta" aria-labelledby="sector-cta-title"><div><span class="eyebrow">Start a conversation</span><h2 id="sector-cta-title">Tell us what this project needs to make possible.</h2></div><div><p>You do not need a finished brief. Darcy will listen first and help clarify the next conversation.</p><a class="button button-light" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></section>';
    var heading = document.getElementById('sector-page-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function refineAboutExperience() {
    if (location.hash.slice(1) !== 'story' || !app) return;
    app.innerHTML = `<section class="page-hero internal-hero about-hero" aria-labelledby="about-page-title"><span class="eyebrow">Darcy Construction · Romsey, Hampshire</span><h1 id="about-page-title" tabindex="-1">A construction partner who stays close.</h1><p>Darcy Construction combines experienced project delivery with the personal service of a trusted local business.</p></section>
      <section class="section about-story" aria-labelledby="about-story-title"><div class="about-story-grid"><div class="section-intro"><span class="eyebrow">Our story</span><div><h2 id="about-story-title">Built in Romsey. Trusted through relationships.</h2><p>Darcy was established in Romsey in 1999 by three construction professionals. The business has grown through quality projects, open communication and relationships that continue beyond handover.</p><p>That history still shapes the work: senior people stay connected, decisions are explained plainly and the quality of the finished place matters as much as the process used to deliver it.</p></div></div><figure class="about-feature-media"><div class="asset-placeholder" role="img" aria-label="Darcy-owned company or project photograph to be supplied"><span>Photography to be supplied</span><strong>Darcy-owned story image</strong></div><figcaption>Approved Darcy-owned photography will complete this introduction.</figcaption></figure></div><ol class="story-timeline" aria-label="Darcy story timeline"><li><span>01</span><strong>1999</strong><p>Darcy is established in Romsey by three construction professionals.</p></li><li><span>02</span><strong>Today</strong><p>Three Directors and a wider team remain close to clients, projects and decisions.</p></li><li><span>03</span><strong>Next</strong><p>The aim remains a professional, honest and personal service for clients and suppliers.</p></li></ol></section>
      <section class="section about-difference" aria-labelledby="about-difference-title"><div class="section-intro"><span class="eyebrow">Our difference</span><div><h2 id="about-difference-title">Professional systems. Personal responsibility.</h2><p>Clients get the discipline needed to manage cost, programme, risk and quality without losing access to the people accountable for the work.</p></div></div><div class="cards about-difference-grid"><article class="card"><span class="number">01</span><h3>Listen before advising</h3><p>Understanding the ambition, constraints and people involved comes before recommending a route.</p></article><article class="card"><span class="number">02</span><h3>Communicate clearly</h3><p>Decisions, risks and changes are surfaced early and explained directly.</p></article><article class="card"><span class="number">03</span><h3>Stay accountable</h3><p>The relationship remains personal from the first conversation through delivery and aftercare.</p></article></div></section>
      <section class="section about-values" aria-labelledby="about-values-title"><div class="section-intro"><span class="eyebrow">Vision, mission and values</span><div><h2 id="about-values-title">A clear standard for how Darcy works.</h2><p>Darcy’s published vision is to be a contractor of first choice in Hampshire. Its mission is a constant, personal and professional service, delivered with integrity, fairness and care.</p></div></div><div class="about-vmv-grid"><article><span class="number">01</span><h3>Our vision</h3><p>To be the contractor of first choice for clients and suppliers wishing to engage in construction projects in Hampshire.</p></article><article><span class="number">02</span><h3>Our mission</h3><p>To provide a personal and professional service so projects are successfully completed to time, quality and budget.</p></article><article class="about-values-list"><span class="number">03</span><h3>Our values</h3><ul><li>Honesty, integrity and fairness</li><li>Safety and responsibility</li><li>Strong stakeholder relationships</li><li>Sharing, diversity and adaptability</li></ul></article></div></section>
      <section class="section about-leadership" aria-labelledby="about-leadership-title"><div class="section-intro"><span class="eyebrow">Leadership</span><div><h2 id="about-leadership-title">People you can speak to directly.</h2><p>The current Darcy website identifies three Directors leading the business. Portraits and fuller approved biographies remain approval-gated.</p></div></div><div class="leadership-grid about-leadership-grid"><article class="leader-card"><div class="leader-portrait about-portrait" role="img" aria-label="Approved portrait to be supplied for Parminder Mew"><span>PM</span></div><div><h3>Parminder Mew</h3><strong>Founder and Managing Director</strong><p>Founder and Managing Director of Darcy Construction.</p><span class="profile-note">Approved portrait and biography required.</span></div></article><article class="leader-card"><div class="leader-portrait about-portrait" role="img" aria-label="Approved portrait to be supplied for Robert Mew"><span>RM</span></div><div><h3>Robert Mew</h3><strong>Construction Director</strong><p>Construction Director at Darcy Construction.</p><span class="profile-note">Approved portrait and biography required.</span></div></article><article class="leader-card"><div class="leader-portrait about-portrait" role="img" aria-label="Approved portrait to be supplied for Peter Oliver"><span>PO</span></div><div><h3>Peter Oliver</h3><strong>Commercial Director</strong><p>Commercial Director at Darcy Construction.</p><span class="profile-note">Approved portrait and biography required.</span></div></article></div></section>
      <section class="section about-safety" aria-labelledby="about-safety-title"><div class="section-intro"><span class="eyebrow">Health, safety and quality</span><div><h2 id="about-safety-title">Careful planning protects people and quality.</h2><p>Darcy’s published health-and-safety approach is built around four practical steps: Plan, Do, Check and Act. On live projects, this means considering the people, setting and risks before work begins and checking that arrangements are working.</p></div></div><div class="about-safety-grid"><ol class="safety-cycle" aria-label="Health and safety cycle"><li><span>01</span><strong>Plan</strong><p>Set the arrangements and responsibilities.</p></li><li><span>02</span><strong>Do</strong><p>Put the agreed controls into practice.</p></li><li><span>03</span><strong>Check</strong><p>Review what is happening on and off site.</p></li><li><span>04</span><strong>Act</strong><p>Respond to issues and improve the approach.</p></li></ol><div class="about-quality-note"><span class="eyebrow">Quality in context</span><p>Darcy’s Farleigh School case study describes zoning work so staff and students were not disturbed or put at risk, with delivery planned around a live school environment.</p><a class="text-link" href="/projects/farleigh-school/">Read the Farleigh School case study <span aria-hidden="true">→</span></a></div></div></section>
      <section class="section about-trust" aria-labelledby="about-trust-title"><div class="section-intro"><span class="eyebrow">Why clients choose Darcy</span><div><h2 id="about-trust-title">Experience you can access.</h2><p>Darcy offers construction knowledge and professional systems with a direct relationship that keeps advice, decisions and delivery connected.</p></div></div><div class="cards about-trust-grid"><article class="card"><h3>Senior accountability</h3><p>The leadership team remains visible and involved in the work.</p></article><article class="card"><h3>Clear communication</h3><p>Open conversations help clients understand the decisions ahead.</p></article><article class="card"><h3>Evidence-led delivery</h3><p>Published project stories and client voices show what the approach looks like in practice.</p></article></div><div class="sector-links about-sector-links"><a href="/sectors/residential/"><span>Residential</span><p>Homes and developments shaped around their owners and setting.</p><i aria-hidden="true">↗</i></a><a href="/sectors/education/"><span>Education</span><p>Projects planned around pupils, staff, safety and live operations.</p><i aria-hidden="true">↗</i></a><a href="/sectors/community/"><span>Community</span><p>Places with a wider purpose and people who rely on them.</p><i aria-hidden="true">↗</i></a></div></section>
      <section class="statement internal-cta about-cta" aria-labelledby="about-cta-title"><div><span class="eyebrow">Start a conversation</span><h2 id="about-cta-title">Tell us what you are considering.</h2></div><div><p>You do not need a finished brief. Darcy will listen first and help clarify the next useful step.</p><a class="button button-light" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></section>`;
    var customHeading = document.getElementById('about-page-title');
    if (customHeading) customHeading.focus({ preventScroll: true });
    return;
    app.innerHTML = '<section class="page-hero internal-hero" aria-labelledby="about-page-title"><span class="eyebrow">Darcy Construction · Established 1999</span><h1 id="about-page-title" tabindex="-1">A construction partner who stays close.</h1><p>Darcy Construction combines experienced project delivery with the personal service of a trusted local business.</p></section><section class="section about-story" aria-labelledby="about-story-title"><div class="section-intro"><span class="eyebrow">Our story</span><div><h2 id="about-story-title">Built in Romsey. Trusted across Hampshire.</h2><p>Darcy was established in Romsey in 1999 by three construction professionals. The business has grown through quality projects, open communication and relationships that continue beyond handover.</p><p>That history informs the way Darcy works today: senior people stay connected, decisions are explained plainly and the quality of the finished place matters as much as the process used to deliver it.</p></div></div></section><section class="section about-difference" aria-labelledby="about-difference-title"><div class="section-intro"><span class="eyebrow">How we work</span><div><h2 id="about-difference-title">Professional systems. Personal responsibility.</h2><p>Clients get the discipline needed to manage cost, programme, risk and quality without losing access to the people accountable for the work.</p></div></div><div class="cards"><article class="card"><span class="number">01</span><h3>Listen before advising</h3><p>Understanding the ambition, constraints and people involved comes before recommending a route.</p></article><article class="card"><span class="number">02</span><h3>Communicate clearly</h3><p>Decisions, risks and changes are easier to manage when they are surfaced early and explained directly.</p></article><article class="card"><span class="number">03</span><h3>Stay accountable</h3><p>The relationship remains personal from the first conversation through delivery and aftercare.</p></article></div></section><section class="section about-leadership" aria-labelledby="about-leadership-title"><div class="section-intro"><span class="eyebrow">Leadership</span><div><h2 id="about-leadership-title">People you can speak to directly.</h2><p>The current Darcy website identifies three Directors leading the business. Portraits and fuller approved biographies will be added when supplied.</p></div></div><div class="leadership-grid"><article class="leader-card"><div class="leader-portrait" aria-label="Portrait to be supplied for Parminder Mew"><span>PM</span></div><div><h3>Parminder Mew</h3><strong>Founder and Managing Director</strong><p>Founder and Managing Director of Darcy Construction.</p><span class="profile-note">Approved portrait and biography required.</span></div></article><article class="leader-card"><div class="leader-portrait" aria-label="Portrait to be supplied for Robert Mew"><span>RM</span></div><div><h3>Robert Mew</h3><strong>Construction Director</strong><p>Construction Director at Darcy Construction.</p><span class="profile-note">Approved portrait and biography required.</span></div></article><article class="leader-card"><div class="leader-portrait" aria-label="Portrait to be supplied for Peter Oliver"><span>PO</span></div><div><h3>Peter Oliver</h3><strong>Commercial Director</strong><p>Commercial Director at Darcy Construction.</p><span class="profile-note">Approved portrait and biography required.</span></div></article></div></section><section class="section about-values" aria-labelledby="about-values-title"><div class="section-intro"><span class="eyebrow">Values</span><div><h2 id="about-values-title">The standards behind the work.</h2><p>These values reflect the way Darcy presents its work and relationships across its published company and project material.</p></div></div><div class="cards"><article class="card"><span class="number">01</span><h3>Quality</h3><p>Take pride in the detail and the finished place.</p></article><article class="card"><span class="number">02</span><h3>Integrity</h3><p>Give clear advice and do what has been promised.</p></article><article class="card"><span class="number">03</span><h3>Collaboration</h3><p>Work with clients, consultants and trades as one team.</p></article><article class="card"><span class="number">04</span><h3>Responsibility</h3><p>Stay accountable to the people and places affected by the work.</p></article><article class="card"><span class="number">05</span><h3>Long-term relationships</h3><p>Measure success by what remains after handover.</p></article><article class="card"><span class="number">06</span><h3>Safety</h3><p>Plan around the wellbeing of people using and delivering the project.</p></article></div></section><section class="section about-safety" aria-labelledby="about-safety-title"><div class="section-intro"><span class="eyebrow">Health and safety</span><div><h2 id="about-safety-title">Safety is part of the project plan.</h2><p>Darcy’s published Farleigh School case study describes zoning areas so staff and students were not disturbed or put at risk, with work planned around a live school environment. Project-specific procedures and accreditations should be confirmed for each appointment.</p></div></div><a class="text-link" href="/projects/farleigh-school/">Read the Farleigh School case study <span aria-hidden="true">→</span></a></section><section class="section about-sectors" aria-labelledby="about-sectors-title"><div class="section-intro"><span class="eyebrow">Sectors and experience</span><div><h2 id="about-sectors-title">Different settings. The same care.</h2><p>Darcy’s published work includes residential, education and community projects, with sector pages explaining the practical pressures each setting brings.</p></div></div><div class="sector-links"><a href="/sectors/residential/"><span>Residential</span><p>Homes and developments shaped around their owners and setting.</p><i aria-hidden="true">↗</i></a><a href="/sectors/education/"><span>Education</span><p>Projects planned around pupils, staff, safety and live operations.</p><i aria-hidden="true">↗</i></a><a href="/sectors/community/"><span>Community</span><p>Places with a wider purpose and people who rely on them.</p><i aria-hidden="true">↗</i></a><a href="/projects/"><span>Project evidence</span><p>Read the published stories behind Darcy’s work.</p><i aria-hidden="true">↗</i></a></div></section><section class="section about-trust" aria-labelledby="about-trust-title"><div class="section-intro"><span class="eyebrow">Why work with Darcy</span><div><h2 id="about-trust-title">Experience you can access.</h2><p>Darcy offers the structure and construction knowledge needed for complex work, with a direct relationship that keeps advice, decisions and delivery connected.</p></div></div><div class="cards"><article class="card"><h3>Established experience</h3><p>Darcy has been established in Romsey since 1999.</p></article><article class="card"><h3>Published client voices</h3><p>Client testimonials on the site speak to quality, communication and the experience of working with Darcy.</p></article><article class="card"><h3>Evidence-led decisions</h3><p>Case studies show the challenge, approach and outcome without claiming what cannot be supported.</p></article></div></section><section class="statement internal-cta"><div><span class="eyebrow">Start a conversation</span><h2>Tell us what you are considering.</h2></div><div><p>You do not need a finished brief. Darcy will listen first and help clarify the next step.</p><a class="button button-light" href="/contact/">Contact Darcy <span aria-hidden="true">↗</span></a></div></section>';
    var heading = document.getElementById('about-page-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function refineContactExperience() {
    if (location.hash.slice(1) !== 'contact' || !app) return;
    app.innerHTML = '<section class="page-hero internal-hero" aria-labelledby="contact-page-title"><span class="eyebrow">Contact Darcy Construction</span><h1 id="contact-page-title" tabindex="-1">Start with a conversation.</h1><p>You do not need a finished brief. Tell us what you are considering and we will help you understand the next useful step.</p></section><section class="section contact-grid contact-experience"><aside class="contact-details" aria-labelledby="contact-details-title"><span class="eyebrow">Darcy Construction</span><h2 id="contact-details-title">Romsey, Hampshire</h2><p><a href="tel:01794519545">01794 519545</a><br><a href="mailto:enquiries@darcyconstruction.co.uk">enquiries@darcyconstruction.co.uk</a></p><p>Unit 13 Westlink<br>Belbins Business Park<br>Cupernham Lane<br>Romsey, Hampshire<br>SO51 7JF</p><p>Darcy works with residential, education, community and other approved project settings across Hampshire.</p><div class="contact-trust"><strong>Established 1999</strong><span>Experienced local construction partner</span><a href="/projects/">View project evidence <span aria-hidden="true">→</span></a></div></aside><form id="contact-form" novalidate aria-describedby="contact-form-status"><div id="contact-form-status" class="form-status" role="status" aria-live="polite" aria-atomic="true"></div><p class="form-intro full">Share only what you know. We can clarify the rest together.</p><label for="contact-name"><span>Name</span><input id="contact-name" name="name" autocomplete="name" required aria-describedby="contact-name-error"><span id="contact-name-error" class="field-error" role="alert"></span></label><label for="contact-company"><span>Company <em>(optional)</em></span><input id="contact-company" name="company" autocomplete="organization"></label><label for="contact-email"><span>Email</span><input id="contact-email" name="email" type="email" autocomplete="email" required aria-describedby="contact-email-error"><span id="contact-email-error" class="field-error" role="alert"></span></label><label for="contact-telephone"><span>Telephone <em>(optional)</em></span><input id="contact-telephone" name="telephone" type="tel" autocomplete="tel"></label><label for="contact-location"><span>Project location <em>(optional)</em></span><input id="contact-location" name="location" autocomplete="address-level2"></label><label for="contact-service"><span>What do you need help with?</span><select id="contact-service" name="service"><option value="">Please select</option><option>Construction management</option><option>Refurbishment</option><option>Main contracting</option><option>Residential project</option><option>Education project</option><option>Community project</option><option>Something else</option></select></label><label class="full" for="contact-message"><span>Project description</span><textarea id="contact-message" name="message" required aria-describedby="contact-message-error" rows="6"></textarea><span id="contact-message-error" class="field-error" role="alert"></span></label><div class="bot-field" aria-hidden="true"><label for="contact-bot">Leave this field empty</label><input id="contact-bot" name="bot-field" tabindex="-1" autocomplete="off"></div><button class="button full" type="submit">Send enquiry <span aria-hidden="true">↗</span></button><p class="form-note full">We will only use your details to respond to this enquiry. If the form is unavailable, call or email Darcy directly.</p></form></section><section class="section contact-next" aria-labelledby="contact-next-title"><div class="section-intro"><span class="eyebrow">What happens next</span><div><h2 id="contact-next-title">A straightforward first step.</h2><p>Once your enquiry is received, Darcy will review the information and come back with the most useful next conversation. No response time is promised here until the operating process is confirmed.</p></div></div></section>';
    var heading = document.getElementById('contact-page-title');
    if (heading) heading.focus({ preventScroll: true });
  }

  function ensureSeoMetadata() {
    var key = location.hash.slice(1) || 'home';
    var serviceMeta = {
      'pre-construction-planning': ['Pre-Construction Planning | Darcy Construction', 'Early construction advice from Darcy Construction to clarify scope, buildability, cost, programme and the route into delivery.'],
      'design-build': ['Design & Build | Darcy Construction', 'Explore Darcy Construction’s connected design and build approach, shaped around clear responsibilities and practical delivery decisions.'],
      'main-contracting': ['Main Contracting | Darcy Construction', 'Main contracting from Darcy Construction, coordinating construction, quality, communication and handover through one agreed route.'],
      'construction-management': ['Construction Management | Darcy Construction', 'Construction management from Darcy Construction, bringing feasibility, buildability, cost, programme and delivery decisions together.'],
      'project-management': ['Project Management | Darcy Construction', 'Project management from Darcy Construction, connecting people, information and decisions across the life of a building project.'],
      'refurbishment-alterations': ['Refurbishment & Alterations | Darcy Construction', 'Careful refurbishment and alteration work from Darcy Construction for existing buildings, live environments and valued places.']
    }[key];
    if (serviceMeta) {
      document.title = serviceMeta[0];
      var serviceDescription = document.head.querySelector('meta[name="description"]');
      if (serviceDescription) serviceDescription.setAttribute('content', serviceMeta[1]);
    }
    var canonical = document.head.querySelector('link[rel="canonical"]');
    var url = canonical ? canonical.getAttribute('href') : 'https://www.darcyconstruction.co.uk/';
    var servicePath = { 'pre-construction-planning':'/what-we-do/pre-construction-planning/', 'design-build':'/what-we-do/design-build/', 'main-contracting':'/what-we-do/main-contracting/', 'construction-management':'/what-we-do/construction-management/', 'project-management':'/what-we-do/project-management/', 'refurbishment-alterations':'/what-we-do/refurbishment-alterations/' }[key];
    if (servicePath && canonical) { url = 'https://www.darcyconstruction.co.uk' + servicePath; canonical.setAttribute('href', url); }
    var description = document.head.querySelector('meta[name="description"]');
    var title = document.title;
    var image = 'https://www.darcyconstruction.co.uk/assets/variants/darcy-logo-768.webp';
    function setMeta(selector, attrs, value) {
      var node = document.head.querySelector(selector);
      if (!node) { node = document.createElement('meta'); Object.keys(attrs).forEach(function (name) { node.setAttribute(name, attrs[name]); }); document.head.appendChild(node); }
      node.setAttribute('content', value);
    }
    setMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, description ? description.content : 'Darcy Construction provides professional, relationship-led construction support from Romsey across Hampshire.');
    setMeta('meta[property="og:url"]', { property: 'og:url' }, url);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, image);
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, 'Darcy Construction');
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description ? description.content : 'Darcy Construction provides professional, relationship-led construction support from Romsey across Hampshire.');
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, image);
    var schema = document.getElementById('darcy-schema');
    if (schema && key === 'contact') {
      try {
        var graph = JSON.parse(schema.textContent);
        graph['@graph'] = graph['@graph'] || [];
        if (!graph['@graph'].some(function (item) { return item['@type'] === 'ContactPage'; })) {
          graph['@graph'].push({ '@type': 'ContactPage', '@id': url + '#contact-page', url: url, name: title, description: description ? description.content : '', isPartOf: { '@id': 'https://www.darcyconstruction.co.uk/#website' }, about: { '@id': 'https://www.darcyconstruction.co.uk/#localbusiness' } });
          schema.textContent = JSON.stringify(graph);
        }
      } catch (error) { /* Preserve the existing validated schema if parsing is unavailable. */ }
    }
  }

  function optimiseMediaAndFallbacks() {
    document.querySelectorAll('img').forEach(function (image) {
      image.decoding = 'async';
      if (!image.hasAttribute('width') || !image.hasAttribute('height')) {
        image.setAttribute('width', '1200');
        image.setAttribute('height', '800');
      }
      var critical = image.closest('.hero-media, .case-hero-media, .site-header');
      if (critical) {
        image.loading = 'eager';
        image.setAttribute('fetchpriority', 'high');
      } else {
        image.loading = 'lazy';
        image.removeAttribute('fetchpriority');
      }
      if (!image.dataset.errorHandled) {
        image.addEventListener('error', function () {
          image.classList.add('asset-unavailable');
          image.setAttribute('aria-hidden', 'true');
        }, { once: true });
        image.dataset.errorHandled = 'true';
      }
    });
    var status = document.getElementById('contact-form-status');
    if (status) status.setAttribute('tabindex', '-1');
  }

  function submitContact(event) {
    var form = event.target;
    if (!form || form.id !== 'contact-form') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    var status = document.getElementById('contact-form-status');
    var button = form.querySelector('button[type="submit"]');
    var name = form.elements.name;
    var email = form.elements.email;
    var message = form.elements.message;
    if (!status || !button) return;
    var nameError = document.getElementById('contact-name-error');
    var emailError = document.getElementById('contact-email-error');
    var messageError = document.getElementById('contact-message-error');
    [name, email, message].forEach(function (field) { if (field) field.setAttribute('aria-invalid', 'false'); });
    if (nameError) nameError.textContent = '';
    if (emailError) emailError.textContent = '';
    if (messageError) messageError.textContent = '';
    var valid = name && name.value.trim() && email && email.validity.valid && message && message.value.trim();
    if (!valid) {
      status.textContent = 'Please check your name, email address and message, then try again.';
      if (name && !name.value.trim()) { name.setAttribute('aria-invalid', 'true'); if (nameError) nameError.textContent = 'Please enter your name.'; name.focus(); }
      else if (email && !email.validity.valid) { email.setAttribute('aria-invalid', 'true'); if (emailError) emailError.textContent = 'Please enter a valid email address.'; email.focus(); }
      else if (message && !message.value.trim()) { message.setAttribute('aria-invalid', 'true'); if (messageError) messageError.textContent = 'Please tell us a little about the project.'; message.focus(); }
      return;
    }
    var honeypot = form.querySelector('[name="bot-field"]') || document.createElement('input');
    honeypot.type = 'text'; honeypot.name = 'bot-field'; honeypot.value = '';
    honeypot.tabIndex = -1; honeypot.autocomplete = 'off'; honeypot.setAttribute('aria-hidden', 'true');
    if (!honeypot.parentNode) form.appendChild(honeypot);
    button.disabled = true; status.textContent = 'Sending your enquiry…';
    fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)) })
      .then(function (response) {
        if (!response.ok) throw new Error('Contact form submission failed');
        status.textContent = 'Thank you. Your enquiry has been sent to Darcy Construction.';
        form.reset();
        [name, email, message].forEach(function (field) { if (field) field.setAttribute('aria-invalid', 'false'); });
        status.focus();
      })
      .catch(function () { status.textContent = 'We could not send your enquiry just now. Please call 01794 519545 or email enquiries@darcyconstruction.co.uk.'; status.focus(); })
      .finally(function () { button.disabled = false; });
  }

  document.addEventListener('submit', submitContact, true);
  window.addEventListener('hashchange', function () { window.setTimeout(function () { var key = location.hash.slice(1); renderContent(key); renderPolicy(key); refineServiceExperience(); refineSectorExperience(); refineAboutExperience(); refineContactExperience(); ensureFooterLinks(); refineHeader(); refineProfessionalShell(); normaliseProductionLinks(); refineHomepage(); renderDarcyHomepageV6(); removeUnverifiedPlaceholders(); refineProjectExperience(); ensureSeoMetadata(); optimiseMediaAndFallbacks(); }, 10); });
  window.setTimeout(function () { var key = location.hash.slice(1); renderContent(key); renderPolicy(key); refineServiceExperience(); refineSectorExperience(); refineAboutExperience(); refineContactExperience(); ensureFooterLinks(); refineHeader(); refineProfessionalShell(); normaliseProductionLinks(); refineHomepage(); renderDarcyHomepageV6(); removeUnverifiedPlaceholders(); refineProjectExperience(); ensureSeoMetadata(); optimiseMediaAndFallbacks(); }, 10);
}());
