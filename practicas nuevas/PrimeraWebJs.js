// JavaScript Document


function prueba(){
	var a= alert("este es un menaje");
}

function mensaje(){
	//recuerde que querySelector devuelve el primer elemento
	/*document.querySelector(".importante").onclick=prueba;*/
	//indicamos el div con id principa y aremos a el ultimo elemento
	/*document.querySelector("#principal p:last-child").onclick=prueba;*/
	
	
	//querySelector
	var elementos=document.querySelectorAll("#principal p, span");
	for(var i=0; i<elementos.length;i++) {
		
		
		elementos[i].onclick=prueba;
	}
	
}

window.onload=mensaje;



//alt +  34 "
//alt +40 41  ()
//alt +123   125 {}

/*function practica(){
	alert("esta es una etiqueta header");
}

function practicap(){
	for(var i=0;i<5;i++){
		document.getElementsByTagName("header")[i].onclick=practica;
		
	}
}
window.onload=practicap;
*/