/*================== SCROLL SECTIONS ACTIVE LINK ==================*/
export function scrollActive() {
  const scrollActiveItem = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.add('active-link');
        console.log('true:' + sectionId);
      } else {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.remove('active-link');
        console.log(sectionId);
      }
    });
  };

  window.addEventListener('scroll', scrollActiveItem);
}
