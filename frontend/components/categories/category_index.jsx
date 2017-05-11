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
        <li id="category" key={idx}>
          <CategoryTile key={idx} category={cat}/>
        </li>
      );
    });

    return tils;
  }

  render() {
    let catTiles;
    if (this.props.categories) {
       catTiles = this.makeCategoryTiles();
    }

    if (catTiles) {

      return(
        <div className="cat-wrap">
          <h1>Explore categories</h1>
          <div className="category-container">
            {catTiles}
          </div>
        </div>
      );
    } else {

      return(
        <h1>Waiting...</h1>
      );
    }

  }

}

export default CategoryIndex;
