// JavaScript Document
/*ultimsare la propiedades del video
		------------
		PROPIEDADES
		------------
	duration--> la duracion del video
	currentTime --> tiempo actual del video
	paused -->video pausado
	ended video finalizado
		---------
		 METODOS
		--------
		play()
		pause()

*/


var mivideo,reproducir,barra,progreso;

function comenzar(){
	
	mivideo=document.getElementById("mivideo");
	reproducir=document.getElementById("reproducir");
	barra=document.getElementById("barra");
	progreso=document.getElementById("progreso");
	
	
	reproducir.addEventListener("click",clicando,false);
	progreso.addEventListener("click",adelantando,false);
}



function clicando(){
	if((mivideo.paused==false) &&(mivideo.ended==false)){
		mivideo.pause();
		reproducir.innerHTML="play";
		
	}else{
		mivideo.play();
		reproducir.innerHTML="pause";
	}
	
}


window.addEventListener("load",comenzar,false);