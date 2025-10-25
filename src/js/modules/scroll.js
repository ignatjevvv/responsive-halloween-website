/*================== SCROLL SECTIONS ACTIVE LINK ==================*/
export function scrollActive() {
  const scrollActiveItem = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    console.log('scrollY: ' + scrollY);

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 56;
      let sectionId = section.getAttribute('id');

      console.log(
        'Section Name: ' + section.className,
        'SectionHeight: ' + sectionHeight,
        'SectionTop: ' + sectionTop,
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.add('active-link');
        console.log('true: ' + sectionId);
      } else {
        document
          .querySelector(`.nav__menu a[href*=${sectionId}]`)
          .classList.remove('active-link');
        console.log('false: ' + sectionId);
      }
    });
  };

  window.addEventListener('scroll', scrollActiveItem);
}
