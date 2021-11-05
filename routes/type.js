const { Router } = require('express');
const typeController = require('../controllers/typeController');

const router = Router();

router.post('/type/create', typeController.create);
router.get('/types/', typeController.getAll);
router.put('/type/:id', typeController.updateWithId);
router.delete('/type/:id', typeController.delete);
router.patch('/type/:id', typeController.activate);

module.exports = router;
