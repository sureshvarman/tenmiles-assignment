import * as types from '../constants';
import api from '../api';

/**
 * function to get login to get the token
 * @param {BookMark.name} bookmark.name - name
 * @param {BookMark.url} bookmark.url - url
 * @param {BookMark.tags} bookmark.tags - tags
 * @param {String} token - valid user token
 */
export function add(bookmark, token) {
  return {
    types: [types.ON_BOOKMARK, types.ON_BOOKMARK_SUCCESS, types.ON_BOOKMARK_FAIL],
    payload: {
      response: api.addBookmark(bookmark, token)
    }
  }
}

/**
 * function to get login to get the token
 * @param {String} tags - types tag
 * @param {Number} limit - types limit
 * @param {Number} offset - types offset
 * @param {String} token - valid user token
 */
export function search(tags, limit, offset, token) {
  return {
    types: [types.ON_BOOKMARK_SEARCH, types.ON_BOOKMARK_SEARCH_SUCCESS, types.ON_BOOKMARK_SEARCH_FAIL],
    payload: {
      response: api.searchBookmark(tags, limit, offset, token)
    }
  }
}

/**
 * function to get login to get the token
 * @param {BookMark} form - types tag
 */
export function onEdit(form) {
  return {
    type: types.ON_BOOKMARK_EDIT,
    payload: {
      ...form
    }
  }
}
