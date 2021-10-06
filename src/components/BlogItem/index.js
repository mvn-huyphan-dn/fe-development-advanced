import React from "react";

class BlogItem extends React.Component {
  render() {
    return (
      <li key={this.props.e.id} className="blog-item col-4 col-medium-4 col-small-12">
      <a href="#0" className="blog-img">
        <div className="div-image-container">
          <img src={this.props.e.imgUrl} alt={this.props.e.altText} />
        </div>
      </a>
      <div className="blog-content">
        <h4><a href="#0" className="blog-title">{this.props.e.title}</a></h4>
        <p className="blog-info">
          By <span className="blog-author text-bold">{this.props.e.author}</span> on <span className="blog-time text-bold">{this.props.e.time}</span>
        </p>
        <p className="blog-description">{this.props.e.description}</p>
      </div>
    </li>
    )
  }
}

export default BlogItem;
