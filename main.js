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
      240;
    console.log(section);

    menu.classList.remove('active');
    burgerBtn.classList.remove('active');

    window.scrollTo({ top: section, behavior: 'smooth' });
  })
);






const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


const codewarsHolder = document.querySelector('.code_wars')
const userName = document.querySelector('.userName')
const honor = document.querySelector('.honor')
const ranks = document.querySelector('.rank')
const totalComplet = document.querySelector('.total')

const CODEWARS_URL = "https://www.codewars.com/api/v1/users/MamianD"


let codeWarsApi = fetch(CODEWARS_URL)
  .then((result) => {
    return result.json();
  })
  .then((response) => {
    // console.log(response);
    userName.textContent += response.username;
    honor.textContent += response.honor;
    ranks.textContent += response.ranks.overall.name;
    totalComplet.textContent += response.codeChallenges.totalCompleted;


  })
  .catch((err) => {
    console.error(err);
    error.textContent = err.message;
  })

console.log();
