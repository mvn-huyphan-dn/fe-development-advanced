import React from 'react';

class HeaderBanner extends React.Component {
  render() {
    return (
      <div className="header-banner">
        <div className="container-full">
          <a href="#0" className="header-banner__link">
            <button className="btn btn-close-temp">
              <i className="icon icon-dash"></i>
              <span>close</span>
            </button>
            <div className="header-banner__text">
              Today deal sale off <strong>70%</strong>. End in <strong>127 days <time>08:17:45</time></strong>.
              Hurry up <i className="fas fa-arrow-right"></i>
            </div>
            <button className="btn btn-close">
              <i className="icon icon-dash"></i>
              <span>close</span>
            </button>
          </a>
        </div>
      </div>
    )
  }
}

export default HeaderBanner;
