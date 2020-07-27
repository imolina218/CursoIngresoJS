function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioEstadia;
	var descuento;
	estacionIngresada=txtIdEstacion.value;
	destinoIngresado=txtIdDestino.value;
	precioEstadia=15000

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Precio de estadia: $"+precioEstadia*1.2);
					break;
				case "Cataratas":
				case "Cordoba":
					alert("Precio de estadia: $"+(precioEstadia-precioEstadia*0.1));
					break;
				case "Mar del plata":
					alert("Precio de estadia: $"+(precioEstadia-precioEstadia*0.2));
					break;
				default:
					alert("Precio de estadia: $"+precioEstadia);
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Precio de estadia: $"+(precioEstadia-precioEstadia*0.2));
					break;
				case "Cataratas":
				case "Cordoba":
					alert("Precio de estadia: $"+(precioEstadia*1.1));
					break;
				case "Mar del plata":
					alert("Precio de estadia: $"+(precioEstadia*1.2));
					break;
				default:
					alert("Precio de estadia: $"+precioEstadia);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Precio de estadia: $"+(precioEstadia*1.1));
					break;
				case "Cataratas":
					alert("Precio de estadia: $"+(precioEstadia*1.1));
					break;
				case "Mar del plata":
					alert("Precio de estadia: $"+(precioEstadia*1.1));
					break;
				default:
					alert("Precio de estadia: $"+precioEstadia);
					break;
			}
			break;
	}
}//FIN DE LA FUNCIÓN