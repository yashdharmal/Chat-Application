const express = require('express')
const router = express.Router();
const user = require('../controller/user')
const { validator } = require('../middleware/validation')
const { signUpSchema, loginSchema } = require('../route/validation/user')


router.post('/signup', validator(signUpSchema), user.signUp)
router.post('/login', validator(loginSchema), user.login)


module.exports = router;