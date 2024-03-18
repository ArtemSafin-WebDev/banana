export default function menu() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (
      target.matches(".page-header__burger") ||
      target.closest(".page-header__burger")
    ) {
      document.body.classList.toggle("menu-open");
    }
  });

  const menu = document.querySelector(".page-header__menu");

  if (menu) {
    const links = Array.from(menu.querySelectorAll<HTMLLinkElement>("a"));

    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
      });
    });
  }
}
