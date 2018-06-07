import React from 'react';
import {shallow, mount} from 'enzyme';

import * as functions from './landingActions';



describe('setWarning', () => {
    it('Should return the action', () => {
        const warning = 'adgadgadgadg';warning
        const action = functions.setWarning(warning);
        expect(action.type).toEqual('SET_WARNING');
        expect(action.warning).toEqual(warning);
    });
});


describe('changeDisplay', () => {
    it('Should return the action', () => {
        const displayType = 'adgadgadgadg';
        const action = functions.changeDisplay(displayType);
        expect(action.type).toEqual('CHANGE_DISPLAY');
        expect(action.displayType).toEqual(displayType);
    });
});


describe('setFooterExpand', () => {
    it('Should return the action', () => {
        const expandStatus = 'adgadgadgadg';
        const action = functions.setFooterExpand(expandStatus);
        expect(action.type).toEqual('SET_FOOTER_EXPAND');
        expect(action.expandStatus).toEqual(expandStatus);
    });
});



describe('fetchProductsSuccess', () => {
    it('Should return the action', () => {
        const products = 'adgadgadgadg';
        const action = functions.fetchProductsSuccess(products);
        expect(action.type).toEqual('FETCH_PRODUCTS_SUCCESS');
        expect(action.products).toEqual(products);
    });
});

describe('fetchProductsRequest', () => {
    it('Should return the action', () => {
        const status = 'adgadgadgadg';
        const action = functions.fetchProductsRequest(status);
        expect(action.type).toEqual('FETCH_PRODUCTS_REQUEST');
        expect(action.status).toEqual(status);
    });
});

describe('fetchLooksRequest', () => {
    it('Should return the action', () => {
        const status = 'adgadgadgadg';
        const action = functions.fetchLooksRequest(status);
        expect(action.type).toEqual('FETCH_LOOKS_REQUEST');
        expect(action.status).toEqual(status);
    });
});

describe('fetchLooksSuccess', () => {
    it('Should return the action', () => {
        const looks = 'adgadgadgadg';
        const action = functions.fetchLooksSuccess(looks);
        expect(action.type).toEqual('FETCH_LOOKS_SUCCESS');
        expect(action.looks).toEqual(looks);
    });
});