import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function strat() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".strat"));

  elements.forEach((element) => {
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".strat__list-item")
    );
    const list = element.querySelector<HTMLElement>(".strat__list");
    const wrapper = element.querySelector<HTMLElement>(".strat__wrapper");
    if (!list || !wrapper) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      // gsap.set(element, {
      //   overflow: "hidden",
      //   maxHeight: "100vh",
      // });
      // ScrollTrigger.refresh();

      const pageHeader = document.querySelector<HTMLElement>(".page-header");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: () => `top top+=${pageHeader ? pageHeader.offsetHeight : 0}`,
          pin: wrapper,
          pinSpacing: false,
          scrub: true,
          end: () => `bottom bottom`,
        },
      });

      cards.forEach((card, cardIndex) => {
        if (cardIndex === 0) return;

        const prevCard = cards[cardIndex - 1];
        const prevCardTitle =
          prevCard.querySelector<HTMLElement>(".strat__card-title");

        tl.to(
          card,
          {
            // y: () => {
            //   const gap = parseFloat(
            //     window.getComputedStyle(list).getPropertyValue("gap")
            //   );
            //   console.log("Gap", gap);
            //   const cardHeight = cards[0].offsetHeight;
            //   const offset = (cardHeight - gap / 2) * -1 * cardIndex;

            //   console.log(`Card ${cardIndex + 1} values:`, {
            //     height: (cardHeight - gap * 2) * cardIndex * -1,
            //   });
            //   return offset;
            // },
            y: () =>
              -1 *
              (card.offsetHeight -
                (prevCardTitle ? prevCardTitle?.offsetHeight : 0)),
            duration: () => cardIndex * 0.5,
            ease: "none",
          },
          0
        );

        tl.to(
          prevCard,
          {
            autoAlpha: 0.2,
            duration: () => cardIndex * 0.5,
          },
          0
        );
      });
    });
  });
}
