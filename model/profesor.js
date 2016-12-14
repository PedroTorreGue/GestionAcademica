var mongoose = require('mongoose');  
var profesorSchema = new mongoose.Schema({  
  "nombre": String,
  "apellido": String,
  "email": String,
  "id" : Number
},{ collection: 'profesores' });

mongoose.model('Profesor', profesorSchema);