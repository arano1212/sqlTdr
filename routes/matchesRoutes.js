const express = require('express');
const router = express.Router();

const matchesController = require('../controller/matchesController');

router.post('/api/matches', matchesController.createMatchController);
router.get('/api/matches', matchesController.getAllMatchsController);
router.get('/api/matches/:id', matchesController.getOneMatchsController);
router.put('/api/matches/:id', matchesController.updateMatchController);
router.delete('/api/matches/:id', matchesController.logicDeleteMatchController)

module.exports = router;