// JavaScript Document


function comenzar(){
	var miboton = document.getElementById("dame_ubicacion");
	
	miboton.addEventListener("click",obtener,false);
}

function obtener(){
    var parametros={enbleHighAccuracy:true, timeout:10000,maximumAge:60000};//parametro para que se actualizae 1 minuto	navigator.geolocation.getCurrentPosition(mostrar_posicion,gestion_errores,parametros);
    //var parametros={enbleHighAccuracy:true, timeout:10000,maximumAge:60000};	navigator.geolocation.watchPosition(mostrar_posicion,gestion_errores,parametros);  //esto es para celulares 
}

function mostrar_posicion(poscicion){
	var ubicacion = document.getElementById("ubicacion");
	//var latitud = "latitud"+ poscicion.coords.latitude;
//	ubicacion.innerHTML=latitud;
	/*
	var miubicacion="";	
	
	miubicacion+= "latitud :"+ poscicion.coords.latitude+ "<br>";
	miubicacion+= "Longitud :"+ poscicion.coords.longitude + "<br>";
	miubicacion+= "Exactitud :"+ poscicion.coords.accuracy+"<br>";*/
	
	var mimapa="http://maps.google.com/maps/api/staticmap?center="+ poscicion.coords.latitude+ ","+ poscicion.coords.longitude+ ","+  "&zom=12&size=400x400&sensor=false&markers="+posicion.coords.latitude + ","+position.coords.longitude;
	
	ubicacion.innerHTML="<img src'"+ mimapa +" ' >";
}
function gestion_errores(error){
	//alert("error ocurrido"++ error.code+ " "+ error.message;

	if(error.message="User denied Geolocation"){
		alert("deves de permitir tu ubicacion para utilizar este programa");
	}if(error.code==1){
		alert("deves de permitir tu ubicacion para utilizar este programa");
	}
	
}





window.addEventListener("load",comenzar,false);