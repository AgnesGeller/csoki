'use strict';

/* ===============================
   SEGÉDFÜGGVÉNY – több elemre esemény
================================= */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/* ===============================
   NAVBAR
================================= */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElements(navbarLinks, "click", closeNavbar);

/* ===============================
   HEADER – scrollra aktiválódik
================================= */
const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElemOnScroll);

/* ===============================
   SCROLL REVEAL
================================= */
const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = function () {
  for (let i = 0; i < revealElements.length; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
      revealElements[i].classList.add("revealed");
      if (revealElements[i].classList.contains("btn")) {
        setTimeout(() => {
          revealElements[i].style.transition = "0.25s ease";
        }, 1000);
      }
    }
  }
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===============================
   🍫 CSOKI KATALÓGUS SZŰRÉS
================================= */
const catalogFilterButtons = document.querySelectorAll('.catalog-filters button');
const catalogCards = document.querySelectorAll('.catalog-card');

catalogFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // Aktív gomb kezelése
    catalogFilterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter.trim().toLowerCase();

    catalogCards.forEach(card => {
      const categories = card.dataset.category.trim().toLowerCase().split(' ');

      if (filter === 'all') {
        card.style.display = 'block';
      } else if (categories.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
