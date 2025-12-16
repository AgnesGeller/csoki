'use strict';



// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



// navbar functionality

const [navbar, navToggler, navbarLinks] = [
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]")
];

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
  document.body.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);



// header active

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElemOnScroll);



// scroll reveal effect

const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = function () {
  for (let i = 0; i < revealElements.length; i++) {

    // add revealed class on element, when visible in window
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
      revealElements[i].classList.add("revealed");

      // remove long transition from button, after 1 second
      if (revealElements[i].classList.contains("btn")) {
        setTimeout(function () {
          revealElements[i].style.transition = "0.25s ease";
        }, 1000);
      }
    }

  }
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


  // Növénykatalógus szűrés gombok alapján
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".filter-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.category;

      cards.forEach(card => {
        const tags = card.dataset.category || "";
        const show = selected === "all" || tags.includes(selected);
        card.style.display = show ? "" : "none";
      });

      // Aktív gomb kiemelése
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Japánkert modal viselkedés – kép kinagyítása és kattintásra bezárás
  const japanKertModal = document.getElementById("japanKertModal");

  if (japanKertModal) {
    japanKertModal.addEventListener("shown.bs.modal", function () {
      const instance = bootstrap.Modal.getInstance(japanKertModal);
      const closeHandler = () => instance.hide();

      // Bármely kattintás zárja be (kivéve a képre)
      japanKertModal.addEventListener("click", closeHandler, { once: true });

      const modalImg = japanKertModal.querySelector("img");
      if (modalImg) {
        modalImg.addEventListener("click", (e) => e.stopPropagation(), { once: true });
      }
    });
  }


  
