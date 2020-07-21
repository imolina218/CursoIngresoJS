function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad>18)
	{
		alert("mayor de edad");
	}else
	{
		if (edad>12)
		{
			alert("adolescente");
		}else
		{
			alert("niño");
		}
	}
	/*
	if (edad>12&edad<18)
	{
		alert("adolescente");
	}
	else if (edad>17)
	{
		alert("es mayor de edad");
	}
	else
	{
		alert("niño")
	}*/

}//FIN DE LA FUNCIÓN