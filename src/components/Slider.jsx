import { useState } from "react";
import Slide from "./Slide";
import MainSlide from "./MainSlide";
import { data } from "../../data";
import SwipeableComponent from "./SwipeableComponent";

const Slider = () => {
  const [slides, setSlides] = useState(() => ({
    currentImg: data[0].img,
    currentImgIndex: 0,
    imgData: [...data],
    totalSlides: data.length
  }));

  const onCarouselProdClick = (index) => {
    const selectedProduct = slides.imgData[index];
    setSlides({
      ...slides,
      currentImg: selectedProduct.img,
      currentImgIndex: index,
    });
  };

  const onClickPrev = () => {
    if (slides.currentImgIndex - 1 >= 0)
      setSlides({
        ...slides,
        currentImg: data[slides.currentImgIndex - 1].img,
        currentImgIndex: slides.currentImgIndex - 1,
      });
  };
  const onClickNext = () => {
    if (slides.currentImgIndex + 1 < slides.imgData.length)
      setSlides({
        ...slides,
        currentImg: data[slides.currentImgIndex + 1].img,
        currentImgIndex: slides.currentImgIndex + 1,
      });
  };
  return (
    <div id="main__container">
      <SwipeableComponent
        onSwipeLeft={onClickPrev}
        onSwipeRight={onClickNext}
        slides={slides}
      >
        <MainSlide slide={slides.currentImg} />
      </SwipeableComponent>
      <div id="all__slides__container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          id="left__arrow"
          onClick={onClickPrev}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div id="all_slides">
          <div id="slider__container">
            {slides.imgData.map((slide, index) => (
              <Slide
                key={slide.id}
                slide={slide}
                handler={onCarouselProdClick}
                index={index}
                currImgIndex={slides.currentImgIndex}
                totalSlides={slides.totalSlides}
              />
            ))}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          id="right__arrow"
          onClick={onClickNext}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Slider;
