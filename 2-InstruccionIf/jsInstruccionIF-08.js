function mostrar()
{
	var edad;
	var estado_civil;

	edad=txtIdEdad.value;
	estado_civil=estadoCivil.value;
	
	if (edad>17&&estado_civil=="Soltero")
	{
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN