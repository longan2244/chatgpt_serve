const axios = require('axios');

module.exports.chatgptAPI = (message, messageId) => {
  return axios({
    method: 'get',
    url: `https://chatgpt.quxuetrip.com/api/chatgpt/get?message=${message}&messageId=${messageId}`,
  })
}

