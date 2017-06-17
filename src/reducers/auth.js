/**
 * reducers for the map to cache the city data and city list
 */
import * as types from '../constants';
import { createReducer } from 'redux-create-reducer';

// Default values
const initialState = {
  token: function() { return localStorage.getItem('myToken') },
  username: '',
  password: '',
  err: ''
};

export default createReducer(initialState, {
  [types.ON_LOGIN_FORM_TYPE] (state, action) {
    let {username, password} = action.payload;
    return {
      ...state,
      username: username,
      password: password
    };
  },
  [types.ON_LOGIN] (state, action) {
    return {
      ...state
    };
  },
  [types.ON_LOGIN_SUCCESS] (state, action) {

    let {response} = action.payload;

    window.localStorage.setItem('myToken', response);
    return {
      ...state,
      err: ''
    };
  },
  [types.ON_LOGIN_FAIL] (state, action) {
    return {
      ...state,
      err: 'Login failed'
    };
  },
});
