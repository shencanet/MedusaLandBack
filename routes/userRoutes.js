const router = require('express').Router();
const userController = require('../controllers/UserController')
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');


router.get('/users', verifyToken, isAdmin, userController.getAll);
router.get('/users/:id', verifyToken, userController.getUserById);
router.put('/users/:id', verifyToken, userController.update);
router.delete('/users/:id', verifyToken, userController.delete);


module.exports = router;
