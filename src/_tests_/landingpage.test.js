import React from 'react';
import {shallow} from 'enzyme';

import {LandingPage} from '../landingPage/LandingPage';

describe('<LandingPage/>', () => {

   it('should work', () => {
    expect (true).toEqual(true)
   })
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });

    it('has appropriate LandingPage class', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.hasClass('landingPage')).toEqual(true);
    });
});