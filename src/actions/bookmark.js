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
      response: api.addBookmark(form, token)
    }
  }
}

/**
 * function to get login to get the token
 * @param {String} tags - types tag
 * @param {String} token - valid user token
 */
export function search(tags, token) {
  return {
    types: [types.ON_BOOKMARK_SEARCH, types.ON_BOOKMARK_SEARCH_SUCCESS, types.ON_BOOKMARK_SEARCH_FAIL],
    payload: {
      response: api.searchBookmark(tags, token)
    }
  }
}
