// import React from 'react';
// import Slider from 'react-slick';
// import { fetchCampaigns, fetchCampaign } from '../../actions/campaign_actions';
// import CampaignIndexItem from '../campaign/campaign_index_item';
//
// class TileSlider extends React.Component {
//
//   constructor(props) {
//       
//     super(props);
//   }
//
//   componentDidMount() {
//       
//     this.props.fetchCampaigns();
//   }
//
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };
//     // Why is this a problem.
//     const camps = this.props.tiles.campaigns.map(camp => {
//         
//       return (
//         <CampaignIndexItem campaign={camp} fetchCampaign={this.props.fetchCampaign}/>
//       )
//     }
//
//     // Why is this a problem
//     return (
//       <Slider {...settings}>
//         <div className="slide" ><h3 className="slider-img" >{camps[0]}</h3></div>
//         <div className="slide" ><h3 className="slider-img" >{camps[1]}</h3></div>
//         <div className="slide" ><h3 className="slider-img" >{camps[2]}</h3></div>
//         <div className="slide" ><h3 className="slider-img" >{camps[3]}</h3></div>
//       </Slider>
//     );
//   }
//
// }
//
// export default TileSlider;
