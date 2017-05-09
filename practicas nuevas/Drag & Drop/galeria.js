// JavaScript Document
var elem_destino;

function comenzar(){
	//queri celencto devuevel un arrary
	var imagenes=document.querySelectorAll("#cajaimagen img");
	
	for	(var i=0; i<imagenes.length;i++){
		
		
		imagenes[i].addEventListener("dragstart",comenzar_arrastrar,false);
		
		if(i!=1){
		imagenes[i].addEventListener("dragend",terminar,false);
			}
	}
	elem_destino=document.getElementById("zonadestino");
	elem_destino.addEventListener("dragenter",entrando,false);	
	elem_destino.addEventListener("dragover",function(e){e.preventDefault();},false);
	elem_destino.addEventListener("drop",soltado,"false");	
	elem_destino.addEventListener("dragleave",saliendo,false);
	
}

function comenzar_arrastrar(e){
	
	var elemento = e.target;
	e.dataTransfer.setData("Text",elemento.getAttribute("id"));
	
	
	
}

function soltado(e){
	e.preventDefault();
	var id= e.dataTransfer.getData("Text");
	if(id!="imagen2"){ 
	var src= document.getElementById(id).src;
	
	elem_destino.innerHTML= "<img src='" + src + "'>";
	}else{
		
	var letra=elem_destino.innerHTML="Esta imagen no puede ser jalado al panel ' juventud divino tesoro'";
		
		
		elem_destino.style.background="#ff2";
	}
}

function entrando(e){
	e.preventDefault();
	elem_destino.style.background="#f54";
}

function saliendo(e){
	e.preventDefault();
	//elem_destino.style.visibility="hidden";
	var id=e.dataTransfer.getData("Text");
	
	if(id!="imagen2"){
	elem_destino.style.background="#fff";
		
		elem_destino.style.background="#f00";
		
		 }
	}


function terminar(e){
	var elemento = e.target;
	elemento.style.visibility="hidden";
}



window.addEventListener("load",comenzar,false);