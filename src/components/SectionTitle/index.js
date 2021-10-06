import React from "react";

class SectionTitle extends React.Component {
  render() {
    return (
      <>
        <h2 className="section-title flex-center">
          <span className="section-title__span">{this.props.title}</span>
        </h2>
       {this.props.description !== 'empty'
        ? <p className="section-description txt-center">{this.props.description}</p>
        : null
       }
      </>
    )
  }

  static defaultProps = {
    description: 'empty'
  }
}

export default SectionTitle;
