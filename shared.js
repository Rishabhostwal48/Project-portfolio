// Shared nav + footer + scroll behaviors

// ── FOOTER HTML ──
const footerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="nav-logo" style="display:inline-flex">
        <img src="logo.png" alt="BondSure Infra" class="nav-logo-img">
        <span class="nav-logo-text">BondSure <em>Infra</em></span>
      </a>
      <p>Building India's infrastructure future since 1992. A trusted partner for government and private sector projects across Central India and beyond.</p>
      <div class="social-links">
        <a href="#" class="social-link">in</a>
        <a href="#" class="social-link">fb</a>
        <a href="#" class="social-link">tw</a>
        <a href="#" class="social-link">yt</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="management.html">Management Desk</a></li>
        <li><a href="awards.html">Awards & Recognition</a></li>
        <li><a href="journey.html">Our Journey</a></li>
        <li><a href="careers.html">Careers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Projects</h4>
      <ul>
        <li><a href="road-works.html">Road Works</a></li>
        <li><a href="irrigation.html">Irrigation Projects</a></li>
        <li><a href="housing.html">Housing & Buildings</a></li>
        <li><a href="bridges.html">Bridges & Structures</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="why-us.html">Why Choose Us</a></li>
        <li><a href="safety.html">Safety & Execution</a></li>
        <li><a href="partners.html">Our Partners</a></li>
        <li><a href="culture.html">Culture</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 BondSure Infra Pvt. Ltd. All Rights Reserved.</p>
    <p>Crafted with precision for infrastructure excellence.</p>
  </div>
</footer>`;

// Inject footer
const fp = document.getElementById('footer-placeholder');
if (fp) fp.outerHTML = footerHTML;

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(r => revObs.observe(r));

// ── NAV SHRINK ON SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.height = window.scrollY > 60 ? '60px' : '';
});

// ── HAMBURGER ──
function toggleMenu() {
  const nl = document.getElementById('navLinks');
  const hb = document.getElementById('hamburger');
  if (!nl) return;
  nl.classList.toggle('open');
  hb && hb.classList.toggle('open');
}

// ── ACTIVE NAV LINK ──
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
    btn.style.background = '#2a6a2a';
    setTimeout(() => { btn.textContent = 'Send Enquiry →'; btn.style.background = ''; }, 3500);
  }
}
