
//Funcion que calcula los radios
var radio = function(r){
	var R = (r.R1 - r.R2) / 2;
	if (R < 0){
		R = R * (-1);
	}
	return(R);
};