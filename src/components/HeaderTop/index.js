import React from "react";

class HeaderTop extends React.Component {
  render() {
    return (
      <div className="header-top">
        <div className="container-full flex txt-center row">
          <ul className="contact-info flex col-large-4 col-small-12">
            <li className="flex-start">
              <i className="fas fa-phone-alt"></i>
              +01 23456789
            </li>
            <li className="flex-start">
              <i className="far fa-envelope"></i>
              <a href="#0" className="header-top__link">Kalles@domain.com</a>
            </li>
          </ul>
          <div className="header-top__text col-large-4 col-small-12">
            Summer sale discount off <span className="header-top__discount text-red">50%</span>!
            <a href="#0"> Shop now</a>
          </div>
          {/* <!-- autodropdown not select element --> */}
          <ul className="list-currency col-large-4 col-small-12">
            {/* <!-- <li><a href="#0"><i className="flag flag-aud">AUD</i></a></li>
                    <li><a href="#0"><i className="flag flag-cad">CAD</i></a></li>
                    <li><a href="#0"><i className="flag flag-dkk">DKK</i></a></li>
                    <li><a href="#0"><i className="flag flag-eur">EUR</i></a></li>
                    <li><a href="#0"><i className="flag flag-gbp">GBP</i></a></li>
                    <li><a href="#0"><i className="flag flag-hkd">HKD</i></a></li>
                    <li><a href="#0"><i className="flag flag-jpy">JPY</i></a></li>
                    <li><a href="#0"><i className="flag flag-nzd">NZD</i></a></li>
                    <li><a href="#0"><i className="flag flag-sgd">SGD</i></a></li>
                    <li><a href="#0"><i className="flag flag-usd">USD</i></a></li> --> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderTop;
