const express = require('express');
const { signup, signin, getUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/user', authMiddleware, getUser);

module.exports = router;
