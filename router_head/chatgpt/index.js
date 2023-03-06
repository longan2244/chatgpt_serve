const { chatgptAPI } = require('./../../api/index.js')
let cont = 0
module.exports.chatgpt = async (req, res) => {
  try {
    let { message, messageId } = req.body;
    if (!message) return res.send({
      msg: '请输入内容',
      code: 0,
    })
    let { data } = await chatgptAPI(message, messageId)
    data.context = message
    console.log(cont++);
    return res.send({
      msg: '获取chatgpt成功',
      code: 1,
      data
    })
  } catch (error) {
    return res.send({
      msg: error,
      code: 0,
    })
  }
}