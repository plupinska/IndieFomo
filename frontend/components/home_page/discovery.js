import React from 'react';
import TileSliderContainer from './tile_slider_container';

class Discovery extends React.Component {

  render() {

    return(
      <div className="discovery">
        <h1> Top Picks </h1>
        <TileSliderContainer/>
      </div>
    );
  }
}

export default Discovery;
