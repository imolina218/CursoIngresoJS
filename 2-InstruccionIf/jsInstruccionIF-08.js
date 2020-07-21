function mostrar()
{
	var edad;
	var estado_civil;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado_civil=estadoCivil.value;
	
	if (edad>17)
	{
		if (estado_civil=="Soltero")
		{
			alert("Es soltero y no es menor.");
		}
	}

	/*
	if (edad>17&&estado_civil=="Soltero")
	{
		alert("Es soltero y no es menor.");
	}
	*/
}//FIN DE LA FUNCIÓN