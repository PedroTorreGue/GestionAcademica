    function desbloquearP (numero){
    if (document.getElementById("nombre"+numero).disabled==true){     
        document.getElementById("nombre"+numero).disabled=false;       
        document.getElementById("apellido"+numero).disabled=false;
        document.getElementById("email"+numero).disabled=false;
        document.getElementById("id"+numero).disabled=false;
        $('#prof'+numero).toggleClass('actualizado'); 
        }
    else {
        document.getElementById("nombre"+numero).disabled=true;
        document.getElementById("apellido"+numero).disabled=true;
        document.getElementById("email"+numero).disabled=true;
        document.getElementById("id"+numero).disabled=true; 
        $('#prof'+numero).toggleClass('actualizado'); 
        }    
    }
    function borrarP (numero){
            $('#prof'+numero).toggleClass('borrado');
    }
    
    function desbloquearAl (numero){
    if (document.getElementById("nombre"+numero).disabled==true){     
        document.getElementById("nombre"+numero).disabled=false;       
        document.getElementById("apellido"+numero).disabled=false;
        document.getElementById("email"+numero).disabled=false;
        document.getElementById("id"+numero).disabled=false;
        $('#alum'+numero).toggleClass('actualizado'); 
        }
    else {
        document.getElementById("nombre"+numero).disabled=true;
        document.getElementById("apellido"+numero).disabled=true;
        document.getElementById("email"+numero).disabled=true;
        document.getElementById("id"+numero).disabled=true; 
        $('#alum'+numero).toggleClass('actualizado'); 
        }    
    }
    function desbloquearMat (numero){
    if (document.getElementById("matAsig"+numero).disabled==true){     
        document.getElementById("matAsig"+numero).disabled=false;       
        document.getElementById("fechaInicio"+numero).disabled=false;
        $('#matUpdate'+numero).toggleClass('actualizado'); 
        }
    else {
        document.getElementById("matAsig"+numero).disabled=true;
        document.getElementById("matAsig"+numero).disabled=true;
        document.getElementById("fechaInicio"+numero).disabled=true; 
        $('#matUpdate'+numero).toggleClass('actualizado'); 
        }    
    }

    function borrarAl (numero){
        $('#alum'+numero).toggleClass('borrado');
    }

    function desbloquearAs (numero){
    if (document.getElementById("nombre"+numero).disabled==true){     
        document.getElementById("nombre"+numero).disabled=false;       
        document.getElementById("curso"+numero).disabled=false;
        document.getElementById("ciclo"+numero).disabled=false;
        document.getElementById("horas"+numero).disabled=false;
        $('#asig'+numero).toggleClass('actualizado'); 
        }
    else {
        document.getElementById("nombre"+numero).disabled=true;
        document.getElementById("curso"+numero).disabled=true;
        document.getElementById("ciclo"+numero).disabled=true;
        document.getElementById("horas"+numero).disabled=true; 
        $('#asig'+numero).toggleClass('actualizado'); 
        }    
    }

    function borrarMat (numero){
        $('#mat'+numero).toggleClass('borrado');
    }

    function borrarAsi (numero){
        $('#asi'+numero).toggleClass('borrado');
    }
                //Con este método hacemos que cada vez que pulsamos una tecla
                //busca posibles coincidencias y las muestra

   function buscar() {
            var input;
            var filter; 
            var table; 
            var tr;
            var td;
            var selection;
            input = document.getElementById("buscador");
            console.log(input);
            filter = input.value.toUpperCase();
            table = document.getElementById("datos");
            tr = table.getElementsByTagName("tr");
            seleccion=1; // por defecto buscamos por Apellidos
            if(document.getElementById("radioN").checked==true) 
                selection=0;
            if(document.getElementById("radioAp").checked==true)
                selection=1;
            if(document.getElementById("radioCiclo").checked==true) 
                selection=2
            if(document.getElementById("radioCurso").checked==true) 
                selection=3;
            if(document.getElementById("radioAsig").checked==true) 
                selection=4;        
            for (var i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[selection];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }

function buscarAP() {
            var input;
            var filter; 
            var table; 
            var tr;
            var td;
            var selection;
            input = document.getElementById("buscador");
            console.log(input);
            filter = input.value.toUpperCase();
            table = document.getElementById("datos");
            tr = table.getElementsByTagName("tr");
            seleccion=1; // por defecto buscamos por Apellidos
            if(document.getElementById("radioN").checked==true) 
                selection=0;
            if(document.getElementById("radioAp").checked==true)
                selection=1;        
            for (var i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[selection];
                if (td) {
                    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }
