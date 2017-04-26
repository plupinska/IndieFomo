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
//
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 5,
//     };
//
//   if (this.props.tiles) {
//     return(
//       <div className="discover-slider">
//         <Slider {...settings}>
//           <div className="slide" ><h3 className="slider-img" >
//           <CampaignIndexItem  campaign={}/>
//           </h3></div>
//
//           <div className="slide" ><h3 className="slider-img" >
//           <CampaignIndexItem />
//           </h3></div>
//
//           <div className="slide" ><h3 className="slider-img" ><CampaignIndexItem />
//           </h3></div>
//
//           <div className="slide" ><h3 className="slider-img" ><CampaignIndexItem />
//           </h3></div>
//
//         </Slider>
//       </div>
//     );
//   } else {
//     return(
//       <h1>Waiting.. </h1>
//     );
//   }
// }
//
// export default TileSlider;
