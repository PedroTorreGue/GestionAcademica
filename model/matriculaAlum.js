var mongoose = require('mongoose')
var matriculaSchema=new mongoose.Schema({
    "alumno" : mongoose.model("Alumno").schema,
    "asignatura":mongoose.model("Asignatura").schema,
    "inicio": Date,
    "fin": Date
},{ collection: 'matriculas' });
mongoose.model('Matricula', matriculaSchema);