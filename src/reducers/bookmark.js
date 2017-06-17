/**
 * reducer for the bookmark data
 */
import * as types from '../constants';
import { createReducer } from 'redux-create-reducer';

// Default values
const initialState = {
  name: '',
  url: '',
  tags: '',
  err: ''
};

export default createReducer(initialState, {
  [types.ON_BOOKMARK_EDIT] (state, action) {
    return {
      ...state
    };
  }
});
