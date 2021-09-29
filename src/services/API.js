import { appConfig } from '../library/AppConfig'; // Later the base path will fetch from .env

const axios = require('axios');

// 1 - Fetch user details
export function fetchUsers() {
    let _url = appConfig.base_path + 'api/?results=100';
    return axios({
      method: "get",
      url: _url
    });
}