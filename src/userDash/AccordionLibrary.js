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
        return (

            <Accordion>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Simple title</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Body content</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Complex title</h3>
                    <div>With a bit of description</div>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Body content</p>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
    
        )
    }
}

export default connect()(AccordionLibrary)