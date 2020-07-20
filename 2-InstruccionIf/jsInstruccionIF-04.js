function mostrar()
{
	//tomo la edad  
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad>12)
	{
		if (edad<18)
		{
			alert("Es adolescente");
		}
	}
}//FIN DE LA FUNCIÓN