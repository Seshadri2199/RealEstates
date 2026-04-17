/* =========================================
   LISTINGS PAGE JAVASCRIPT
   ========================================= */

// ---- FILTER BY CATEGORY ----
const filterBtns = document.querySelectorAll('#typeFilter .pill');
const propCards = document.querySelectorAll('.prop-card');
const listingsCount = document.querySelector('.listings-count strong');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active pill
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    let visible = 0;

    propCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filter === 'all' || cat === filter) {
        card.style.display = 'block';
        card.style.animation = 'none';
        void card.offsetWidth; // reflow
        card.style.animation = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (listingsCount) listingsCount.textContent = visible;
  });
});

// ---- PAGINATION ----
const pageBtns = document.querySelectorAll('.page-btn:not(.page-btn--next)');
pageBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    pageBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ---- NEXT BUTTON ----
const nextBtn = document.querySelector('.page-btn--next');
nextBtn?.addEventListener('click', () => {
  const active = document.querySelector('.page-btn.active:not(.page-btn--next)');
  const next = active?.nextElementSibling;
  if (next && !next.classList.contains('page-btn--next')) {
    pageBtns.forEach(b => b.classList.remove('active'));
    next.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
