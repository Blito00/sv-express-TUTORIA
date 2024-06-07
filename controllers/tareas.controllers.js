const ctrl = {nombre: 'sadas'};

let tareas = [{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}];

ctrl.obtenerTareas = (req, res)=> {
    res.json(tareas)
  }

module.exports = ctrl



