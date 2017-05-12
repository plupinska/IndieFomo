import React from 'react';
import CampaignIndexItem from '../campaign/campaign_index_item';

class CategoryShow extends React.Component {

  constructor(props) {
    super(props);
    this.makeCampaignTiles = this.makeCampaignTiles.bind(this);
    this.allOfCategory = this.allOfCategory.bind(this);
  }

  componentWillMount() {
    this.props.fetchCampaigns("all", this.props.categoryId);
  }

  makeCampaignTiles() {
    const tiles = this.props.campaigns.map((camp, idx) => {
      return(
        <li id="category-campaign-tile" key={idx}>
          <CampaignIndexItem key={idx} campaign={camp}
          fetchCampaign={this.props.fetchCampaign}/>
        </li>
      );
    });

    return tiles;
  }

  allOfCategory() {
    let catId = this.props.categoryId;
    let uniformCategory = true;

    this.props.campaigns.forEach((camp) => {
      if (camp.category_id != catId) {
        uniformCategory = false;
      }
    });

      return uniformCategory;
  }

  render() {

    let tiles = [];
    if (this.props.campaigns[0] && this.allOfCategory()) {
      tiles = this.makeCampaignTiles();
    }

    if (tiles.length > 0) {
      return(
        <div className="category-show-wrapper">
          <h1>{this.props.campaigns[0].cat}</h1>
          <div className="category-campaign-tile">
            {tiles}
          </div>
        </div>
      );
    } else {
      return(
        <h1> Waiting.. </h1>
      );
    }
  }
}

export default CategoryShow;
