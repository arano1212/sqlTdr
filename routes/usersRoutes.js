const express = require ('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/api/users', userController.createUserController);
router.get('/api/users', userController.getAllUSerController);
router.get('/api/users/:id', userController.getOneUSerController);
router.get('/api/users/provider/true', userController.getProvidersController);
router.get('/api/users/employer/true', userController.getEmployersController);
router.put('/api/users/:id', userController.updateuserController);
router.delete('/api/users/:id', userController.logicDeleteUserController);


module.exports = router;