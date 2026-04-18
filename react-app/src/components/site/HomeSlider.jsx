import { useEffect, useRef, useMemo } from "react";
import { assetUrl } from "../../utils/assetUrl";

const SLIDE_PATHS = [
  "images/SLIDE4.jpg",
  "images/SLIDE1.jpg",
  "images/SLIDE2.jpg",
  "images/SLIDE3.jpg",
  "images/SLIDE4.jpg",
  "images/SLIDE1.jpg",
];

function HomeSlider() {
  const slidesRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const indexRef = useRef(1);
  const intervalRef = useRef(null);
  const slideImages = useMemo(() => SLIDE_PATHS.map((p) => assetUrl(`/${p}`)), []);
  const totalSlides = slideImages.length;

  useEffect(() => {
    const slides = slidesRef.current;
    if (!slides) return;

    const showSlide = () => {
      slides.style.transition = "transform 0.9s ease-in-out";
      slides.style.transform = `translateX(${-indexRef.current * 100}%)`;
    };

    const nextSlide = () => {
      indexRef.current += 1;
      showSlide();
    };

    const prevSlide = () => {
      indexRef.current -= 1;
      showSlide();
    };

    const resetInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, 5000);
    };

    slides.style.transform = `translateX(${-indexRef.current * 100}%)`;

    const onTransitionEnd = () => {
      if (indexRef.current === totalSlides - 1) {
        slides.style.transition = "none";
        indexRef.current = 1;
        slides.style.transform = `translateX(${-indexRef.current * 100}%)`;
      }
      if (indexRef.current === 0) {
        slides.style.transition = "none";
        indexRef.current = totalSlides - 2;
        slides.style.transform = `translateX(${-indexRef.current * 100}%)`;
      }
    };

    slides.addEventListener("transitionend", onTransitionEnd);
    intervalRef.current = setInterval(nextSlide, 4000);

    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const onNext = () => {
      nextSlide();
      resetInterval();
    };
    const onPrev = () => {
      prevSlide();
      resetInterval();
    };
    nextBtn?.addEventListener("click", onNext);
    prevBtn?.addEventListener("click", onPrev);

    return () => {
      slides.removeEventListener("transitionend", onTransitionEnd);
      if (intervalRef.current) clearInterval(intervalRef.current);
      nextBtn?.removeEventListener("click", onNext);
      prevBtn?.removeEventListener("click", onPrev);
    };
  }, [totalSlides]);

  return (
    <div className="container mt-4 position-relative">
      <div
        id="slider"
        className="position-relative overflow-hidden rounded-3"
        style={{ height: "550px" }}
      >
        <div ref={slidesRef} className="slides">
          {slideImages.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="slide"
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
        <button
          ref={prevBtnRef}
          type="button"
          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y opacity-75 slider-btn"
          aria-label="Trước"
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button
          ref={nextBtnRef}
          type="button"
          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y opacity-75 slider-btn"
          aria-label="Sau"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default HomeSlider;
