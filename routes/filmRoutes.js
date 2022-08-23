const router = require('express').Router();
const filmController = require('../controllers/FilmController')
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

router.get('/films',filmController.getAll);
router.post('/films',verifyToken, isAdmin, filmController.addFilm);
router.get('/films/id/:id',filmController.getFilmById);
router.post('/films/title',filmController.getFilmByTitle);
router.post('/films/actor',filmController.getFilmByActor);

module.exports = router;
