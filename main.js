const header = document.querySelector('header');

const stickHeader = () => {
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.addEventListener('scroll', stickHeader);

const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) =>
  link.addEventListener('click', (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      110;

    menu.classList.remove('active');
    burgerBtn.classList.remove('active');

    window.scrollTo({ top: section, behavior: 'smooth' });
  })
);


mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}