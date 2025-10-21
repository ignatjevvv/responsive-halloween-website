/* =================== CHANGE BACKGROUND HEADER =================== */

export function scrollHeader() {
  const header = document.getElementById('header');

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  };

  window.addEventListener('scroll', handleScroll);
}
