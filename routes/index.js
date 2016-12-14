var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
////////A PARTIR DE AQUÍ ESTÁN TODOS LOS MÉTODOS UTILIZADOS PARA LA GESTIÓN DE DATOS/////////
////////SEPARADOS POR FUNCIONES Y LUEGO POR APARTADOS///////////
//READ//
        //PROFESOR//
router.get('/ProfesorRead', function(req, res, next) {
  var profesor=mongoose.model('Profesor');
    profesor.find({}, function (err, profesores){
  res.render('ProfesorRead', {"profesorList":profesores});
    });
});
        //ALUMNO//
router.get('/AlumnoRead', function(req, res, next) {
  var alumno=mongoose.model('Alumno');
    alumno.find({}, function (err, alumnos){      
  res.render('AlumnoRead', {"alumnoList":alumnos});
    });
});
        //ASIGNATURA//
router.get('/AsignaturaRead', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
  res.render('AsignaturaRead', {"asignaturaList":asignaturas});
    });
});
        //MATRÍCULA//

router.get('/matAlumnoRead', function(req, res, next) {
  var matricula=mongoose.model('Matricula');
    matricula.find({}, function (err, matriculas){
  res.render('matAlumnoRead', {"matriculaList":matriculas, moment: moment});
    });
});

        //ASIGNACIONES//
        
router.get('/AsignacionesRead', function(req, res, next) {
  var asignacion=mongoose.model('Asignacion');
    asignacion.find({}, function (err, asignaciones){
  res.render('AsignacionesRead', {"asignacionList":asignaciones, moment: moment});
    });
});
    

//---------------------------------------------------------------------//


//CREATE//

        //PROFESOR//
router.get('/ProfesorCreate', function(req, res, next) {
  res.render('ProfesorCreate')
    });


router.post('/ProfesorCreate', function(req, res, next) {
  var profesor=mongoose.model('Profesor');
  var nombre=req.body.nombre
  var apellido=req.body.apellido
  var email=req.body.email
  var id=req.body.id

    profesor.create({
      "nombre": nombre,
      "apellido":apellido,
      "email": email,
      "id": id
    }, function (err, profesores){
      if(!err){
       res.redirect('/ProfesorRead')
       console.log(profesores)
       }else
        res.send("Error al crear profesor")
    });
});

        //ALUMNO//
router.get('/AlumnoCreate', function(req, res, next) {
  res.render('AlumnoCreate')
    });


router.post('/AlumnoCreate', function(req, res, next) {
  var alumno=mongoose.model('Alumno');
  var nombre=req.body.nombre;
  var apellido=req.body.apellido;
  var email=req.body.email;
  var id=req.body.id;

    alumno.create({
      "nombre": nombre,
      "apellido":apellido,
      "email": email,
      "id": id
    }, function (err, alumnos){
      if(!err){
       res.redirect('/AlumnoRead')
       console.log(alumnos)
       }else
        res.send("Error al crear alumno")
    });
});

        //ASIGNATURA//
router.get('/AsignaturaCreate', function(req, res, next) {
  res.render('AsignaturaCreate')
    });


router.post('/AsignaturaCreate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
  var nombre=req.body.nombre;
  var ciclo=req.body.ciclo;
  var curso=req.body.curso;
  var horas=req.body.horas;
    asignatura.create({
      "nombre": nombre,
      "ciclo":ciclo,
      "curso": curso,
      "horas": horas
    }, function (err, asignaturas){
      if(!err){
       res.redirect('/AsignaturaRead')
       }else
        res.send("Error al crear asignatura")
    });
});


    //MATRICULA//

router.get('/MatriculaCreate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
        var alumno=mongoose.model('Alumno');
        alumno.find({}, function (err, alumnos){
    res.render('MatriculaCreate', {"alumnoList":alumnos,"asignaturaList":asignaturas});
    });
    });
});

router.post('/MatriculaCreate', function(req, res, next) {
  var matAlumno=mongoose.model('Matricula');
  var alumno=mongoose.model('Alumno');
  var asignatura=mongoose.model('Asignatura');
  var alumnoId=req.body.alumno;
  var asignaturaId=req.body.asignatura;
  var inicio=new Date('09/01/'+req.body.inicio);
  var fin=new Date('06/30/'+(parseInt(req.body.inicio)+1));
  var alumnoMongo;
  var asignaturaMongo;
  //Buscamos que no exista una coincidencia y no se repitan matrículas
  matAlumno.findOne({"alumno" : alumno,"asignatura":asignatura,"inicio": new Date(inicio), "fin": new Date(fin)}, function (err, matriculas){
        if(matriculas==null){
            alumno.findOne({"_id":alumnoId},function (err, alumnos){
                alumnoMongo=alumnos;
                asignatura.findOne({"_id":asignaturaId},function (err,asignaturas){
                asignaturaMongo=asignaturas;
                console.log(alumnoMongo);
                console.log(asignaturaMongo);
                matAlumno.create({
                    "alumno": alumnoMongo,
                    "asignatura":asignaturaMongo,
                    "inicio": inicio,
                    "fin": fin
                    }, function (err, matAlumnos){
                        if(!err){
                            console.log(matAlumnos);
                            res.redirect('/MatriculaCreate')
                        }else
                            res.send("Error al crear matrícula")
                        });
            });
            });
            
                            
           
                
        }else{
            res.send("el alumno ya existe")
        }
    });
    
});

        //ASIGNACIÓN//
