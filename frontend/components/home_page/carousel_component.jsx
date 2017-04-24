import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        <div className="slide" ><h3 className="slider-img" ><img src="http://lorempixel.com/400/250/technics/1" /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="http://lorempixel.com/400/250/technics/7" /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="http://lorempixel.com/400/250/technics/8" /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="http://lorempixel.com/400/250/technics/3" /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="http://lorempixel.com/400/250/technics/4" /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="http://lorempixel.com/400/250/technics/5" /></h3></div>
      </Slider>
    );
  }
}

export default Carousel;
