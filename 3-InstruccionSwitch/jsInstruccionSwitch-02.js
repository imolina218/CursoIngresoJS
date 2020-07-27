function mostrar()
{
	//tomo el mes
	var mesDelAño
	mesDelAño=txtIdMes.value;

	switch(mesDelAño)
	{
		case "Abril":
		case "mayo":
			console.log("Falta para el invierno.");
			break;
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
			console.log("Abrigate que hace frio.");
			break;
		default:
			console.log("Ya pasamos el frio, ahora calor.")
			break;
	}
}//FIN DE LA FUNCIÓN