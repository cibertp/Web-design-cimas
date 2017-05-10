// JavaScript Document


function comenzar(){
	var miboton = document.getElementById("dame_ubicacion");
	
	miboton.addEventListener("click",obtener,false);
}

function obtener(){
	navigator.geolocation.getCurrentPosition(mostrar_posicion);
}

function mostrar_posicion(poscicion){
	var ubicacion = document.getElementById("ubicacion");
	//var latitud = "latitud"+ poscicion.coords.latitude;
//	ubicacion.innerHTML=latitud;
	var miubicacion="";
	
	
	miubicacion+= "latitud :"+ poscicion.coords.latitude+ "<br>";
	miubicacion+= "Longitud :"+ poscicion.coords.longitude + "<br>";
	miubicacion+= "Exactitud :"+ poscicion.coords.accuracy + "<br>";
	ubicacion.innerHTML=miubicacion;
}





window.addEventListener("load",comenzar,false);