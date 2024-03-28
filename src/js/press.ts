import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import "swiper/css";

export default function press() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".press"));
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
    };

    new Swiper(container, options);
  });
}
