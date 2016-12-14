# GestionAcademica
*********Pasos a seguir para un correcta instalación e inicio de Gestión Académica con Mongoose************
1º Copiar el proyecto dentro de una máquina virtual Bitnami donde debemos tener instalado express, mongoose y rockmongo.
	En caso de no ser así dentro del propio proyecto ejecutar "npm install" y a través del package.json se instalarán todas las dependencias necesarias.
2º Para hacer la carga de datos debemos ejecutar el archivo en.\public\javascripts\CargarDatos.js para cargar unos datos iniciales de Alumnos y Profesores
	Si queremos tambien unos datos con las asignaturas de los cursos de ASIR y DAM podemos hacerlo desde .\public\javascripts\generarAsignaturas.js
	---La forma de hacerlo es la siguiente---
		bitnami@ubuntu:~/ProyectoMongoose/GAMongoose/public/javascripts$ node CargarDatos.js
		bitnami@ubuntu:~/ProyectoMongoose/GAMongoose/public/javascripts$ node generarAsignaturas.js
3º Una vez tenemos los datos podemos lanzar el servicio npm ejecutando "npm start" desde la raiz del proyecto y pasar a trabajar en la web
4º Para acceder a la web debemos acceder a la dirección ip que nos facilita bitnami al arrancar
	Ejemplo http://192.168.1.18:3000/
	
	Dentro tenemos una barra superior donde poder observar 4 apartados
		Alumnos
			Crear Alumnos
			Listado Alumnos
			Actualizar Alumnos
			Borrar Alumnos
		Profesores
			Crear Profesores
			Listado Profesores
			Actualizar Profesores
			Borrar Profesores
		Asignaturas
			Crear Asignaturas
			Listado Asignaturas
		Matrículas 
			Matricular Alumnos
			Listado Matrículas
			Borrado Matrículas
		Asignaciones	
			Asignar Profesor
			Asignaciones de Profesores
			Borrado Asignaciones
