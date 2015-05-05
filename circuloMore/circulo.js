var circulo = function(datos, ctx){
	
	rad = (Math.PI/180)*360;
	ctx.beginPath();
	
		centroX = datos.centroX;
		centroY = datos.centroY;
		R = datos.radio;

		ctx.strokeStyle = datos.color; //red
		ctx.arc(centroX,centroY,R,0,rad,true);

	ctx.closePath();
	ctx.stroke();
				
};

var punto = function(datos, ctx){
	
	rad = (Math.PI/180)*360;
	ctx.beginPath();
	
		centroX = datos.centroX;
		centroY = datos.centroY;
		R = datos.radio;

		ctx.strokeStyle = 'red'; //red
		ctx.arc(centroX,centroY,R,0,rad,true);
	ctx.closePath();
	ctx.stroke();
				
};