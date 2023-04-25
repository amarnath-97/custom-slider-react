// eslint-disable-next-line react/prop-types
const Slide = ({ slide: { img }, handler, currImgIndex, index, totalSlides }) => {
  return (
    <div className="slide__container" onClick={() => handler(index)} style={{transform: `${totalSlides - 3 > currImgIndex  ? `translateX(-${currImgIndex * 100}%)`: `translateX(-${2.1 * 100}%)`}`}}>
      <img
        src={img}
        alt="product1"
        className={currImgIndex === index ? "active" : ""}
      />
    </div>
  );
};

export default Slide;
