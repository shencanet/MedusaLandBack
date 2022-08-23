const router = require('express').Router();
const medusaController = require('../controllers/MedusaController')
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get('/medusas',medusaController.getAll);
router.post('/medusas',verifyToken, isAdmin, medusaController.addmedusa);
router.get('/medusas/id/:id',medusaController.getmedusaById);


module.exports = router;
