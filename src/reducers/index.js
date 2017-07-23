"use strict"

import {combineReducers} from 'redux';

import {rpsReducers} from './rpsReducers';


export default combineReducers({
    rps: rpsReducers,
})