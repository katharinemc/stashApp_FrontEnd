import React from 'react';
import {shallow, mount} from 'enzyme';
import {fetchProducts, changeDisplay, fetchLooks, CHANGE_DISPLAY} from '../actions/landingActions'

import {ReduxLogin} from '../landingPage/ReduxLogin'
import {HeroText} from '../landingPage/HeroText';

describe('<HeroText/>', () => {

   it('should work', () => {
    expect (true).toEqual(true)
   })
    it('Renders without crashing', () => {
        shallow(<HeroText />);
    });

    // it('dispatches changeDisplay from showMore ', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<HeroText dispatch={callback} />)
    //     wrapper.instance().changeDisplay(value)
    //     expect(callback).toHaveBeenCalledWith(changeDisplay(value))
    // })

    it('Should render the landing1 component when display is landing', () => {
        const wrapper = shallow( <HeroText display="landing" />);
    expect(wrapper.contains(<h1>Stash App</h1>)).toEqual(true);
    })

    it('Should render the landing 2 component when display is landing2', () => {
        const wrapper = shallow( <HeroText display="landing2" />);
    expect(wrapper.contains(<p>Stash App lets you catalog your makeup collection so that it can be searched
    by brand, category, color, and product name. Include notes about the formulation
    or your likelihood to rebuy for easy future reference.</p>)).toEqual(true);

    })

})
