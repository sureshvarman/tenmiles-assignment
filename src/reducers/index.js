/**
 * reducers are combined into single reducers,
 * a single store approach for Redux
 */
import { combineReducers } from 'redux';
import auth from './auth';

// combines reducers into a single reducer object
export default combineReducers({
  auth
});
