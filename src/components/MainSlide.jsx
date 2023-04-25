// eslint-disable-next-line react/prop-types
const MainSlide = ({ slides, currImgIndex }) => {
  return (
    <div
      id="main__slide"
      style={{ transform: `translateX(-${currImgIndex * 100}%)` }}
    >
      {
        // eslint-disable-next-line react/prop-types
        slides.imgData.map((slide) => (
          <img src={slide.img} key={slide.id} alt="product" />
        ))
      }
    </div>
  );
};

export default MainSlide;
