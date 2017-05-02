// JavaScript Document
function mensaje(){
	alert("este es un evento");
}

var elemento;
function accionEvento(){
	for(var i=0; i<elemento.length;i++){
		var elemento=document.getElementsByTagName("img")[0];
	elemento=addEventListener("mouseover",crecer,false);
	elemento= addEventListener("mouseover",menguar,false);
	elemento=addEventListener("click",mensaje,false);
	}
	
	
}


function crecer(){
	elemento.width=250px;
	elemento.height=250px;
}

function menguar(){
	elemento.width=200px;
	elemento.height=200px;
	
}
	
	window.onload=accionEvento;