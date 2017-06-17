/**
 * list of api function which will return the promise
 * for simplicity splitted into two different function, incase itwill be same function
 * with different query parameters
 */
import request from 'request-promise';

const utils = {
  /**
   * function to handle the call to get the city lists
   * @param {Object.username} form.username
   * @param {Object.password} form.password
   * @return {Promise}
   */
  login: (form) => {
    return request({
      url: `http://localhost:3000/api/auth/login`,
      method: 'post',
      json: true,
      body: form
    });
  },
  /**
   * function to handle the call to get the city lists
   * @param {Object.username} form.username
   * @param {Object.password} form.password
   * @return {Promise}
   */
  signup: (form) => {
    return request({
      url: `http://localhost:3000/api/user`,
      method: 'post',
      json: true,
      body: form
    });
  },
  /**
   * function to get login to get the token
   * @param {BookMark.name} bookmark.name - name
   * @param {BookMark.url} bookmark.url - url
   * @param {BookMark.tags} bookmark.tags - tags
   * @param {String} token - valid user token
   * @return {Promise}
   */
  addBookmark: (bookmark, token) => {
    console.log('===>', bookmark)
    return request({
      url: `http://localhost:3000/api/bookmark`,
      method: 'post',
      headers: {
        'x-access-token': token
      },
      json: true,
      body: bookmark
    });
  },

  /**
   * function to get login to get the token
   * @param {String} tags - types tag
   * @param {String} token - valid user token
   * @return {Promise}
   */
  searchBookmark: (token, limit, offset, tags) => {
    return request({
      url: `http://localhost:3000/api/bookmark`,
      method: 'get',
      json: true,
      qs: {
        tags: tags,
        offset: offset,
        limit: limit
      }
    });
  }
}
export default utils;
