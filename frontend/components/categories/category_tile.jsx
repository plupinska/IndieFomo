import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class CategoryTile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    const url = `/categories/${this.props.category.id}/campaigns`;
    this.props.router.push(url);
  }

  render() {
    return(
      <div className="category-tile">
        <a onClick={this.handleClick.bind(this)}>
          <img src={this.props.category.image} className="cat-image"/>
          <div className="title">{this.props.category.cat}</div>
        </a>
      </div>
    );
  }

}
export default withRouter(CategoryTile);
