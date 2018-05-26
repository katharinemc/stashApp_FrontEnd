import React from 'react';
import {connect} from 'react-redux'
import './collapsableul.css'
import {fetchProducts} from '../actions/landingActions'



export  class CollapsableUL extends React.Component {


componentWillMount() {
  this.props.dispatch(fetchProducts())
}

  render()  {
    console.log(this.props.products[0])

    const products = this.props.products.map((product, index) => (
      <li key={index}>
       {product.brand} {product.category} {product.shade}
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

const mapStateToProps = state => ({
  expandFooter: state.expandFooter,
  products: state.products
})

export default connect (mapStateToProps)(CollapsableUL)