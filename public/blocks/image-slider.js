const elements = Array.from(document.querySelectorAll(".js-image-slider"));

function init(element) {
  const container = element.querySelector(".image-gallery__wrapper .swiper");
  if (!container) return;

  const textContainer = element.querySelector(
    ".image-gallery__text-slider .swiper"
  );

  const mainInstance = new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 600,
    longSwipesRatio: 0.2,
    navigation: {
      prevEl: element.querySelector(".image-gallery__arrow--prev"),
      nextEl: element.querySelector(".image-gallery__arrow--next"),
    },
    pagination: {
      type: "fraction",
      el: element.querySelector(".image-gallery__fraction-pagination"),
      formatFractionCurrent: (current) => current.toString().padStart(2, "0"),
      formatFractionTotal: (current) => current.toString().padStart(2, "0"),
    },
  });

  const textInstance = new Swiper(textContainer, {
    slidesPerView: 1,
    speed: 600,
    longSwipesRatio: 0.2,
    autoHeight: true,
    spaceBetween: 20,
    pagination: {
      type: "bullets",
      clickable: true,
      el: element.querySelector(".image-gallery__bullets-pagination"),
    },
  });

  mainInstance.controller.control = textInstance;
  textInstance.controller.control = mainInstance;
}

elements.forEach((element) => init(element));

function initializeACFSlider($block) {
  console.log("Native slider element", $block[0]);
  init($block[0]);
}

//@ts-ignore
if (window.acf) {
  //@ts-ignore
  window.acf.addAction(
    "render_block_preview/type=image-slider",
    initializeACFSlider
  );
}
