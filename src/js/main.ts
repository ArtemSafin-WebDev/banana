import "virtual:svg-icons-register";
import "../scss/style.scss";
import accordions from "./accordions";
import menu from "./menu";
import modals from "./modals";
import forms from "./forms";

document.addEventListener("DOMContentLoaded", () => {
  accordions();
  menu();
  modals();
  forms();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  setTimeout(() => {
    document.body.classList.add("loader-hidden");
  });
});
