import React from "react";
import { HeaderTop, HeaderBottom } from "../../components";

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        id: 12345678,
        favList: [12345678, 23456789, 34567890],
        cartList: [11223344, 22334455, 33445566, 44556677, 55667788]
      }
    }
  }

  render() {
    return (
      <header className="page-header">
        <HeaderTop />
        <HeaderBottom
          publicFolder={this.props.publicFolder}
          user={this.state.user}
        />
      </header>
    )
  }
}

export default Header;
