var mongoose = require('mongoose')
var asignacionSchema=new mongoose.Schema({
    "profesor" : mongoose.model("Profesor").schema,
    "asignatura":mongoose.model("Asignatura").schema,
    "inicio": Date,
    "fin": Date
},{ collection: 'asignaciones' });
mongoose.model('Asignacion', asignacionSchema);