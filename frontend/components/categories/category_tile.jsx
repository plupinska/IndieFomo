import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class CategoryTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <div className="category-tile">
        <a>
          <img src={this.props.category.image} className="cat-image"/>
          <div className="title">{this.props.category.cat}</div>
        </a>
      </div>
    );
  }

}
export default CategoryTile;
