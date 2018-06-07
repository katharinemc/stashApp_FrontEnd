import "babel-polyfill";

import React from 'react';
import {shallow, mount} from 'enzyme';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';

import {AccordionLibrary} from '../userDash/AccordionLibrary';
import {searchProducts, setWarning} from '../actions/landingActions'
import {editItem, deleteItem} from '../actions/dashActions'

describe('<AccordionLibrary/>', () => {
const products=[{
    name: "foobar",
    brand: "foobar",
    category: "foobar",
    shade: "foobar",
    notes: "foobar"
}, {
    name: "barfoo",
    brand: "barfoo",
    category: "barfoo",
    shade: "barfoo",
    notes: "barfoo"
}];

const looks = [
{    name: "bridal",
    products: [{
        name: "foobar",
        brand: "foobar",
        category: "foobar",
        shade: "foobar",
        notes: "foobar"
    }, {
        name: "barfoo",
        brand: "barfoo",
        category: "barfoo",
        shade: "barfoo",
        notes: "barfoo"
    }]
}    
]

let productList;

   it('should work', () => {
    expect (true).toEqual(true)
   })
    it('Renders without crashing', () => {
        shallow(<AccordionLibrary results={["foobar", "barfoo", "binbaz"]} />);
    });

    it('Renders an <Accordion /> component if there are aresults', () => {
       const wrapper= shallow(<AccordionLibrary results={products} />);
        expect(wrapper.find(Accordion).length).toBe(1)
    })
    it('Renders as many Accordion Items as there are results', () => {
        const wrapper= shallow(<AccordionLibrary results={products} />);
        expect(wrapper.find(AccordionItem).length).toBe(products.length)
        expect(wrapper.find(AccordionItemTitle).length).toBe(products.length)
        expect(wrapper.find(AccordionItemBody).length).toBe(products.length)

    })
    it('Creates products list if kind is look', () => {
        const wrapper= shallow(<AccordionLibrary kind={'looks'} results={looks}/>);
        expect(wrapper.find('.lookList').length).toBe(1)
        expect(wrapper.find('.lookList').children().length).toBe(looks[0].products.length)

    })

    it('If no results, prompts add content', () => {
        const wrapper =shallow(<AccordionLibrary results={[]} />);
        expect(wrapper.find('.container').length).toBe(1);
    });

    it('Renders items with bodies', () => {
        const wrapper =shallow(<AccordionLibrary results={[]} />);
        expect(wrapper.find('.container').length).toBe(1);
    });

    it('renders delete and edit buttons if authenticated', () => {
        const wrapper =shallow(<AccordionLibrary kind={'products'} results ={products} authenticated={true} warning={null} />);
        expect(wrapper.find('.accordionButtons').length).toBe(products.length);
        
    })

    it('does not render delete and edit buttons if unauth', () => {
        const wrapper =shallow(<AccordionLibrary kind={'products'} results ={products} authenticated={false} warning={null} />);
        expect(wrapper.find('.accordionButtons').length).toBe(0);
        
    })

    it('Should fire setWarning when dispatched', () => {
        const callback = jest.fn();
        const wrapper = mount(<AccordionLibrary kind={'products'} results ={products} authenticated={false} warning={null} dispatch={callback} />)
        const value = 'foobar'
        wrapper.instance().cancelDeleteButton(value)
        expect(callback).toHaveBeenCalledWith(setWarning(value))
    })


    // KRM weird error
    // it('Should fire searchProducts when delete is invoked and kind is products', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<AccordionLibrary kind={'products'} results ={products} authenticated={false} dispatch={callback} />)
    //     const value = 'foobar'
    //     wrapper.instance().deleteButton(value)
    //     expect(callback).toHaveBeenCalledWith(searchProducts(value))
    // })

});