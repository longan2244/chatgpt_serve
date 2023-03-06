const express = require('express')
const router =  express.Router()
const { chatgpt } = require('./../../router_head/chatgpt/index.js')
router.post('/chatgpt', chatgpt)
module.exports = router