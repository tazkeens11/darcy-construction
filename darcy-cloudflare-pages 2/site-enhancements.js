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
    var links = document.createElement('p');
    links.dataset.legalLinks = 'true';
    links.className = 'footer-legal-links';
    links.innerHTML = '<a href="#privacy">Privacy policy</a><span aria-hidden="true"> · </span><a href="#cookies">Cookie policy</a>';
    footer.appendChild(links);
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
    if (!status || !button) return;
    var valid = name && name.value.trim() && email && email.validity.valid;
    if (!valid) {
      status.textContent = 'Please check your name and email address, then try again.';
      if (name && !name.value.trim()) name.focus(); else if (email) email.focus();
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
      })
      .catch(function () { status.textContent = 'We could not send your enquiry just now. Please call 01794 519545 or email enquiries@darcyconstruction.co.uk.'; })
      .finally(function () { button.disabled = false; });
  }

  document.addEventListener('submit', submitContact, true);
  window.addEventListener('hashchange', function () { window.setTimeout(function () { var key = location.hash.slice(1); renderContent(key); renderPolicy(key); ensureFooterLinks(); }, 10); });
  window.setTimeout(function () { var key = location.hash.slice(1); renderContent(key); renderPolicy(key); ensureFooterLinks(); }, 10);
}());
