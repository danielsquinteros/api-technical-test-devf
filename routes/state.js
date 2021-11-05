const { Router } = require('express');
const stateController = require('../controllers/stateController');

const router = Router();

router.post('/state/create', stateController.create);
router.get('/states/', stateController.getAll);
router.put('/state/:id', stateController.updateWithId);

module.exports = router;
