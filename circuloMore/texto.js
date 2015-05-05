
// Funcion que crea el texto
var texto = function(datos, ctx){
	ctx.beginPath();
	ctx.font = "16px Georgia";
	ctx.fillText(datos.text, datos.x1, datos.y1);
	ctx.closePath();
	ctx.stroke();
};