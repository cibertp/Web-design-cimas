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


var mivideo,reproducir,barra,progreso, ;
var maximo=600;

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
		/*estado;
		//1000 milisegundo
		bucle=setInterval(estado,1000);*/
	}
	
}

/*function estado(){
	if(mivideo.ended==false){
		var total= parseInt(mivideo.currentTime*maximo/mivideo.duration);
		
		progreso.style.width=total+"px";
	}
}
*/


window.addEventListener("load",comenzar,false);

