import React from 'react';
import {shallow, mount} from 'enzyme';

import * as functions from './dashActions';



describe('updateProductSuccess', () => {
    it('Should return the action', () => {
        const values = 'adgadgadgadg';
        const action = functions.updateProductSuccess(values);
        expect(action.type).toEqual('UPDATE_PRODUCT_SUCCESS');
        expect(action.values).toEqual(values);
    });    
});


describe('updateLookSuccess', () => {
    it('Should return the action', () => {
        const values = 'adgadgadgadg';
        const action = functions.updateLookSuccess(values);
        expect(action.type).toEqual('UPDATE_LOOK_SUCCESS');
        expect(action.values).toEqual(values);
    });    
});

describe('editItem', () => {
    it('Should return the action', () => {
        const number = 'foobar';
        const kind =  'barfoo'
        const action = functions.editItem(number, kind);
        expect(action.type).toEqual('EDIT_ITEM');
        expect(action.number).toEqual(number);
        expect(action.kind).toEqual(kind);

    });    
});

describe('itemDeleteSuccess', () => {
    it('Should return the action', () => {
        const number = 'foobar';
        const kind =  'barfoo'
        const action = functions.itemDeleteSuccess(number, kind);
        expect(action.type).toEqual('ITEM_DELETE_SUCCESS');
        expect(action.number).toEqual(number);
        expect(action.kind).toEqual(kind);

    });    
});


describe('addToLookSearch', () => {
    it('Should return the action', () => {
        const values = 'adgadgadgadg';
        const action = functions.addToLookSearch(values);
        expect(action.type).toEqual('ADD_TO_LOOK_SEARCH');
        expect(action.values).toEqual(values);
    });    
});

describe('newProductSuccess', () => {
    it('Should return the action', () => {
        const values = 'adgadgadgadg';
        const action = functions.newProductSuccess(values);
        expect(action.type).toEqual('NEW_PRODUCT_SUCCESS');
        expect(action.values).toEqual(values);
    });    
});
describe('newLookSuccess', () => {
    it('Should return the action', () => {
        const values = 'adgadgadgadg';
        const action = functions.newLookSuccess(values);
        expect(action.type).toEqual('NEW_LOOK_SUCCESS');
        expect(action.values).toEqual(values);
    });    
});
describe('setSearch', () => {
    it('Should return the action', () => {
        const values = 'adgadgadgadg';
        const action = functions.setSearch(values);
        expect(action.type).toEqual('SET_SEARCH');
        expect(action.values).toEqual(values);
    });    
});

describe('setRequestedUser', () => {
    it('Should return the action', () => {
        const user = 'adgadgadgadg';
        const action = functions.setRequestedUser(user);
        expect(action.type).toEqual('SET_REQUESTED_USER');
        expect(action.user).toEqual(user);
    });    
});

describe('showDetail', () => {
    it('Should return the action', () => {
        const key = 'adgadgadgadg';
        const action = functions.showDetail(key);
        expect(action.type).toEqual('SHOW_DETAIL');
        expect(action.key).toEqual(key);
    });    
});