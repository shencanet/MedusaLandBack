const router = require('express').Router();
const orderController = require('../controllers/OrderController');
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get('/orders', verifyToken, isAdmin, orderController.getAll);
router.post('/orders',verifyToken, orderController.createOrder);



module.exports = router;
