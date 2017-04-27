import React from 'react';
import TileSliderContainer from './tile_slider_container';
import { Link } from 'react-router';
class Discovery extends React.Component {

  render() {

    return(
      <div className="discovery-2">
        <div className="explore-nav">
          <h1> Top Picks </h1>
          <Link className="explore" to="/campaigns">Explore</Link>
        </div>
        <TileSliderContainer/>
      </div>
    );
  }
}

export default Discovery;
