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
    console.log('values come in', values)
    const authToken = this.props.authToken
    console.log('button fires',authToken)

    this.props.dispatch(deleteProduct(values, authToken))
}
    
    render() {
        console.log('i am an accordion', this.props.authToken)
        const results = this.props.results.map((item, index) => (

               <AccordionItem key={index}>
                 <AccordionItemTitle > 
{ this.props.type === 'products' ? `${item.brand} ${item.category} ${item.shade}` : item.name }
       
                 </AccordionItemTitle>
                 <AccordionItemBody> 
                 { this.props.type === 'products' ? `Full Product Name: ${item.name}` : `Items used: ${item.products}` }

                 <button onClick={() => this.onClick(`${item.id}`)}>Delete</button> <button>Edit</button>
                 </AccordionItemBody>
                 </AccordionItem>

             ));

console.log(results)
        
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