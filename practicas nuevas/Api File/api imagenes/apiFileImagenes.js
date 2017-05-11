
// JavaScript Document

function comenzar(){
	zonadato= document.getElementById("zonadatos");
	var archivos = document.getElementById("archivos");
	
	archivos.addEventListener("change",procesar,false);
	
}

function procesar(e){
	var archivos =e.target.files;
	
	zonadato.innerHTML="";
	var mi_archivo= archivos[0];
	
	
	if(!mi_archivo.type.match(/image/)){
		alert("selecine la imagen ");
	}else{
		zonadato.innerHTML+="Nombre del archivo :"+ mi_archivo.name+ "<br>";
		zonadato.innerHTML+="tamaño del archivo : "+Math.round(mi_archivo.size/1024) + " kb <br>";
		var lector = new FileReader();
		
		lector.readAsDataURL(mi_archivo);
		lector.addEventListener("load",mostrar_en_web,false);
	}		
	
}

function mostrar_en_web(e){
	var resultado = e.target.result;
	zonadato.innerHTML+= "<img src='"+resultado+"' width='85%' >";
}


window.addEventListener("load",comenzar,false);