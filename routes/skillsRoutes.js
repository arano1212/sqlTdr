const express = require('express');
const router= express.Router();

const skillController = require('../controller/skillsController');

router.post('/api/skills', skillController.createSkillController);
router.get('/api/skills', skillController.getAllSkillController);
router.get('/api/skills/:id', skillController.getSkillIdController);
router.put('/api/skills/:id', skillController.updateSkillController);
router.delete('/api/skills/:id', skillController.logicDeleteSkillController)

module.exports= router;