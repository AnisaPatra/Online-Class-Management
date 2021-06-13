import React from 'react';
import authReducer from './authentication_reducer';
import { combineReducers } from 'redux';
/**
* @author
* @function rootReducer
**/

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;