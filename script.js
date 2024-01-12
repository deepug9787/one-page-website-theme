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
