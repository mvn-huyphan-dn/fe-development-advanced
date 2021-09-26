import React from "react";

class CategoryItem extends React.Component {
  render() {
    return (
      <li key={this.props.e.id} className="category-item col-3 col-medium-3 col-small-12">
        <a href="#0" className="category-img">
          <div className="div-image-container">
            <img key={this.props.e.name} src={this.props.e.src} alt={this.props.e.altText} />
          </div>
        </a>
        <a href="#0" className="category-name btn btn-round">Footwear</a>
      </li>
    )
  }
}

export default CategoryItem;
