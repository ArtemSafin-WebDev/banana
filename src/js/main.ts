import "virtual:svg-icons-register";
import "../scss/style.scss";
import accordions from "./accordions";
import menu from "./menu";
import modals from "./modals";
import forms from "./forms";
import ecosystem from "./ecosystem";
import funding from "./funding";
import blog from "./blog";
import tabs from "./tabs";
import ticker from "./ticker";
import press from "./press";

document.addEventListener("DOMContentLoaded", () => {
  accordions();
  tabs();
  menu();
  modals();
  forms();
  ecosystem();
  funding();
  blog();
  ticker();
  press();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  setTimeout(() => {
    document.body.classList.add("loader-hidden");
  });
});
