import React from "react";

class SocialItem extends React.Component {
  render() {
    return (
      <li className="social-item">
        <a href={this.props.e.url}>
          <i className={this.props.e.icon}></i>
        </a>
      </li>
    )
  }
}

export default SocialItem;
