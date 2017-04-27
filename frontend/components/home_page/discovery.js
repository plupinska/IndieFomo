import React from 'react';
import TileSliderContainer from './tile_slider_container';
import { Link } from 'react-router';
class Discovery extends React.Component {

  render() {

    return(
      <div className="discovery-2">
        <div className="explore-nav">
          <h1> Top Picks </h1>
          <div className="campaigns-link">
            <Link to="campaigns" className="explore">See All</Link>
          </div>
        </div>
        <TileSliderContainer/>
      </div>
    );
  }
}

export default Discovery;
