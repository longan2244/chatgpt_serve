const axios = require('axios');

module.exports.chatgptAPI = (m) => {
  return axios({
    method: 'get',
    url: `https://chatgpt.quxuetrip.com/api/chatgpt/get?stream=false`,
    headers: {
      m,
      referer: 'https://chatgpt.quxuetrip.com/'
    }
  })
}