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
        <div className="slide" ><h3 className="slider-img" ><img src="https://i.ytimg.com/vi/6gOQwRVw9zg/maxresdefault.jpg"/></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="https://i.ytimg.com/vi/6gOQwRVw9zg/maxresdefault.jpg"/></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="https://i.ytimg.com/vi/6gOQwRVw9zg/maxresdefault.jpg"/></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="https://i.ytimg.com/vi/6gOQwRVw9zg/maxresdefault.jpg"/></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="https://i.ytimg.com/vi/6gOQwRVw9zg/maxresdefault.jpg"/></h3></div>
        <div className="slide" ><h3 className="slider-img" ><img src="https://i.ytimg.com/vi/6gOQwRVw9zg/maxresdefault.jpg"/></h3></div>
      </Slider>
    );
  }
}

export default Carousel;
