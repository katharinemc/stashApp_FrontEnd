import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {editItem, deleteItem} from '../actions/dashActions'
import {connect} from 'react-redux'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import {searchProducts } from '../actions/landingActions'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { deleteProduct, setEditing } from "../actions/dashActions";


class AccordionLibrary extends React.Component {

deleteButton (number, kind) {
    const authToken = this.props.authToken
if(this.props.kind === 'looks' || this.props.warning)
{ this.props.dispatch(deleteItem(number, kind, authToken))
} else {
this.props.dispatch(searchProducts(this.props.currentUser, number, authToken))
}

}

editButton(number, kind) {
    this.props.dispatch(setEditing(`edit${kind}`))
    this.props.dispatch(editItem(number, kind))
}
    
    render() {
        console.log('AL has warning', this.props.warning)
        const results = this.props.results.map((item, index) =>{
            let productList;
            if(this.props.kind==='looks'){
                productList = item.products.map( product => {
                    return `${product.brand} ${product.category}, ${product.name}, ${product.shade}`
               })
            }
       
           return (

                <AccordionItem key={index}>
                  <AccordionItemTitle > 
             { this.props.kind === 'products' ? `${item.brand} ${item.category} ${item.shade}` : item.name }
        
                  </AccordionItemTitle>
                  <AccordionItemBody>
                       {this.props.warning != null ? <span> {this.props.warning } <button type='button' onClick={() => this.deleteButton(`${item.id}`, `${this.props.kind}`) }>Yes, Delete</button> </span> : ''} <br />
                  { this.props.kind === 'products' ? `Full Product Name: ${item.name}` : `Items used: ${productList}` }
 

                {this.props.authenticated ? <span> <button onClick={() => this.deleteButton(`${item.id}`, `${this.props.kind}`)} >Delete</button> <button onClick={() => this.editButton(`${item.id}`, `${this.props.kind}`)}>Edit</button> </span> : ''}
                  </AccordionItemBody>
                  </AccordionItem>
 
              )

        } );        
        return (

            <Accordion>
                <h4>{this.props.kind}</h4>
 {results}
        </Accordion>
    
        )
    }
}
const mapStateToProps = (main, ownProps) => 
     ({currentUser: main.auth.currentUser,
    authToken: main.auth.authToken,
    editing: main.main.editing,
    display: main.main.display,
    loggedIn: main.main[ownProps.loggedIn],
    products: main.main.products,
    warning: main.main.warning,
     results: main.main[ownProps.kind]})
 
export default connect(mapStateToProps)(AccordionLibrary)