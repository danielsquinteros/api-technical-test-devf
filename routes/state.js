const { Router } = require('express');
const stateController = require('../controllers/stateController');

const { validateJWT, isAdminRole } = require('../middlewares');

const router = Router();

router.post('/state/create', [
  validateJWT,
  isAdminRole,
], stateController.create);

router.get('/states/', [
  validateJWT,
  isAdminRole,
], stateController.getAll);

router.put('/state/:id', [
  validateJWT,
  isAdminRole,
], stateController.updateWithId);

module.exports = router;
