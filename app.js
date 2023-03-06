const express = require('express')
const { login, reg } = require('./routes/login.js')
const router = require('./routes/api/index.js')
const app = express()
const cors = require('cors')
//配置解析表单数据的中间件
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static('./dist'))
app.use('/assets', express.static('./assets'))
app.use('/login', login)
app.use('/reg', reg)
app.use('/api', router)
app.listen(5139, () => {
  console.log('监听 5 1 3 9 端口');
})  //监听端口