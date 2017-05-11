
// JavaScript Document
 
 function comenzar(){

	 zonadatos = document.getElementById("zonadatos");
	 var boton = document.getElementById("boton");
	 boton.addEventListener("click",crear,false);
	 
	 navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);
	 
 }

function acceso(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearSis,errores);
}

function crearSis(sistema){
	espacio = sistema.root;
	ruta="";
	mostrar();
}
function crear() {
	var nombre_archivo = document.getElementById("entrada").value;
	if(nombre_archivo!==""){
		nombre_archivo=ruta+ nombre_archivo;
		espacio.getFile(nombre_archivo,{create:true, exclusive:false},mostrar,errores);
	}
}

function mostrar(){
	
	document.getElementById("entrada").value="";
	zonadatos.innerHTML="";
	espacio.getDirectory(ruta,null,leerdir,errores);
}

function leerdir(dir){
	
	lector= dir.createReader();
	leer();
	
}
function leer(){
	lector.readEntries(function(archivos){
		if(archivos.length){listar(archivos);
		}
	}, errores);
	
}
function listar(archivos){
	for(var i=0; archivos.length;i++){
		
		if(archivos[i].isFile){ zonadatos.innerHTML+=archivos[i].name+"<br>";
			
		}else if(archivos[i].isDirectory){
			
			zonadatos.innerHTML+="<span class='directorio'>"+ archivos[i].name +"</span>";
		}
	}
}

function errores(e){
	alert("cpurrop in error"+ e.code);
}


/*function crear(){
	var nombre_archivo= document.getElementById("entrada").value;
	
	if(nombre_archivo!==""){
		espacio.getFile(nombre_archivo,{create:true, exclusive:false},mostrar,errores);
	}
}
function mostrar(entrada){
	document.getElementById("entrada").value="";
	
	zonadatos.innerHTML="exito en la creacion de archivos <br>";
	zonadatos.innerHTML+="Nombre :"+entrada.name+ "<br>"
	zonadatos.innerHTML+="Ruta :"+ entrada.fullPath+"<br>"
	
}

 
function errores(){
	alert("Ocurrio un error"+e.code);
	
}*/

 window.addEventListener("load",comenzar,false);

