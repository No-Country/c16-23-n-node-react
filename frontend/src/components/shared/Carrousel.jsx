import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div
          key={index}
          className="flex h-40 w-64 items-center 2xl:h-96 2xl:w-full"
        >
          <img
            src={image}
            alt={`imagen-${index}`}
            className="rounded-md 2xl:bg-cover 2xl:bg-center"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
