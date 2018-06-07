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
});