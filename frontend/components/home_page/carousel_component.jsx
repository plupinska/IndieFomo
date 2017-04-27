import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        <div className="slide" ><h3 className="slider-img" ><img className="carousel-img" src={window.image1} /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img className="carousel-img" src={window.image2} /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img className="carousel-img" src={window.image3} /></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img className="carousel-img" src={window.image4} /></h3></div>
      </Slider>
    );
  }
}

export default Carousel;
