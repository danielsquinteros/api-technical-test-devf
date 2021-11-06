const { Router } = require('express');
const { check } = require('express-validator');

const authController = require('../controllers/authController');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/login', [
  check('email', 'The email is not valid').isEmail(),
  check('password', 'The password is required').not().isEmpty(),
  validateFields,
], authController.login);

module.exports = router;
