/**
 * reducers are combined into single reducers,
 * a single store approach for Redux
 */
import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import bookmark from './bookmark';

// combines reducers into a single reducer object
export default combineReducers({
  auth,
  user,
  bookmark
});
