import React from "react";

class PaymentItem extends React.Component {
  render() {
    return (
      <li className="payment-item">
        <a href={this.props.e.url}>
          <i className={this.props.e.icon}></i>
        </a>
      </li>
    )
  }
}

export default PaymentItem;
