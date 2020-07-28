/*
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/
function mostrar()
{
	var edad;
	var estado_civil;
	var mensaje;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado_civil=estadoCivil.value;

	if (edad>17)
	{
		mensaje="se responsable";
		switch(estado_civil)
		{
			case "Soltero":
				mensaje=mensaje+" a vivir la vida";
				break;
			case "Casado":
				mensaje=mensaje+" a disfrutar la pareja";
				break;
			case "Divorciado":
				mensaje=mensaje+" a intentarlo nuevamente";
				break;
		}
		if (edad>60)
		{
			mensaje=mensaje+" sos  persona de riesgo";
		}
	}else
	{
		mensaje="respeta a tus mayores";
		if (edad<13)
		{
			mensaje=mensaje+" hagan la tarea";
		}else
		{
			switch(estado_civil)
			{	
				case "Divorciado":
				case "Casado":
					mensaje=mensaje+" sos muy joven para no ser soltero";
					break;
			}
		}
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN