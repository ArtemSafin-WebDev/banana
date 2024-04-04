import gsap from "gsap";

export default function loader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;

  const squares = Array.from(
    loader.querySelectorAll<HTMLElement>(".loader__square")
  );

  const tl = gsap.timeline({
    repeat: -1,
    delay: 2,
  });

  tl.to(squares[2], {
    xPercent: -100,
    duration: 2,
  });

  tl.to(
    squares[1],
    {
      yPercent: 100,
      duration: 2,
    },
    "<+=1.5"
  );

  tl.to(
    squares[0],
    {
      xPercent: 100,
      duration: 2,
    },
    "<+=1.5"
  );

  tl.to(
    squares[2],
    {
      yPercent: -100,
      duration: 2,
    },
    "<+=1.5"
  );

  tl.to(
    squares[1],
    {
      xPercent: -100,
      duration: 2,
    },
    "<+=1.5"
  );

  tl.to(
    squares[0],
    {
      yPercent: 100,
      duration: 2,
    },
    "<+=1.5"
  );
  tl.to(
    squares[2],
    {
      xPercent: 0,
      duration: 2,
    },
    "<+=1.5"
  );
  tl.to(
    squares[1],
    {
      yPercent: 0,
      duration: 2,
    },
    "<+=1.5"
  );
  tl.to(
    squares[0],
    {
      xPercent: 0,
      duration: 2,
    },
    "<+=1.5"
  );
  tl.to(
    squares[2],
    {
      yPercent: 0,
      duration: 2,
    },
    "<+=1.5"
  );
  tl.to(
    squares[1],
    {
      xPercent: 0,
      duration: 2,
    },
    "<+=1.5"
  );
  tl.to(
    squares[0],
    {
      yPercent: 0,
      duration: 2,
    },
    "<+=1.5"
  );

  tl.timeScale(5);

  setTimeout(() => {
    document.body.classList.add("loader-hidden");
  });
}
