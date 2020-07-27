function mostrar()
{
	var destinoIngresado 
	destinoIngresado=txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Cordoba":
			alert("Sur");
			break;
	}
}//FIN DE LA FUNCIÓN