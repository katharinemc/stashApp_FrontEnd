import "babel-polyfill";
import React from 'react';
import {editItem, deleteItem} from '../actions/dashActions'
import {connect} from 'react-redux'
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';

import {searchProducts, setWarning} from '../actions/landingActions'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/minimal-example.css';
import './accordion.css'
import { setEditing} from "../actions/dashActions";

export class AccordionLibrary extends React.Component {
  
  cancelDeleteButton (value) {
    this.props.dispatch(setWarning(value))
  }
  deleteButton(number, kind) {
    const authToken = this.props.authToken
    if (this.props.kind === 'looks' || this.props.warning) {
      this
        .props
        .dispatch(deleteItem(number, kind, authToken))
    } else {
      this
        .props
        .dispatch(searchProducts(this.props.currentUser, number, authToken))
    }

  }

  editButton(number, kind) {
    this
      .props
      .dispatch(setEditing(`edit${kind}`))
    this
      .props
      .dispatch(editItem(number, kind))
  }

  render() {

if(this.props.results.length === 0 ) {
  return (
<div className="container">
<div className="centeredContent">
    <p>It looks like you need to add some content!  Click below to add Products and then to categorize them in a look.</p>
    </div>
    </div>
  )
}

    const results = this
      .props
      .results
      .map((item, index) => {

        let productList;
        if (this.props.kind === 'looks') {
          productList = item
            .products
            .map( (product, index) => {
              return <li key={index}>{product.brand} {product.category}, {product.name}, {product.shade}<br /></li>
            })
        }

        return (

          <AccordionItem key={index}>
            <AccordionItemTitle className="itemHeading">
              {this.props.kind === 'products'
                ? `${item.brand} ${item.category} ${item.shade}`
                : item.name} <i className="fas fa-angle-down"></i>

            </AccordionItemTitle>
            <AccordionItemBody className="accordionBody">
              {this.props.warning != null
                ? <span className="warning">
                    {this.props.warning}

                   <span className="warningButtons"> <button 
                      type='button'
                      onClick={() => this.deleteButton(`${item.id}`, `${this.props.kind}`)}>Yes, Delete</button>
                 <button type='button' onClick={() =>this.cancelDeleteButton(null)}>Cancel </button>
                 </span>
                 
                  </span>
                : ''}
              <br/> {this.props.kind === 'products'
                ? <span> {`Product Name: ${item.name}`} <br /> 
                 {`Notes: ${item.notes}`}</span> 
                :<span>Products Used: <ul className="lookList">
                  {productList}</ul>
                  {`Notes: ${item.notes}`}  </span>}
              <br/>
              {this.props.authenticated && this.props.warning === null
                ? <div className="accordionButtons">
                    <button onClick={() => this.deleteButton(`${item.id}`, `${this.props.kind}`)}>Delete</button>
                    <button onClick={() => this.editButton(`${item.id}`, `${this.props.kind}`)}>Edit</button>
                  </div>
                : ''}
            </AccordionItemBody>
          </AccordionItem>

        )

      });
    return (

      <Accordion>
        {results}
      </Accordion>

    )
  }
}
const mapStateToProps = (main, ownProps) => ({
  currentUser: main.auth.currentUser,
  authToken: main.auth.authToken,
  editing: main.main.editing,
  display: main.main.display,
  loggedIn: main.main[ownProps.loggedIn],
  products: main.main.products,
  warning: main.main.warning,
  results: main.main[ownProps.kind]
})

export default connect(mapStateToProps)(AccordionLibrary)