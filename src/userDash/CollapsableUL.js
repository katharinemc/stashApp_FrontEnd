import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
import {fetchProducts} from '../actions/landingActions'

export class CollapsableUL extends React.Component {

  render() {
    console.log('ulprops', this.props)
    
    const products = this
      .props
      .products
      .map((product, index) => (
        <li key={index}>
          {product.brand}
          {product.category}
          {product.shade}
        </li>
      ));

    return (
      <div className="collapsable">

        <ul>
          {products}

        </ul>
      </div>

    );
  }
}

const mapStateToProps = main => ({currentUser: main.main.currentUser, authToken: main.main.authToken, products: main.main.products})

export default connect(mapStateToProps)(CollapsableUL)