import React from 'react';
import Slider from 'react-slick';
import CampaignIndexItem from '../campaign/campaign_index_item';
import {selectCampaigns} from '../../reducers/selectors';

class TileSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tiles: [],
      move: false,
      direction: 'right'
    };

    this.movement = this.movement.bind(this);
  }

  componentDidMount() {
    this.props.fetchCampaigns(6).then((camps) => {
      let campaigns = Object.keys(camps.campaigns).map(key => camps.campaigns[key])
      this.setState({tiles: campaigns});
    });
    window.addEventListener('animationend', this.movement);
  }


  componentWillUnmount () {
    window.removeEventListener('animationend', this.movement);
  }

  slideLeft(){
     this.setState({dir:'right', move:'true'});
   }

   slideRight(){
     this.setState({dir:'left', move:'true'});
   }

   movement(e){
    const campaignTiles = this.state.tiles;

    if (e.animationName === 'slidermoveleft') {
      campaignTiles.push(campaignTiles.shift());
    } else if (e.animationName === 'slidermoveright') {
      campaignTiles.unshift(campaignTiles.pop());
    }
    else {
      return;
    }
    
    this.setState({move:false, tiles: campaignTiles});
  }


  render() {
    let camps = this.state.tiles;
    let slidercname = "";

    if(this.state.move){
      slidercname = (this.state.dir === 'left' ? " slider-move-left" : " slider-move-right");
    }

    if (camps[0]) {
      return(
        <div className="discover-slider">
          <div onClick={this.slideLeft.bind(this)} className="slider-left-button"><img className="arrows" src={window.back}/></div>
            <div className={"tile-slider" + slidercname}>
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
            </div>
           <div onClick={this.slideRight.bind(this)} className="slider-right-button"><img className="arrows" src={window.forward}/></div>
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
