import React from 'react';
import Slider from 'react-slick';
import CampaignIndexItem from '../campaign/campaign_index_item';

class TileSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tiles: [],
      move: false,
      direction: 'right'
    };
  }

  componentDidMount() {
    this.props.fetchCampaigns(4);
    
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true ,
      draggable: false
    };

    let camps = this.props.campaigns;

    if (camps[0]) {
      return(
        <div className="discover-slider">
          <Slider {...settings}>
               <div key={camps[0].id} className="discover-tile">
               <CampaignIndexItem  fetchCampaign={this.props.fetchCampaign} campaign={camps[0]}/>
              </div>

              <div key={camps[1].id} className="discover-tile">
              <CampaignIndexItem  fetchCampaign={this.props.fetchCampaign} campaign={camps[1]}/>
             </div>

             <div key={camps[2].id} className="discover-tile">
               <CampaignIndexItem  fetchCampaign={this.props.fetchCampaign} campaign={camps[2]}/>
              </div>

              <div key={camps[3].id}  className="discover-tile">
                <CampaignIndexItem  fetchCampaign={this.props.fetchCampaign} campaign={camps[3]}/>
               </div>
         </Slider>
        </div>
      );
    } else {
      return(
        <div>Waiting..</div>
      );
    }
  }
}

export default TileSlider;
