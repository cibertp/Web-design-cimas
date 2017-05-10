/* 
	este caso los mismos son parecido la unica diferencia es que local store mantiene en el navegador temporalemente
	no importa si cerraste el navegador siempre estara activa mientra que el otro solo es un dereminado teiimpo nada mas
	//localStorage // sessionStorage
*/



function comenzar(){
	var boton = document.getElementById("grabar");
	boton.addEventListener("click",itemNuevo,false);	
	
}

function itemNuevo(){
	var clave= document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;
	localStorage
	localStorage.setItem(clave,valor);
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
	
	for(i=0;i<localStorage.length;i++){
		var clave = localStorage.key(i);
		var elvalor=localStorage.getItem(clave);
		
		//zonadatos.innerHTML+='<div>Clave : '+clave+ '__' +'Valor :'+ elvalor + '<br>';
		zonadatos.innerHTML+='<div>Clave : '+clave+ '__' +'Valor :'+ elvalor + '<br><button onclick="eleminarItem(\''+ clave +'\')">Eliminar</botton></div>';
	}
		
}
//todo bien
function Elimnartodo(){
		if(confirm("esta seguro?")){
		   localStorage.clear();
			leer_mostrar();
		   }
	
}

function eleminarItem(clave){
	if(confirm("esta seguro")){
		localStorage.removeItem(clave);
		leer_mostrar();
	}
}

window.addEventListener("load",comenzar,false);
