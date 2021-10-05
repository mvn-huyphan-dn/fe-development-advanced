import React from "react";

export default class FooterTopCol2 extends React.Component {
  render() {
    return (
      <div className="footer-top-col col-2 col-large-2 col-medium-6 col-small-12">
        <h3 className="footer-title">{this.props.data.title}</h3>
        <ul className="footer-top-link-list">
          {this.props.data.item.map((e) => {
            return (
              <li key={e.id}>
                <a href={e.url}>{e.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
