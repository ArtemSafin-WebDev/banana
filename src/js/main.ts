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
import team from "./team";
import subscribe from "./subscribe";
import strat from "./strat";
import smoothScrolling from "./smoothScrolling";
import loader from "./loader";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
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
  team();
  subscribe();
  strat();
  loader();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
