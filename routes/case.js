const { Router } = require('express');
const { check } = require('express-validator');

const caseController = require('../controllers/caseController');
const { validateFields } = require('../middlewares/validate-fields');
const {
  existUserId, existStateId, existTypeId, maxCaseUserId,
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
// router.put('/state/:id', caseController.updateWithId);

module.exports = router;