router.get('/AsignacionProfesores', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
        var profesor=mongoose.model('Profesor');
        profesor.find({}, function (err, profesores){
    res.render('AsignacionProfesores', {"profesorList":profesores,"asignaturaList":asignaturas});
    });
    });
});
//evitamos que se asigne por duplicado un profesor a una asignatura más de una vez
//durante el mismo curso
router.post('/AsignacionProfesores', function(req, res, next) {
var asiProfesor=mongoose.model('Asignacion');
  var profesor=mongoose.model('Profesor');
  var asignatura=mongoose.model('Asignatura');
  var profesorId=req.body.profesor;
  console.log(profesorId);
  var asignaturaId=req.body.asignatura;
  var inicio=new Date('09/01/'+req.body.inicio);
  var fin=new Date('06/30/'+(parseInt(req.body.inicio)+1));
  var profesorMongo;
  var asignaturaMongo;

  asiProfesor.findOne({"profesor" : profesor,"asignatura":asignatura,"inicio": new Date(inicio), "fin": new Date(fin)}, function (err, asignaciones){
        if(asignaciones==null){
            profesor.findOne({"_id":profesorId},function (err, profesores){
                profesorMongo=profesores;
                asignatura.findOne({"_id":asignaturaId},function (err,asignaturas){
                asignaturaMongo=asignaturas;
                asiProfesor.create({
                    "profesor": profesorMongo,
                    "asignatura":asignaturaMongo,
                    "inicio": inicio,
                    "fin": fin
                    }, function (err, asiProfesores){
                        if(!err){
                            res.redirect('/AsignacionProfesores')
                        }else
                            res.send("Error al asignar profesor")
                        });
            });
            });
            
                            
           
                
        }else{
            res.send("el profesor ya está asignado a esta asignatura en este curso")
        }
    });
    
});

//---------------------------------------------------------------------//

//UPDATE//
        //PROFESOR//
router.get('/ProfesorUpdate', function(req, res, next) {
   var profesor=mongoose.model('Profesor');
    profesor.find({}, function (err, profesores){
  res.render('ProfesorUpdate', {"profesorList":profesores});
    });
});

router.post('/ProfesorUpdate', function(req, res, next) {
  var profesor=mongoose.model('Profesor');
  var nombre=[];
  var apellido=[];
  var email=[];
  var _id=[];
    var id=[];
  if(typeof req.body._id=="object"){
        id=req.body.id;
        nombre=req.body.nombre;
        apellido=req.body.apellido;
        email=req.body.email;
        _id=req.body._id;

    }else{
        id[0]=req.body.id;
        _id[0]=req.body._id;
        nombre[0]=req.body.nombre;
        apellido[0]=req.body.apellido;
        email[0]=req.body.email;
  }

    for(var i = 0; i<id.length;i++){
            profesor.update({"_id":_id[i]},
            {  "id":id[i],
                "nombre": nombre[i],
                "apellido":apellido[i],
                "email":email[i]
            },
            function(err,doc){
                    if(!err){
                    }else{
                        res. send("Error al actualizar datos de profesor")
                    }
                })
        }
        res.redirect('/ProfesorRead');
});

        //ALUMNO//
router.get('/AlumnoUpdate', function(req, res, next) {
   var alumno=mongoose.model('Alumno');
    alumno.find({}, function (err, alumnos){
  res.render('AlumnoUpdate', {"alumnoList":alumnos});
    });
});

router.post('/AlumnoUpdate', function(req, res, next) {
  var alumno=mongoose.model('Alumno');
  var nombre=[];
  var apellido=[];
  var email=[];
  var _id=[];
    var id=[];
  if(typeof req.body._id=="object"){
        id=req.body.id;
        nombre=req.body.nombre;  
        apellido=req.body.apellido;
        email=req.body.email;
        _id=req.body._id;

    }else{
        id[0]=req.body.id;
        _id[0]=req.body._id;
        nombre[0]=req.body.nombre;
        apellido[0]=req.body.apellido;
        email[0]=req.body.email;
  }

    for(var i = 0; i<id.length;i++){
            alumno.update({"_id":_id[i]},
            {  "id":id[i],
                "nombre": nombre[i],
                "apellido":apellido[i],
                "email":email[i]
            },
            function(err,doc){
                    if(!err){
                    }else{
                        res. send("Error al actualizar datos de alumno")
                    }
                })
        }
        res.redirect('/AlumnoRead');
});

            //ASIGNATURA//

