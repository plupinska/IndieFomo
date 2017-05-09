import React from 'react';
import CategoryTile from './category_tile';

class CategoryIndex extends React.Component {

  constructor(props) {
    super(props);
    this.makeCategoryTiles = this.makeCategoryTiles.bind(this);
  }

  componentWillMount() {
    this.props.getCategories();
  }

  makeCategoryTiles() {
     const tils = this.props.categories.map((cat, idx) => {
      return(
        <li id="category" idx={idx}>
          <CategoryTile idx={idx} category={cat}/>
        </li>
      );
    });
    debugger
    return tils;
  }

  render() {
    let catTiles;
    if (this.props.categories) {
       catTiles = this.makeCategoryTiles();
    }
    debugger
    if (catTiles) {
      debugger
      return(
        <div className="category-container">
        {catTiles}
        </div>
      );
    } else {
      debugger
      return(
        <h1>Waiting...</h1>
      );
    }

  }

}

export default CategoryIndex;
