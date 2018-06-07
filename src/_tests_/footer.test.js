import React from 'react';
import {shallow, mount} from 'enzyme';

import {changeDisplay} from '../actions/landingActions'
import {Footer} from '../landingPage/Footer';

describe('<Footer/>', () => {

   it('should work', () => {
    expect (true).toEqual(true)
   })
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });

    it('Should fire changeDisplay when dispatched', () => {
        const callback = jest.fn();
        const wrapper = mount(<Footer dispatch={callback} />)
        const value = 'login'
        wrapper.instance().changeDisplay(value)
        expect(callback).toHaveBeenCalledWith(changeDisplay(value))
    })
    it('Should fire changeDisplay when dispatched', () => {
        const callback = jest.fn();
        const wrapper = mount(<Footer dispatch={callback} />)
        const value = 'login'
        wrapper.instance().changeDisplay(value)
        expect(callback).toHaveBeenCalledWith(changeDisplay(value))
    })


    it ('something about a button' , () => {
        const callback = jest.fn();
        const wrapper = mount(<Footer />)

        //KRM - the below does not work is there way to check for HTML elements?
        expect(wrapper.find('button[name="barfoo"]' ))
    })
});