router.get('/AsignaturaUpdate', function(req, res, next) {
   var asignatura=mongoose.model('Asignatura');
    asignatura.find({}, function (err, asignaturas){
  res.render('AsignaturaUpdate', {"asignaturaList":asignaturas});
    });
});

router.post('/AsignaturaUpdate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
  var nombre=[];
  var ciclo=[];
  var curso=[];
  var _id=[];
    var horas=[];
  if(typeof req.body._id=="object"){
        horas=req.body.horas;
        nombre=req.body.nombre;
        ciclo=req.body.ciclo;
        curso=req.body.curso;
        _id=req.body._id;

    }else{
        horas[0]=req.body.horas;
        _id[0]=req.body._id;
        nombre[0]=req.body.nombre;
        ciclo[0]=req.body.ciclo;
        curso[0]=req.body.curso;
  }

    for(var i = 0; i<_id.length;i++){
            asignatura.update({"_id":_id[i]},
            {  "horas":horas[i],
                "nombre": nombre[i],
                "ciclo":ciclo[i],
                "curso":curso[i]
            },
            function(err,doc){
                    if(!err){
                    }else{
                        res. send("Error al actualizar datos de asignatura")
                    }
                })
        }
        res.redirect('/AsignaturaUpdate');
});



            //MATRICULA//

router.get('/MatriculaUpdate', function(req, res, next) {
  var asignatura=mongoose.model('Asignatura');
    var matricula=mongoose.model('Matricula');
    asignatura.find({}, function (err, asignaturas){
      matricula.find({}, function (err, matriculas){
    res.render('MatriculaUpdate', {"matriculaList":matriculas, "asignaturaList":asignaturas});
      });
    });
});


//---------------------------------------------------------------------//


//DELETE//
            //PROFESOR//
router.get('/ProfesorDelete', function(req, res, next) {
  var profesor=mongoose.model('Profesor');
    profesor.find({}, function (err, profesores){
  res.render('ProfesorDelete', {"profesorList":profesores});
    });
});
router.post('/ProfesorDelete', function(req, res, next) {
  var profesor=mongoose.model('Profesor');
  var id=[];
  if(typeof req.body.id=="object")
       id=req.body.id;
  else
    id[0]=req.body.id;


  for(var i = 0; i<id.length;i++){
    profesor.remove({ _id: id [i]}, function(err) {
        if (!err) {
                
        }
        else {
                res.send("Error");
        }
        });
    }
    res.redirect('/ProfesorDelete')
});

        //ALUMNO//

router.get('/AlumnoDelete', function(req, res, next) {
  var alumno=mongoose.model('Alumno');
    alumno.find({}, function (err, alumnos){
  res.render('AlumnoDelete', {"alumnoList":alumnos});
    });
});

router.post('/AlumnoDelete', function(req, res, next) {
  var alumno=mongoose.model('Alumno');
  var id=[];
  if(typeof req.body.id=="object")
       id=req.body.id;
  else
    id[0]=req.body.id;


  for(var i = 0; i<id.length;i++){
    alumno.remove({ _id: id [i]}, function(err) {
        if (!err) {
                
        }
        else {
                res.send("Error");
        }
        });
    }
    res.redirect('/AlumnoDelete')
});


module.exports = router;

router.get('/MatriculaDelete', function(req, res, next) {
  var matricula=mongoose.model('Matricula');
    matricula.find({}, function (err, matriculas){
  res.render('MatriculaDelete', {"matriculaList":matriculas, moment: moment});
    });
});

router.post('/MatriculaDelete', function(req, res, next) {
  var matricula=mongoose.model('Matricula');
  var id=[];
  if(typeof req.body.id=="object")
       id=req.body.id;
  else
    id[0]=req.body.id;


  for(var i = 0; i<id.length;i++){
    matricula.remove({ _id: id [i]}, function(err) {
        if (!err) {
                
        }
        else {
                res.send("Error");
        }
        });
    }
    res.redirect('/MatriculaDelete')
});


        //ASIGNACIONES//

router.get('/AsignacionDelete', function(req, res, next) {
  var asignacion=mongoose.model('Asignacion');
    asignacion.find({}, function (err, asignaciones){
  res.render('AsignacionDelete', {"asignacionList":asignaciones, moment: moment});
    });
});

router.post('/AsignacionDelete', function(req, res, next) {
  var asignacion=mongoose.model('Asignacion');
  var id=[];
  if(typeof req.body.id=="object")
       id=req.body.id;
  else
    id[0]=req.body.id;


  for(var i = 0; i<id.length;i++){
    asignacion.remove({ _id: id [i]}, function(err) {
        if (!err) {
                
        }
        else {
                res.send("Error");
        }
        });
    }
    res.redirect('/AsignacionDelete')
});