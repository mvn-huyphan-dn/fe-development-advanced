import React from "react";

export default class GalleryItem extends React.Component {
  render() {
    return (
      <li key={this.props.e.id} className="gallery-item col-3 col-large-3 col-medium-4 col-small-6">
        <div className="div-image-container">
          <img src={this.props.e.src} alt="gallery item img" />
        </div>
        {this.props.e.position.map((a, index) => {
          let tempClass = `btn btn-circle ${a}`
          return (
            <span key={index} className={tempClass}>{index + 1}</span>
          )
        })}
      </li>
    )
  }
}
