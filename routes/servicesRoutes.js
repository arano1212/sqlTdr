const express = require('express');
const router = express.Router();

const serviceController = require('../controller/servicesController');

router.post('/api/services', serviceController.createServiceController);
router.get('/api/services', serviceController.getAllServiceController);
router.get('/api/services/:id', serviceController.getOneServiceController);
router.put('/api/services/:id', serviceController.updateserviceController);
router.delete('/api/services/:id', serviceController.logicDeleteServiceController);
router.get('/api/services/users/skills', serviceController.getUserSkillsController);
router.get('/api/services/users/:id/skills', serviceController.getOneUserSkillsController);
router.get('/api/services/users/skills/status', serviceController.getPendingController)


module.exports=router;