import React, { Component } from 'react';
import CartItem from './components/CartItem.js';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Prada Shoes',
    price: 570
  },
  {
    id: 2,
    name: 'Rolex Watch',
    price: 649
  },
  {
    id: 3,
    name: 'Paper clips',
    price: 0.1
  }
];

class App extends Component {
  incrementQuantity(productId) {
    console.log(productId);
  }

  render() {
    return (
      <div className="App">
        <ul>
          {products.map(product => (
            <CartItem
              key={product.id}
              name={product.name}
              price={product.price}
              onPlusClick={() => this.incrementQuantity(product.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
