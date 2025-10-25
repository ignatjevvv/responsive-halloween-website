export function scrollUp() {
  const scrollUpButton = () => {
    const scrollUp = document.getElementById('scroll-up');

    if (window.scrollY >= 460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  };

  window.addEventListener('scroll', scrollUpButton);
}
