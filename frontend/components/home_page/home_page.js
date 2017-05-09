import React from 'react';
import { Link, withRouter } from 'react-router';
import Carousel from './carousel_component';
import Discovery from './discovery';
import CategoryContainer from '../categories/category_container';


class HomePage extends React.Component {

  render() {
    return(
      <div className="home-page">
        <div className="carousel">
          <Carousel/>
        </div>

        <div className="discovery">
          <Discovery/>
        </div>

        <div className="categories">
          <CategoryContainer/>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
