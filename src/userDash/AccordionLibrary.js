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


class AccordionLibrary extends React.Component {

    
    render() {
        console.log('i am an accordion', this.props.results, typeof this.props.type)
        const results = this.props.results.map((item, index) => (
               <AccordionItem key={index}>
                 <AccordionItemTitle > 
{ this.props.type === 'products' ? `${item.brand} ${item.category} ${item.name}` : item.name }
       
                 </AccordionItemTitle>
                 <AccordionItemBody> 
                 { this.props.type === 'products' ? `${item.shade}` : item.products }
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
    authToken: main.main.authToken,
    editing: main.main.editing,
     results: main.main[ownProps.type]})
 
export default connect(mapStateToProps)(AccordionLibrary)