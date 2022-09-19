import Carousel from "react-material-ui-carousel";

const ImageSlider = ({ topImages }) => {
  return (
    <div>
      <Carousel interval={1000} animation="slide" indicators={false}>
        {topImages.map((item, i) => (
          <img
            key={i}
            src={item}
            style={{ height: 600, width: 1000, }}
            alt=""
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
