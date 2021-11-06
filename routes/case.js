const { Router } = require('express');
const { check } = require('express-validator');

const caseController = require('../controllers/caseController');
const { validateFields } = require('../middlewares/validate-fields');
const {
  existUserId, existStateId, existTypeId, maxCaseUserId, existCaseId,
} = require('../helpers/db-validators');

const router = Router();

router.post('/case/create', [
  check(['user', 'type', 'state'], 'Is not ID valid').isMongoId(),
  check('user').custom(existUserId),
  check('state').custom(existStateId),
  check('type').custom(existTypeId),
  check('user').custom(maxCaseUserId),
  validateFields,
], caseController.create);

router.get('/cases/', caseController.getAll);

router.get('/case/:id', [
  check('id', 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  validateFields,
], caseController.getId);

router.put('/case/:id', [
  check(['id'], 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  check('user').custom(maxCaseUserId),
  validateFields,
], caseController.updateWithId);

router.delete('/case/:id', [
  check(['id'], 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  validateFields,
], caseController.delete);

router.patch('/case/:id', [
  check(['id'], 'Is not ID valid').isMongoId(),
  check('id').custom(existCaseId),
  validateFields,
], caseController.active);

module.exports = router;
