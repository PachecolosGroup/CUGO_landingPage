const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/* Menu Hidden */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener('click', linkAction))

/*SCROLL UP */
const scrollUp = () => {
    const scrollup = document.getElementById("scroll-up")

    this.scrollY >= 350 ? scrollup.classList.add("show-scroll")
        : scrollup.classList.remove("show-scroll")
}
window.addEventListener('scroll', scrollUp)

