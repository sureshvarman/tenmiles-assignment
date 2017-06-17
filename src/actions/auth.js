import * as types from '../constants';
import api from '../api';

/**
 * function to get login to get the token
 * @param {Object.username} form.username - typeahead typed data
 * @param {Object.username} form.password - typeahead typed data
 */
export function login(form) {
  return {
    types: [types.ON_LOGIN, types.ON_LOGIN_SUCCESS, types.ON_LOGIN_FAIL],
    payload: {
      response: api.login(form)
    }
  }
}

/**
 * function to edit the login details
 * @param {Object.username} form.username - typeahead typed data
 * @param {Object.username} form.password - typeahead typed data
 */
export function onEdit(form) {
  return {
    type: types.ON_LOGIN_FORM_TYPE,
    payload: {
      ...form
    }
  }
}

export function redirectToBookmark() {
  return {
    type: types.DUMMY,
    meta: {
      transition: () => ({
        path : '/bookmark'
      })
    }
  }
}
