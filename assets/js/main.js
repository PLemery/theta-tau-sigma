/* Theta Tau – Sigma Chapter site behavior */
document.documentElement.classList.remove('no-js');

/* ---------- Fade sections in as they scroll into view ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  // Stagger siblings slightly so groups cascade in
  revealEls.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 4) * 120}ms`;
    observer.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Mobile menu ---------- */
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('is-open', !open);
});

// Close the menu after choosing a link
menu.addEventListener('click', (e) => {
  if (!e.target.closest('a')) return;
  toggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
});

/* ---------- Diamond gallery layout ---------- */
// Rows alternate between `perRow` diamonds and `perRow - 1` offset diamonds,
// so they interlock like the old Wix "honeycomb" gallery.
const diamonds = document.querySelector('.diamonds');

function layoutDiamonds() {
  const perRow = parseInt(getComputedStyle(diamonds).getPropertyValue('--per-row'), 10) || 4;
  let row = 0;
  let col = 0;
  [...diamonds.children].forEach((item) => {
    const inRow = row % 2 === 0 ? perRow : perRow - 1;
    if (col >= inRow) { row += 1; col = 0; }
    const offset = row % 2 === 0 ? 1 : 2;
    item.style.setProperty('--r', row + 1);
    item.style.setProperty('--c', offset + col * 2);
    col += 1;
  });
}
layoutDiamonds();
window.addEventListener('resize', layoutDiamonds);

/* ---------- Lightbox ---------- */
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');

diamonds.addEventListener('click', (e) => {
  const img = e.target.closest('button')?.querySelector('img');
  if (!img) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.showModal();
});
lightbox.addEventListener('click', (e) => {
  // Click on the backdrop or the × closes it
  if (e.target === lightbox || e.target.closest('.lightbox__close')) lightbox.close();
});

/* ---------- Keep the footer year current ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
