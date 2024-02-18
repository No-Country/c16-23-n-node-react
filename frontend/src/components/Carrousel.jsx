import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="w-64 h-40 flex items-center">
          <img src={image} alt={`imagen-${index}`} className="rounded-md" />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel