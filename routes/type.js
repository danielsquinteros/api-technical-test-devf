const { Router } = require('express');
const typeController = require('../controllers/typeController');

const { validateJWT, isAdminRole } = require('../middlewares');

const router = Router();

router.post('/type/create', [
  validateJWT,
  isAdminRole,
], typeController.create);

router.get('/types/', [
  validateJWT,
], typeController.getAll);

router.put('/type/:id', [
  validateJWT,
  isAdminRole,
], typeController.updateWithId);

router.delete('/type/:id', [
  validateJWT,
  isAdminRole,
], typeController.delete);

router.patch('/type/:id', [
  validateJWT,
  isAdminRole,
], typeController.activate);

module.exports = router;
