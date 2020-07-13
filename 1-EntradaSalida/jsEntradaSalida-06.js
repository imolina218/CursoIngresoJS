/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;

	//numeroUno = txtIdNumeroUno.value
	numeroUno = parseInt(txtIdNumeroUno.value) //numeroUno
	numeroDos = parseInt(txtIdNumeroDos.value)

	alert("la suma es "+(numeroUno+numeroDos))
}

