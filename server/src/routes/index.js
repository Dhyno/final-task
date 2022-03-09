const express = require('express')

const router = express.Router()

const {uploadFile} = require('../middlewares/uploadFile')
const { auth } = require('../middlewares/auth');


const { register, login } = require('../controller/auth');
const { addJourney, getAllJourney, getUserJourney, getDetailJourney } = require('../controller/journey');
const { addBookmark, getBookmark, deleteBookmark } = require('../controller/bookmark');

router.post('/register', register);
router.post('/login', login);

router.post('/journey', auth, uploadFile('image'), addJourney);
router.get('/userjourney', auth, getUserJourney);
router.get('/journey/:id', getDetailJourney);
router.get('/journey', getAllJourney);

router.post('/bookmark', auth, addBookmark )
router.get('/bookmark', auth, getBookmark )
router.delete('/bookmark/:id', deleteBookmark )

module.exports = router;

