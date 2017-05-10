// JavaScript Document
var db;

function iniciar(){
	
	zanadatos= document.getElementById("zonadatos");	
	boton= document.getElementById("grabar");
	
	boton.addEventListener("click",agregar_objeto,false);

	//creando la base de dato
	
	var solicitud= indexedDB.open("mibase2");
	//onsuccess aya tenido existo la base de dato
	solicitud.onsuccess=function(e){
		bd= e.target.result;
	}
	
	//para su actualizacion
	solicitud.onupgradeneeded=function(e){
		bd= e.target.result;
		bd.createObjectStore("gente", {keyPath: "clave"});
	}
	
	//ahora crearemos los almacenes de datos y que en slq se conoce como table
}

function agregar_objeto(){
	clave = document.getElementById("clave").value;
	titulo= document.getElementById("texto").value;
	fecha= document.getElementById("fecha").value;
	
	var transaccion=bd.transaction(["gente"],"readwrite");
	
	var almacen= transaccion.objectStore("gente");
	
	var agregar= almacen.add({clave : clave,titulo :  titulo, fecha : fecha} );
	
	agregar.addEventListener("success",mostrar,false);
	
	document.getElementById("clave").value="";
	document.getElementById("texto").value="";
	document.getElementById("fecha").value="";
	
}

function mostrar(){
	zanadatos.innerHTML="";
	var transaccion= bd.transaction(["gente"],"readonly");
	var almacen = transaccion.objectStore("gente");
	
	var cursor= almacen.openCursor();
	
	cursor.addEventListener("success",mostrarDatos,false);	
}

function mostrarDatos(e){
	var cursor = e.target.result;
	
	if(cursor){
		zanadatos.innerHTML+="<div>"+cursor.value.clave +"__"+ cursor.value.titulo +" __ "+ cursor.value.fecha+ "</div>";
		cursor.continue();
	}
}




window.addEventListener("load",iniciar,false);