const { Router } = require('express');
const { check } = require('express-validator');

const caseController = require('../controllers/caseController');

const { validateJWT, isRole, validateFields } = require('../middlewares');

const {
  existUserId, existStateId, existTypeId, maxCaseUserId, existCaseId,
} = require('../helpers/db-validators');

const router = Router();

router.post('/case/create', [
  validateJWT,
  isRole,
  check(['user', 'type', 'state'], 'Is not ID valid').isMongoId(),
  check('user').custom(existUserId),
  check('state').custom(existStateId),
  check('type').custom(existTypeId),
  check('user').custom(maxCaseUserId),
  validateFields,
], caseController.create);

router.get('/cases/', [validateJWT, isRole], caseController.getAll);

router.get('/case/:id', [
  validateJWT,
  isRole,
  check('id', 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  validateFields,
], caseController.getId);

router.get('/cases/user/:userid', [
  validateJWT,
  isRole,
  check('userid', 'Is not ID valid').isMongoId(),
  check('userid').custom(existUserId),
  validateFields,
], caseController.getUserId);

router.put('/case/:id', [
  validateJWT,
  isRole,
  check(['id'], 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  check('user').custom(maxCaseUserId),
  validateFields,
], caseController.updateWithId);

router.delete('/case/:id', [
  validateJWT,
  isRole,
  check(['id'], 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  validateFields,
], caseController.delete);

router.patch('/case/:id', [
  validateJWT,
  isRole,
  check(['id'], 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  check('user').custom(maxCaseUserId),
  validateFields,
], caseController.active);

router.put('/case/user/:id', [
  validateJWT,
  isRole,
  check(['id'], 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  check('user').custom(maxCaseUserId),
  validateFields,
], caseController.updateOnlyUser);

module.exports = router;
