"use strict";

/* Responsive menu */
const hamburgerMenuBtn = document.querySelector(".hamburger-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const nav = document.querySelector("nav");
const menuOverlay = document.querySelector(".menu-overlay");

function showMenu() {
    nav.classList.add("show");
    menuOverlay.classList.add("show");
}

function hideMenu() {
    nav.classList.remove("show");
    menuOverlay.classList.remove("show");
}

hamburgerMenuBtn.addEventListener("click", () => {
    showMenu();
});

closeMenuBtn.addEventListener("click", () => {
    hideMenu();
});

menuOverlay.addEventListener("click", () => {
    hideMenu();
});

/* Responsive menu end */

/* Scroll animation */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("scroll-animation-show");
            } else {
                entry.target.classList.remove("scroll-animation-show");
            }
        });
    },
    { threshold: 0.2 }
);

const animationItemsEl = document.querySelectorAll(".scroll-animation-hide");
animationItemsEl.forEach((animationItem) => {
    observer.observe(animationItem);
});
/* Scroll animation end */
