var express = require('express');
var mongoose = require('mongoose');
var db= require('../../model/db.js');
var alumno = require('../../model/alumno.js');
var profesor = require('../../model/profesor.js');

generaAlumnos(100);
generaProfesores(15);
function generaAlumnos(numero){
    var nombres = [ 'Sonia','Aurora','Esperanza','Irene','Manuel','Luis','Luisa','David','Javier','Antonio','Rafael','Rafaela','Paula','Marta','Carmen','Pedro', 'Juan', 'Pablo', 'Miguel', 'Jacinto', 'José', 'Samuel', 'Ángel', 'Ramón', 'Julian', 'Lola', 'María', 'Antonia', 'Josefa', 'Teresa', 'Manuela', 'Inmaculada'];
    var apellidos = [ 'Álvarez','Barruz','Cruz','Durcal','Martín','Navarrete','López','Estévez','Granados','Olivares','Guerrero','Torres','Antón', 'Baeza', 'Caparrós', 'Díaz' , 'Esteban', 'Fernández' , 'García' , 'Heredia' , 'Iniesta', 'Jiménez', 'Lara', 'Martínez', 'Navarro', 'Ortega', 'Pérez', 'Quesada', 'Ruiz', 'Sánchez', 'Toledano', 'Ureña', 'Vega', 'Yeguas', 'Zamorano'  ];

    console.log('Nombres disponibles: '+ nombres.length);
    console.log('Apellidos disponibles: '+ apellidos.length);
    function aleatorio(tamano)  {
        return ( Math.floor(Math.random() * tamano) ); 
    }
    var nombre;
    var apellido1, apellido2;

    for (var i=0; i<numero; i++ ) {
        nombre=nombres[aleatorio(nombres.length)];
        apellido1=apellidos[aleatorio(nombres.length)];
        apellido2=apellidos[aleatorio(nombres.length)];
        var email =getCleanedString(nombre+apellido1+apellido2)
        var alum=mongoose.model('Alumno');
        alum.create ({
            "nombre": nombre,
            "apellido": apellido1+" "+apellido2,
            "email":email+"@alumnoscorreo.es",
            "id": i
        } , function (err, alumnos){
      if(!err){
       console.log("alumnos insertados correctamente")
       }else
        console.log("error al insertar alumnos")
    });
    }
}
function generaProfesores(numero){
    var nombres = [ 'Sonia','Aurora','Esperanza','Irene','Manuel','Luis','Luisa','David','Javier','Antonio','Rafael','Rafaela','Paula','Marta','Carmen','Pedro', 'Juan', 'Pablo', 'Miguel', 'Jacinto', 'José', 'Samuel', 'Ángel', 'Ramón', 'Julian', 'Lola', 'María', 'Antonia', 'Josefa', 'Teresa', 'Manuela', 'Inmaculada'];
    var apellidos = [ 'Álvarez','Barruz','Cruz','Durcal','Martín','Navarrete','López','Estévez','Granados','Olivares','Guerrero','Torres','Antón', 'Baeza', 'Caparrós', 'Díaz' , 'Esteban', 'Fernández' , 'García' , 'Heredia' , 'Iniesta', 'Jiménez', 'Lara', 'Martínez', 'Navarro', 'Ortega', 'Pérez', 'Quesada', 'Ruiz', 'Sánchez', 'Toledano', 'Ureña', 'Vega', 'Yeguas', 'Zamorano'  ];

    console.log('Nombres disponibles: '+ nombres.length);
    console.log('Apellidos disponibles: '+ apellidos.length);
    function aleatorio(tamano)  {
        return ( Math.floor(Math.random() * tamano) ); 
    }
    var nombre;
    var apellido1, apellido2;

    for (var i=0; i<numero; i++ ) {
        nombre=nombres[aleatorio(nombres.length)];
        apellido1=apellidos[aleatorio(nombres.length)];
        apellido2=apellidos[aleatorio(nombres.length)];
        var email =getCleanedString(nombre+apellido1+apellido2)
        var prof=mongoose.model('Profesor');
        prof.create ({
            "nombre": nombre,
            "apellido": apellido1+" "+apellido2,
            "email":email+"@profesorescorreo.es",
            "id": i
        } , function (err, profesores){
      if(!err){
       console.log("profesores insertados correctamente")
       }else
        console.log("error al insertar profesores")
    });
    }
}

function getCleanedString(cadena){
   // Definimos los caracteres que queremos eliminar
   var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,";

   // Los eliminamos todos
   for (var i = 0; i < specialChars.length; i++) {
       cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
   }   

   // Lo queremos devolver limpio en minusculas
   cadena = cadena.toLowerCase();

   // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
   cadena = cadena.replace(/ /g,"_");

   // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
   cadena = cadena.replace(/á/gi,"a");
   cadena = cadena.replace(/é/gi,"e");
   cadena = cadena.replace(/í/gi,"i");
   cadena = cadena.replace(/ó/gi,"o");
   cadena = cadena.replace(/ú/gi,"u");
   cadena = cadena.replace(/ñ/gi,"n");
   return cadena;
}
