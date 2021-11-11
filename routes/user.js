const { Router } = require('express');
const { check } = require('express-validator');

const userController = require('../controllers/userController');
const { emailExist, existUserId } = require('../helpers/db-validators');

const {
  validateFields, validateJWT, isAdminRole,
} = require('../middlewares');

const router = Router();

router.post('/user/create', [
  validateJWT,
  isAdminRole,
  check('name', 'The name is required').not().isEmpty(),
  check('password', 'The password must have a mininum of 6 characters').isLength({ min: 6 }),
  check('role', 'Is not role valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('email', 'The email is not valid').isEmail(),
  check('email').custom(emailExist),
  validateFields,
], userController.create);

router.put('/user/:id', [
  validateJWT,
  isAdminRole,
  check('id', 'Is not ID valid').isMongoId(),
  check('id').custom(existUserId),
  check('name', 'The name is required').not().isEmpty(),
  check('password', 'The password must have a mininum of 6 characters').isLength({ min: 6 }),
  check('role', 'Is not role valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('email', 'The email is not valid').isEmail(),
  validateFields,
], userController.updateWithId);

router.get('/users', [
  validateJWT,
], userController.getAll);

router.get('/user/:id', [
  validateJWT,
], userController.getId);

// router.delete('/type/:id', userController.delete);
// router.patch('/type/:id', userController.activate);

module.exports = router;
