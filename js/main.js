/* ================================================================
   TRPEZA — main.js
   Verzija: 1.0.0

   SADRŽAJ:
   01. GSAP Inicijalizacija & Hero animacije
   02. Parallax efekti (ScrollTrigger)
   03. Scroll reveal za sve sekcije
   04. Navigacija — transparentna → solid
   05. Language toggle (SR / EN)
   06. Menu tabovi (sticky)
   07. Galerija lightbox
   08. Mobilna navigacija
   09. Smooth scroll (anchor links)
   ================================================================ */

/* ================================================================
   01. GSAP — INICIJALIZACIJA
   GSAP i ScrollTrigger se učitavaju iz CDN-a u HTML-u.
   Ovaj blok registruje plugin i pokreće sve animacije.
   ================================================================ */
gsap.registerPlugin(ScrollTrigger);

/* ----------------------------------------------------------------
   Hero: zoom-in efekat na učitavanju stranice
   Slika počinje uvećana (scale: 1.16) i polako se smanjuje.
   Ako koristiš video umesto slike, zameni '.hero-img' sa '.hero-video'
   ---------------------------------------------------------------- */
gsap.from('.hero-img', {
  scale:    1.16,
  duration: 3.0,
  ease:     'power3.out'
});

/* ----------------------------------------------------------------
   Hero: staggered reveal — eyebrow, naslov, linija, podnaslov, CTA
   Svaki element ulazi sa malo kašnjenja (stagger: 0.2s)
   ---------------------------------------------------------------- */
gsap.from('#hero .rv', {
  opacity:  0,
  y:        45,
  duration: 1.3,
  stagger:  0.2,
  ease:     'power3.out',
  delay:    0.35,
  onComplete: function() {
    // Ukloni rv klase iz hero sekcije nakon animacije
    document.querySelectorAll('#hero .rv').forEach(el => {
      el.style.opacity  = '';
      el.style.transform = '';
    });
  }
});

/* Scroll indikator — ulazi naknadno */
gsap.from('.hero-scroll', {
  opacity:  0,
  duration: 1.4,
  delay:    1.9,
  ease:     'power2.out'
});

/* ================================================================
   02. PARALLAX EFEKTI (ScrollTrigger)
   ================================================================ */

/* --- Hero slika parallax (pomaknuto prema gore pri skrolovanju) --- */
gsap.to('.hero-img', {
  scrollTrigger: {
    trigger:      '#hero',
    start:        'top top',
    end:          'bottom top',
    scrub:        1.2
  },
  y:    130,
  ease: 'none'
});

/* --- About sekcija: suptilan parallax fotografije --- */
gsap.to('.about-img-col img', {
  scrollTrigger: {
    trigger: '#o-nama',
    start:   'top bottom',
    end:     'bottom top',
    scrub:   0.8
  },
  y:    -40,
  ease: 'none'
});

/* ================================================================
   03. SCROLL REVEAL ZA SVE SEKCIJE
   Selektuje sve .rv elemente IZVAN hero sekcije (hero je odvojen)
   ================================================================ */
document.querySelectorAll('.rv').forEach(el => {
  /* Preskoči hero — već animiran pri loadu */
  if (el.closest('#hero')) return;

  gsap.from(el, {
    scrollTrigger: {
      trigger:       el,
      start:         'top 90%',
      toggleActions: 'play none none none'
    },
    opacity:  0,
    y:        30,
    duration: 0.85,
    ease:     'power2.out'
  });
});

/* ================================================================
   04. NAVIGACIJA — Scroll detection
   ================================================================ */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 70);
}, { passive: true });

/* ================================================================
   05. LANGUAGE TOGGLE (SR ↔ EN)
   ================================================================ */
let currentLang = 'sr';

function toggleLang() {
  currentLang = currentLang === 'sr' ? 'en' : 'sr';

  /* Dodaj/ukloni klasu na body */
  document.body.classList.toggle('lang-en', currentLang === 'en');

  /* Ažuriraj label dugmeta */
  document.getElementById('langLbl').textContent = currentLang === 'sr' ? 'EN' : 'SR';

  /* Ažuriraj html lang atribut za SEO/accessibility */
  document.documentElement.lang = currentLang;
}

/* Exportuj za HTML inline onclick */
window.toggleLang = toggleLang;

/* ================================================================
   06. MENU TABOVI
   ================================================================ */
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.menu-panel');

/**
 * Otvori tab po ID-u i indeksu
 * @param {string} id  - ID panela bez prefksa 'p-' (npr. 'predjela')
 * @param {number} idx - Indeks tab dugmeta (0-based)
 */
function openTab(id, idx) {
  /* Ukloni active sa svih tabova i panela */
  tabBtns.forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  tabPanels.forEach(p => p.classList.remove('active'));

  /* Aktiviraj odabrani */
  const panel = document.getElementById('p-' + id);
  if (panel) panel.classList.add('active');

  if (tabBtns[idx]) {
    tabBtns[idx].classList.add('active');
    tabBtns[idx].setAttribute('aria-selected', 'true');

    /* Na mobilnim — scroll taba u vidno polje */
    tabBtns[idx].scrollIntoView({
      behavior: 'smooth',
      block:    'nearest',
      inline:   'center'
    });
  }
}

/* Exportuj za HTML inline onclick */
window.openTab = openTab;

/* ================================================================
   07. GALERIJA LIGHTBOX
   ================================================================ */
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');

/**
 * Otvori lightbox sa slikom iz kliknutog elementa
 * @param {HTMLElement} el - Roditeljski .gal-item element
 */
function openLb(el) {
  const img = el.querySelector('img');
  if (!img) return;

  /* Učitaj višu rezoluciju za lightbox (zameni w=700 sa w=1400) */
  lbImg.src = img.src.replace(/w=\d+/, 'w=1400');
  lbImg.alt = img.alt;

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';

  /* Trapuj fokus u lightboxu */
  lightbox.querySelector('.lb-close').focus();
}

function closeLb() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lbImg.src = '';
}

/* Zatvori na Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLb();
});

/* Exportuj za HTML inline onclick */
window.openLb  = openLb;
window.closeLb = closeLb;

/* ================================================================
   08. MOBILNA NAVIGACIJA
   ================================================================ */
const mobileNav = document.getElementById('mobileNav');

function openMob() {
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
  mobileNav.querySelector('a').focus();
}

function closeMob() {
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

/* Zatvori mob nav na Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
    closeMob();
  }
});

/* Exportuj za HTML inline onclick */
window.openMob  = openMob;
window.closeMob = closeMob;

/* ================================================================
   09. SMOOTH SCROLL (anchor link-ovi)
   Offset za visinu navigacione trake
   ================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetSelector = this.getAttribute('href');
    const target = document.querySelector(targetSelector);
    if (!target) return;

    e.preventDefault();

    const navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
    ) || 80;

    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});
