// src/components/Title.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import './CheckoutButton.css'

class Title extends PureComponent {
  static propTypes = {
    //eslint-disable-line no-undef
    content: PropTypes.string.isRequired
  };

  render() {
    return (
      <button className="CheckoutButton">
        {'this is the checkout button'}
      </button>
    );
  }
}

export default CheckoutButton;
