const express = require('express');

const { createTweet, getTweet } = require('../controllers/tweet-controller.js');
const { signUp, signIn } = require('../controllers/user-controller.js');
const { toggleLike } = require('../controllers/like-controller.js');
const authenticate = require('../middlewares/authenticate.js');
const router = express.Router();

router.post('/tweet', createTweet);
router.get('/tweet/:id', getTweet);
router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.post('/likes/toggle', authenticate, toggleLike);

module.exports = router;
