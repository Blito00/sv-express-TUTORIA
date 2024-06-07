const { obtenerTareas } = require('../controllers/tareas.controllers');

const router = require('express').Router();

router.get('/tareas', obtenerTareas)

router.post('/tareas', (req, res)=>{
    const {name} = req.body;

    

    res.send(name)
    //////////////
})

module.exports = router;