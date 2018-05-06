// src/components/CartItem.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired
};

class CartItem extends PureComponent {
  render() {
    return (
      <li className="CartItem">
        Name: {this.props.name} Price: {this.props.price}
        <button onClick={this.props.onPlusClick}> + </button>
      </li>
    );
  }
}

CartItem.propTypes = propTypes;

export default CartItem;
