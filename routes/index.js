const { Router } = require('express');
const controllers = require('../controllers'); 

const router = Router();

router.get('/', (req, res) => res.send('Minecraft API'));

router.post('/paintings', controllers.createPainting); // Correct access
router.get('/paintings', controllers.getAllPaintings); // Correct access

module.exports = router;