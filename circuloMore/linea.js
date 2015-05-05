var linea = function(datos, ctx){
	ctx.beginPath();
	ctx.strokeStyle = datos.color; 
	ctx.moveTo(datos.x1, datos.y1);
		ctx.lineTo(datos.x2, datos.y2);
	ctx.closePath();
	ctx.stroke();
};