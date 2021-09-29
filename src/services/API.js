import { appConfig } from '../library/AppConfig'; // Later the base path will fetch from .env

const axios = require('axios');

// 1 - Fetch user details
export function fetchUsers(pageNo) {
  console.log('--:',pageNo);
    let _url = appConfig.base_path + 'api/?page='+pageNo+'&results=10';
    return axios({
      method: "get",
      url: _url
    });
}

// https://randomuser.me/api/?page=3&results=10&seed=abc