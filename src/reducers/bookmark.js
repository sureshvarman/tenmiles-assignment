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
  err: '',
  success: ''
};

export default createReducer(initialState, {
  [types.ON_BOOKMARK_EDIT] (state, action) {
    let {name, url, tags} = action.payload;
    return {
      ...state,
      name,
      url,
      tags,
      success: ''
    };
  },
  [types.ON_BOOKMARK] (state, action) {
    return {
      ...state,
      success: ''
    }
  },
  [types.ON_BOOKMARK_SUCCESS] (state, action) {
    let {response} = action.payload;
    return {
      ...state,
      name: '',
      url: '',
      tags: '',
      success: 'Record, created successfully'
    }
  },
  [types.ON_BOOKMARK_FAIL] (state, action) {

    return {
      ...state,
      err: 'Oops! something went wrong',
      success: ''
    }
  }
});
