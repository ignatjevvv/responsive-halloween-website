import ScrollReveal from 'scrollreveal';

export function scrollReveal() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
  });

  sr.reveal('.home-swiper, .new-swiper, .newsletter__container');
  sr.reveal('.category__data, .trick__content, .footer__content', { interval: 100 });
  sr.reveal('.about__data, .discount__img', { origin: 'left' });
  sr.reveal('.about__img, .discount__data', { origin: 'right' });
}
