const initAccordion = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  const activeClass = 'ativo';

  accordionList[0].classList.toggle(activeClass);
  accordionList[0].nextElementSibling.classList.toggle(activeClass);

  accordionList.forEach((element) => {
    element.addEventListener('click', function () {
      element.classList.toggle(activeClass);
      element.nextElementSibling.classList.toggle(activeClass);
    });
  });
};
initAccordion();

function smoothScroll() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    // section.scrollIntoView({
    //   block: 'start',
    //   behavior: 'smooth',
    // });
    const top = section.offsetTop;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  linksInternos.forEach((element) => {
    element.addEventListener('click', scrollToSection);
  });
}
smoothScroll();

function animaScroll() {
  const sections = document.querySelectorAll('a[href^="#"]');
  console.log('');
  sections.forEach((item) => {
    const sectionId = item.getAttribute('href');
    const section = document.querySelector(sectionId);
    const positionTop = section.getBoundingClientRect().top;
    if (positionTop < 0) console.log('sumiu');
    else console.log(positionTop);
  });
}

window.addEventListener('scroll', animaScroll);