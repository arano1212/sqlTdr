const express = require('express');
const router = express.Router();

const paymentsController = require('../controller/paymentsController')

router.post('/api/payments', paymentsController.createPayController);
router.get('/api/payments', paymentsController.getAllPaysController);
router.get('/api/payments/:id', paymentsController.getOnePayController);
router.put('/api/payments/:id', paymentsController.updatePayController);
router.delete('/api/payments/:id', paymentsController.logicDeletePayController)


module.exports=router;