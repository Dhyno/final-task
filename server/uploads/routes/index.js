const express = require('express')

const router = express.Router()


const {uploadFile} = require('../middlewares/uploadFile')
const { auth } = require('../middlewares/auth');



module.exports = router;


