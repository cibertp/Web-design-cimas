// JavaScript Document

var elem_origin;
var elem_destino;
	
	function comenzar(){
		elem_origin = document.getElementById("imagen");
		elem_origin.addEventListener("dragstart",comenzamos_arrastrar,false);
		
		elem_destino= document.getElementById("zonadestino");
		
		//elem_destino.addEventListener("gragenter",function(e){e.preventDefault();},false);
		elem_destino.addEventListener("dragover",function(e){e.preventDefault();},false);		
		elem_destino.addEventListener("drop",soltado,false);
		
		elem_origin.addEventListener("dragend",terminado,false); //cuando terminas jalar el evento sirve esto
		elem_destino.addEventListener("dragenter",entrando,false);
		
		elem_destino.addEventListener("dragleave",saliendo,false);
		
	}

function comenzamos_arrastrar(e){
	var codigo= "<img src='"+ elem_origin.getAttribute("src")+ "'>" ;
	
	e.dataTransfer.setData("Text",codigo);
}
//sona destino
function soltado(e){
	e.preventDefault();
	elem_destino.innerHTML=e.dataTransfer.getData("Text");
}


function terminado(e){
	var elemento= e.target;
	elemento.style.visibility="hidden";
}

function entrando (e){
	e.preventDefault();
	elem_destino.style.background="red";
}


function saliendo(e){
	e.preventDefault();
	//elem_destino.style.background="#fff";
	elem_destino.style.visibility="hidden";
}

	window.addEventListener("load",comenzar,false);





/*

		//var comienzo=elem_origin.addEventListener("dragstart",function(){alert("comenzo el evento");},false);
		//var final=elem_origin.addEventListener("dragend",function(){alert("comenzo el evento");},false);		
		//var arrastrando = elem_origin.addEventListener("drag",function(){alert("tiempo de arrastrado");},false)


*/