import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { deleteProduct } from "../actions/dashActions";


class AccordionLibrary extends React.Component {

onClick (values) {
    const authToken = this.props.authToken
    this.props.dispatch(deleteProduct(values, authToken))
}
    
    render() {
        const results = this.props.results.map((item, index) =>{
            let productList;
            if(this.props.type==='looks'){
                productList = item.products.map( product => {
                    return `${product.brand} ${product.category}, ${product.name}, ${product.shade}`
               })
            }
           return (

                <AccordionItem key={index}>
                  <AccordionItemTitle > 
 { this.props.type === 'products' ? `${item.brand} ${item.category} ${item.shade}` : item.name }
        
                  </AccordionItemTitle>
                  <AccordionItemBody> 
 
                  { this.props.type === 'products' ? `Full Product Name: ${item.name}` : `Items used: ${productList}` }
 
                  <button onClick={() => this.onClick(`${item.id}`)}>Delete</button> <button>Edit</button>
                  </AccordionItemBody>
                  </AccordionItem>
 
              )

        } );        
        return (

            <Accordion>
                <h4>{this.props.type}</h4>
 {results}
        </Accordion>
    
        )
    }
}
const mapStateToProps = (main, ownProps) => ({currentUser: main.main.currentUser,
    authToken: main.auth.authToken,
    editing: main.main.editing,
     results: main.main[ownProps.type]})
 
export default connect(mapStateToProps)(AccordionLibrary)