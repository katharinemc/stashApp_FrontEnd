import React from 'react';
import {shallow, mount} from 'enzyme';

import * as functions from './auth';



describe('setAuthToken', () => {
    it('Should return the action', () => {
        const token = 'adgadgadgadg';
        const action = functions.setAuthToken(token);
        expect(action.type).toEqual('SET_AUTH_TOKEN');
        expect(action.authToken).toEqual(token);
    });    
});

describe('newUser', () => {
    it('Should return the action', () => {
        const status = true;
        const action = functions.newUser(status);
        expect(action.type).toEqual('NEW_USER');
        expect(action.status).toEqual(status);
    });    
});

describe('caughtError', () => {
    it('Should return the action', () => {
        const error = 'barfoo';
        const action = functions.caughtError(error);
        expect(action.type).toEqual('CAUGHT_ERROR');
        expect(action.error).toEqual(error);
    });    
});

describe('authSuccess', () => {
    it('Should return the action', () => {
        const currentUser = 'barfoo';
        const action = functions.authSuccess(currentUser);
        expect(action.type).toEqual('AUTH_SUCCESS');
        expect(action.currentUser).toEqual(currentUser);
    });    
});

describe('submitRegistration', () => {
    it('Should return the action', () => {
        const newUserObj = 'barfoo';
        const action = functions.submitRegistration(newUserObj);
        expect(action.type).toEqual('SUBMIT_REGISTRATION');
        expect(action.newUserObj).toEqual(newUserObj);
    });    
});

describe('submitLogin', () => {
    it('Should return the action', () => {
        const loginObj = 'barfoo';
        const action = functions.submitLogin(loginObj);
        expect(action.type).toEqual('SUBMIT_LOGIN');
        expect(action.loginObj).toEqual(loginObj);
    });    
});

describe('logOutStore', () => {
    it('Should return the action', () => {
        const action = functions.logOutStore();
        expect(action.type).toEqual('LOG_OUT_STORE');
    });    
});

