var express = require('express');
var mongoose = require('mongoose');
var db= require('../../model/db.js');
var asignatura = require('../../model/asignatura.js');
generarAsignaturas();
function generarAsignaturas(){
    var asig=mongoose.model('Asignatura');
    asig.create({
        "nombre":"Implantación de SO",
        "ciclo":"ASIR",
        "curso":1,
        "horas":6}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Fundamentos del Hardware",
        "ciclo":"ASIR",
        "curso":1,
        "horas":5}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Gestión de Bases de datos",
        "ciclo":"ASIR",
        "curso":1,
        "horas":4}
        , function (err, asignaturas){
        if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"LMSGI",
        "ciclo":"ASIR",
        "curso":1,
        "horas":5}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Planificiación y Administración de Redes",
        "ciclo":"ASIR",
        "curso":1,
        "horas":6}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Administración de SGBD",
        "ciclo":"ASIR",
        "curso":2,
        "horas":6}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Administración de SO",
        "ciclo":"ASIR",
        "curso":2,
        "horas":4}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Implantación de aplicaciones Web",
        "ciclo":"ASIR",
        "curso":2,
        "horas":5}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Seguridad y alta disponibilidad",
        "ciclo":"ASIR",
        "curso":2,
        "horas":6}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Servicios de Red e Internet",
        "ciclo":"ASIR",
        "curso":2,
        "horas":8}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Sistemas Informáticos",
        "ciclo":"DAM",
        "curso":1,
        "horas":4}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"LMSGI",
        "ciclo":"DAM",
        "curso":1,
        "horas":6}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Entornos de Desarrollo",
        "ciclo":"DAM",
        "curso":1,
        "horas":5}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Programación",
        "ciclo":"DAM",
        "curso":1,
        "horas":8}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Bases de Datos",
        "ciclo":"DAM",
        "curso":1,
        "horas":4}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Desarrollo de Interfaces",
        "ciclo":"DAM",
        "curso":2,
        "horas":4}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Desarrollo de Interfaces",
        "ciclo":"DAM",
        "curso":2,
        "horas":8}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Acceso a Datos",
        "ciclo":"DAM",
        "curso":2,
        "horas":5}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Programación, Servicios y Procesos",
        "ciclo":"DAM",
        "curso":2,
        "horas":3}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Sistemas de Gestión Empresarial",
        "ciclo":"DAM",
        "curso":2,
        "horas":4}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
    asig.create({
        "nombre":"Programación Multimedia y dispositivos móviles",
        "ciclo":"DAM",
        "curso":2,
        "horas":6}
        , function (err, asignaturas){
      if(!err){
       console.log("asignatura insertada correctamente")
       }else
        console.log("error al insertar asignatura")
    });
}