const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.json({
        personajes: [{}]
    })
})

app.use(require('./routers/tareas.routes'))

app.listen(3000, ()=> {
    console.log(`servidor corriendo`)
});