function mostrar()
{
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			alert("FRIO");
			break;
		case "Cataratas":
			alert("CALOR");
			break;
		case "Mar del plata":
			alert("CALOR");
			break;
		case "Cordoba":
			alert("FRIO");
			break;
	}

}//FIN DE LA FUNCIÓN