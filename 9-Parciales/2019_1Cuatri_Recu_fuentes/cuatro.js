function mostrar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Ingrese el primer numero");
	numeroDos = prompt("Ingrese el segundo numero");

	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);

	if (numeroUno==numeroDos){
		alert(numeroUno**2);
	}
	if (numeroUno%numeroDos==0){
		alert(numeroUno-numeroDos);
	}else{
		alert(numeroUno%numeroDos);
	}
	if (numeroUno%numeroDos>3){
		alert(numeroUno%numeroDos);
	}
}
