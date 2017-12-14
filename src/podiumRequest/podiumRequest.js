'use strict'
const axios = require('axios')
const convertTime = require('./../utilities/convertTime')
const INVALID_TOKEN = 'INVALID_TOKEN'
const UNACCEPTED_TERMS = 'UNACCEPTED_TERMS'

module.exports = class PodiumRequest {
  constructor (settings) {
    this.settings = settings
  }

  _makeUrl (path) {
    return this.settings.endpoint + path
  }

  _makeHeaders () {
    if (this.settings.token) {
      return {
        'Authentication': this.settings.token
      }
    }
  }

  _checkError (error) {
    if (error.response.status === 400 && error.response.data.apiCode === INVALID_TOKEN) {
      this.settings.token = undefined
    }

    if (error.response.status === 403 && error.response.data.code === UNACCEPTED_TERMS) {
      console.log(UNACCEPTED_TERMS)
    }
    return error.response
  }

  GetRequest (resource) {
    return axios({
      method: 'get',
      transformResponse: function (data) {
        return convertTime.APIToUTC(JSON.parse(data))
      },
      url: this._makeUrl(resource),
      headers: this._makeHeaders()
    }).then(function (response) {
      return response.data
    }).catch(this._checkError)
  }

  PostRequest (resource, params) {
    // TODO: Don't request if no token
    return axios({
      method: 'post',
      // transformRequest: [function (data, headers) {
      //   return convertTime.UTCtoAPI(data)
      // }],
      transformResponse: function (data) {
        return convertTime.APIToUTC(JSON.parse(data))
      },
      url: this._makeUrl(resource),
      data: params,
      headers: this._makeHeaders()
    }).then(function (response) {
      return response.data
    }).catch(this._checkError)
  }

  AuthenticateRequest (request, params) {
    return this.PostRequest(request, params)
      .then(response => {
        this.settings.token = response.token
      })
      .catch(this._checkError)
  }
}
