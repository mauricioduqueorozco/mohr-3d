



window.onload = function() {
	document.body.style.background = "#f3f3f3";
	//var c = document.getElementById("myCanvas");
	var canvas = document.createElement("canvas");
	canvas.width = 800;
    canvas.height = 400;
    document.body.appendChild(canvas);
		var ctx = canvas.getContext("2d");


	var init = function(value, desplazamientosX, desplazamientosY){
		value = value || 1;
		desplazamientosX = desplazamientosX || 1;
		desplazamientosY = desplazamientosY || 1;
		console.log(Math.round(value * 10) / 10);

		ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );

		var desplazamientoX = desplazamientosX * (canvas.width / 2) ;
		var desplazamientoY = desplazamientosY * (canvas.height / 2);

		var phi1 = value * text.esfuerzo_1;
		var phi2 = value * text.esfuerzo_2;
		var phi3 = value * text.esfuerzo_3;



		var c1 = centro({s1 : phi1,
				s2 : phi2});

		var c2 = centro({s1 : phi2,
				s2 : phi3});

		var c3 = centro({s1 : phi1,
				s2 : phi3});

		//Radio Medio
		var r1 = radio({R1 : phi1,
				R2 : phi2});
		// Radio pequeno
		var r2 = radio({R1 : phi2,
				R2 : phi3});
		// Radio Grande 
		var r3 = radio({R1 : phi1,
				R2 : phi3});
		var rmat = [r1,r2,r3];
		var cmat = [c1,c2,c3];
		var min = Math.min.apply(null, rmat),
    		max = Math.max.apply(null, rmat);

    	var cmax = rmat.indexOf(max);

    	console.log(cmax)
    	console.log(max)
		
		var phi_max = 2 * max + 2 * min;
		var phi_min = 2 * min;
		var T_max = 1/2 * (phi_max - phi_min);

		
		// Circulo Medio
		circulo({
				centroX : c1 + desplazamientoX,
				centroY : desplazamientoY,
				radio : r1,
				color : 'red'
		},ctx); 

		// Circulo pequeno
		circulo({
				centroX : c2 + desplazamientoX,
				centroY : desplazamientoY,
				radio : r2,
				color : 'black'
		},ctx); 

		// Circulo Grande
		circulo({
				centroX : c3 + desplazamientoX,
				centroY : desplazamientoY,
				radio : r3,
				color : 'green'
		},ctx); 

		// punto alto
		punto({
				centroX : cmat[cmax] + desplazamientoX,
				centroY : desplazamientoY - max,
				radio : 2
		},ctx);
		
		// punto bajo
		punto({
				centroX : c3 + r3 + desplazamientoX,
				centroY : desplazamientoY,
				radio : 2
		},ctx);

		// punto a la derecha
		punto({
				centroX : c3 - r3 + desplazamientoX,
				centroY : desplazamientoY,
				radio : 2
		},ctx);

		// punto a la izquierda
		punto({
				centroX : c2 + r2 + desplazamientoX,
				centroY : desplazamientoY,
				radio : 2
		},ctx);

		// linea central
		linea({x1 : c2 - 3 * r2 - 20 + desplazamientoX,
				y1 : desplazamientoY,
				x2: c1 + r1 + 20 + desplazamientoX,
				y2: desplazamientoY,
				color : 'black'
		},ctx);

		// linea vertical
		linea({x1 : c2 - 3 * r2 + desplazamientoX,
				y1 : desplazamientoY - max,
				x2: c2 - 3 * r2 + desplazamientoX,
				y2: max + desplazamientoY,
				color : 'black'
		},ctx);

		// texto
		texto({ x1 : c1 + r1 + 3 + desplazamientoX,
				y1 : desplazamientoY,
				text : 'A'
		},ctx);

		//texto
		texto({ x1 : c2 + r2 + 3 + desplazamientoX,
				y1 : desplazamientoY,
				text : 'B'
		},ctx);

		//texto
		texto({ x1 : c3 - r3 - 15 + desplazamientoX,
				y1 : desplazamientoY,
				text : 'C'
		},ctx);

		texto({ x1 : cmat[cmax] + desplazamientoX,
				y1 : desplazamientoY - max,
				text : 'τ_max'
		},ctx);

		texto({ x1 : c2 - 3 * r2 + desplazamientoX,
				y1 :  desplazamientoY - max,
				text : 'τ'
		},ctx);

		texto({ x1 : c2 - 3 * r2 + desplazamientoX - 20,
				y1 :  desplazamientoY,
				text : 'O'
		},ctx);

		//ctx.rotate(20 * Math.PI / 180);
		
		texto({ x1 : 10,
				y1 : 18 * 2,
				text : 'Centro 1: ' + (Math.round(c1 / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 3,
				text : 'Centro 2: ' + (Math.round(c2 / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 4,
				text : 'Centro 3: ' + (Math.round(c3 / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 5,
				text : 'Radio 1: ' + (Math.round(r1 / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 6,
				text : 'Radio 2: ' + (Math.round(r2 / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 7,
				text : 'Radio 3: ' + (Math.round(r3 / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 8,
				text : 'σ_max: ' + (Math.round(phi_max / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 9,
				text : 'σ_min: ' + (Math.round(phi_min / value * 10) / 10)
		},ctx);

		texto({ x1 : 10,
				y1 : 18 * 10,
				text : 'τ_max: ' + (Math.round(T_max / value * 10) / 10)
		},ctx);

		ctx.strokeStyle = "black";
			ctx.lineWidth = 2;
			ctx.stroke();

		return(phi_max);
	};

	var FizzyText = function() {
	  this.esfuerzo_1 = 200;
	  this.esfuerzo_2 = 100;
	  this.esfuerzo_3 = 50;
	  this.maxSize = 1.0;
	  this.maxSizeX = 1.0;
	  this.maxSizeY = 1.0;	  
	 
	  this.calcular = function() {
	  	init();
	  };

	};
	var text = new FizzyText();
	  var gui = new dat.GUI();
	  gui.add(text, 'esfuerzo_1');
	  gui.add(text, 'esfuerzo_2');
	  gui.add(text, 'esfuerzo_3');
	  gui.add(text, 'calcular');
	  
	  var controller = gui.add(text, 'maxSize', 0, 10);
	  var controllerX = gui.add(text, 'maxSizeX', 0, 10);
	  var controllerY = gui.add(text, 'maxSizeY', 0, 10);

	controller.onChange(function(value) {
		  init(value,1,1);
	});
	controllerX.onChange(function(valueX) {
		  init(1,valueX,1);
	});
	controllerY.onChange(function(valueY) {
		  init(1,1,valueY);
	});

	gui.message = 100;
	  
};

