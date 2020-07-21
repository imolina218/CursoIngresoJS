function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	notaRandom= Math.floor((Math.random()*10) + 1);

	if (notaRandom>8)
	{	
		alert("EXCELENTE ");
		/*
		if (notaRandom<11)
		{
			alert("EXCELENTE "+notaRandom);
		}
		*/
	}else
	{
		if (notaRandom>4)
		{
			alert("APROBÓ ");
		}else
		{
			alert("Vamos, la proxima se puede ")
		}
	}
		
}//FIN DE LA FUNCIÓN