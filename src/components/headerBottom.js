import React from "react";

class HeaderBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  }

  render() {
    return (
      <div className="header-bottom">
        <div className="container-full">
          <div className="header-bottom__wrapper flex row">
            <div className="btn mobile-nav flex-start col-small-4"><i className="fas fa-bars"></i></div>
            <a className="header-logo flex-start col-large-2 col-small-4" href="#0">
              <img src={this.props.publicFolder + './images/kalles.svg'} alt="Kalles logo" />
            </a>
            <nav className="header-nav col-large-8">
              <ul className="header-menu flex-center">
                <li><a href="#0" className="flex-center">Demo</a></li>
                <li>
                  <a href="#0" className="flex-center">Shop
                    <span className="nav-badge badge-new">New</span>
                  </a>
                </li>
                <li><a href="#0" className="flex-center">Product</a></li>
                <li>
                  <a href="#0" className="flex-center">Sale
                    <span className="nav-badge badge-sale">Sale</span>
                  </a>
                </li>
                <li><a href="#0" className="flex-center">Portfolio</a></li>
                <li><a href="#0" className="flex-center">Lookbook</a></li>
                <li><a href="#0" className="flex-center">Blog</a></li>
              </ul>
            </nav>
            <ul className="header-action flex-end col-large-2 col-small-4">
              <li className="flex-center">
                <a href="#0">
                  <i className="fas fa-search"></i>
                </a>
              </li>
              <li className="action-user flex-center">
                <a href="#0">
                  <i className="far fa-user"></i>
                </a>
              </li>
              <li className="action-fav flex-center">
                <a href="#0">
                  <i className="far fa-heart"></i>
                  {this.state.user.favList.length === 0 ?
                    null
                    :
                    <span className="action-badge fav-badge txt-center">
                      {this.state.user.favList.length}
                    </span>
                  }
                </a>
              </li>
              <li className="flex-center">
                <a href="#0">
                  <i className="fas fa-shopping-cart"></i>
                  {this.state.user.cartList.length === 0 ?
                    null
                    :
                    <span className="action-badge cart-badge txt-center">
                      {this.state.user.cartList.length}
                    </span>
                  }
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderBottom;
