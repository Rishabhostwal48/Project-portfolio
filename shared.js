// ── FOOTER ──
const footerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" style="display:inline-flex;margin-bottom:4px">
        <img src="logo.png" alt="BondSure Infra" class="nav-logo-img">
        <span class="nav-logo-text">BondSure <em>Infra Pvt. Ltd.</em></span>
      </a>
      <p>Engaged in the development and execution of infrastructure, industrial, and residential projects. Building reliable, sustainable communities across Central India.</p>
      <div class="social-links">
        <a href="#" class="social-link" title="LinkedIn">in</a>
        <a href="#" class="social-link" title="Facebook">fb</a>
        <a href="#" class="social-link" title="Instagram">ig</a>
        <a href="#" class="social-link" title="WhatsApp">wa</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">What We Do</a></li>
        <li><a href="machinery.html">Our Machinery</a></li>
        <li><a href="vision.html">Vision & Mission</a></li>
        <li><a href="clients.html">Our Clients</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html#new-construction">New Construction</a></li>
        <li><a href="services.html#rcc-road">RCC Road Construction</a></li>
        <li><a href="services.html#repair">Building Repair</a></li>
        <li><a href="services.html#diamond">Diamond Rope Cutting</a></li>
        <li><a href="services.html#civil">Civil Services</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:9165160124">📞 9165160124</a></li>
        <li><a href="mailto:bondsureinfra@gmail.com">✉ bondsureinfra@gmail.com</a></li>
        <li style="color:rgba(255,255,255,0.5);font-size:.86rem;line-height:1.6">📍 320-324 DM Tower,<br>Near Janjeerwala Square,<br>Indore</li>
        <li><a href="contact.html">Get a Quote →</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 BondSure Infra Private Limited. All Rights Reserved.</p>
    <p>320-324 DM Tower, Near Janjeerwala Square, Indore</p>
  </div>
</footer>`;

const fp = document.getElementById('footer-placeholder');
if (fp) fp.outerHTML = footerHTML;

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 65);
  });
}, { threshold: 0.08 });
reveals.forEach(r => revObs.observe(r));

// ── NAV SHRINK ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.height = window.scrollY > 60 ? '62px' : '';
});

// ── HAMBURGER ──
function toggleMenu() {
  const nl = document.getElementById('navLinks');
  const hb = document.getElementById('hamburger');
  if (!nl) return;
  nl.classList.toggle('open');
  hb && hb.classList.toggle('open');
}

// ── ACTIVE NAV ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ── FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  if (btn) {
    btn.textContent = '✓ Enquiry Sent!';
    btn.style.background = '#1a5c1a';
    btn.style.color = '#fff';
    setTimeout(() => { btn.textContent = 'Send Enquiry →'; btn.style.background = ''; btn.style.color = ''; }, 3500);
  }
}