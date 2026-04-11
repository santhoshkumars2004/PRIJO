/* ============================================================
   PRIJO — GSAP ScrollTrigger Animations (animations.js)
   All scroll-based animations for the entire site
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Register plugin
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    initAnimations();
  }
});

function initAnimations() {
  heroAnimations();
  heroParallax();
  revealSections();
  productCardReveal();
  brandStatementParallax();
  collectionCardsReveal();
  trustStripReveal();
  aboutSectionReveal();
}

/* ---------- HERO ANIMATIONS ---------- */
function heroAnimations() {
  const heroTitle = document.getElementById('hero-title');
  if (!heroTitle) return;

  const tl = gsap.timeline({ delay: 0.3 });

  // Eyebrow
  const eyebrow = document.querySelector('.hero-eyebrow');
  if (eyebrow) {
    tl.to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }

  // Title lines
  const lines = heroTitle.querySelectorAll('.line span');
  if (lines.length) {
    tl.to(lines, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, '-=0.4');
  }

  // Sub heading
  const sub = document.querySelector('.hero-sub');
  if (sub) {
    tl.to(sub, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3');
  }

  // CTAs
  const ctas = document.querySelector('.hero-ctas');
  if (ctas) {
    tl.to(ctas, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3');
  }
}

/* ---------- HERO PARALLAX ---------- */
function heroParallax() {
  const heroBg = document.getElementById('hero-bg');
  if (!heroBg) return;

  gsap.to(heroBg, {
    y: '30%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

/* ---------- SECTION REVEALS ---------- */
function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          el.classList.add('revealed');
        }
      }
    );
  });

  // Title underlines
  document.querySelectorAll('.section-title').forEach(title => {
    ScrollTrigger.create({
      trigger: title,
      start: 'top 85%',
      onEnter: () => title.classList.add('revealed')
    });
  });

  // Reveal left
  document.querySelectorAll('.reveal-left').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onComplete: () => el.classList.add('revealed')
      }
    );
  });

  // Reveal right
  document.querySelectorAll('.reveal-right').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        onComplete: () => el.classList.add('revealed')
      }
    );
  });
}

/* ---------- PRODUCT CARDS REVEAL ---------- */
function productCardReveal() {
  const grids = document.querySelectorAll('.products-grid, .shop-grid');
  grids.forEach(grid => {
    const cards = grid.querySelectorAll('.product-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

/* ---------- BRAND STATEMENT PARALLAX ---------- */
function brandStatementParallax() {
  const bg = document.getElementById('brand-statement-bg');
  if (!bg) return;

  gsap.to(bg, {
    y: '-20%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.brand-statement',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  const content = document.querySelector('.brand-statement-content');
  if (content) {
    gsap.fromTo(content,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.brand-statement',
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }
}

/* ---------- COLLECTION CARDS REVEAL ---------- */
function collectionCardsReveal() {
  const cards = document.querySelectorAll('.collection-card');
  if (!cards.length) return;

  gsap.fromTo(cards,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.collections-grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
}

/* ---------- TRUST STRIP REVEAL ---------- */
function trustStripReveal() {
  const items = document.querySelectorAll('.trust-item');
  if (!items.length) return;

  gsap.fromTo(items,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.trust-strip',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
}

/* ---------- ABOUT SECTION ---------- */
function aboutSectionReveal() {
  const aboutImg = document.querySelector('.about-image img');
  if (aboutImg) {
    gsap.to(aboutImg, {
      y: '-10%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-split',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // About page hero parallax
  const aboutHeroBg = document.querySelector('.about-hero-bg');
  if (aboutHeroBg) {
    gsap.to(aboutHeroBg, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.about-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}
