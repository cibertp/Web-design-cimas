// JavaScript Document



function comenzar(){
	var boton = document.getElementById("grabar");
	boton.addEventListener("click",itemNuevo,false);
	
	
}

function itemNuevo(){
	var clave= document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	
	sessionStorage.setItem(clave,valor);
	//sessionStorage[clave].valor;
	leer_mostrar(clave);
		var clave= document.getElementById("clave").value="";
		var valor = document.getElementById("valor").value="";
}

function leer_mostrar(clave){
	
	var zonadatos= document.getElementById("zonadatos");
	
	
	//zonadatos.innerHTML='<div><button type="button" onclick="Elimnartodo()" >Click Me!</button></div>';
	zonadatos.innerHTML='<div><button  onclick="Elimnartodo()">Eliminar todo </button></div>';
	
		//var elvalor= sessionStorage[clave];
	//zonadatos.innerHTML="";
	
	for(i=0;i<sessionStorage.length;i++){
		var clave = sessionStorage.key(i);
		var elvalor=sessionStorage.getItem(clave);
		
		//zonadatos.innerHTML+='<div>Clave : '+clave+ '__' +'Valor :'+ elvalor + '<br>';
		zonadatos.innerHTML+='<div>Clave : '+clave+ '__' +'Valor :'+ elvalor + '<br><button onclick="eleminarItem(\''+ clave +'\')">Eliminar</botton></div>';
	}
	
	
	
}
//todo bien
function Elimnartodo(){
		if(confirm("esta seguro?")){
		   sessionStorage.clear();
			leer_mostrar();
		   }
	
}

function eleminarItem(clave){
	if(confirm("esta seguro")){
		sessionStorage.removeItem(clave);
		leer_mostrar();
	}
}


window.addEventListener("load",comenzar,false);





/*function comenzar (){
	var boton = document.getElementById("grabar");
	
	boton.addEventListener("click",itemNuevo,false);
}

function itemNuevo(){
	var clave = document.getElementById("clave").value;
	var valor= document.getElementById("valor").value;
	
	sessionStorage.setItem(clave,valor);
	//sessionStorage[clave]=valor;
	
	leer_mostrar(clave);
	
	document.getElementById("clave").value=""; 
	document.getElementById("valor").value=""; 
	
}

function leer_mostrar(clave){
	var zonadatos = document.getElementById("zonadatos");

	zonadatos.innerHTML='<div><button onclick=" eliminarTodo()">Eliminar todo+'<br></button></div>';
	
	//var elvalor=sessionStorage[clave];
	//zonadatos.innerHTML="";
	for(i=0;i<sessionStorage.length;i++){
		var clave = sessionStorage.key(i);
		var elvalor= sessionStorage.getItem(clave);
	//zonadatos.innerHTML+="<div> clave :"+ clave + " __" +"el valor :"+ elvalor  + "</div>";
	zonadatos.innerHTML+=' <div> clave : '+ clave  + ' __' +' el valor :'+ elvalor  + '<br><button onclick="eliminarItem(\''+ clave +'\')">Eliminar</button></div>';
	
	}
	
}


function eliminarTodo(){
	
	if(confirm("estas seguro ?")) {
		sessionStorage.clear();
		leer_mostrar();
	}
}
function eliminarItem(clave){
	if(confirm("esta seguro?")
	
}
z

window.addEventListener("load",comenzar,false);*/