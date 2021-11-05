const { Router } = require('express');
const { check } = require('express-validator');

const userController = require('../controllers/userController');
const { emailExist, existUserId } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/user/create', [
  check('name', 'The name is required').not().isEmpty(),
  check('password', 'The password must have a mininum of 6 characters').isLength({ min: 6 }),
  check('role', 'Is not role valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('email', 'The email is not valid').isEmail(),
  check('email').custom(emailExist),
  validateFields,
], userController.create);

router.put('/user/:id', [
  check('id', 'Is not ID valid').isMongoId(),
  check('id').custom(existUserId),
  validateFields,
], userController.updateWithId);

router.get('/users', userController.getAll);
// router.delete('/type/:id', userController.delete);
// router.patch('/type/:id', userController.activate);

module.exports = router;
