/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat(precioUno)

	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat(precioDos)

	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat(precioTres)

	suma = precioUno+precioDos+(precioTres)

	alert(suma)
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat(precioUno)

	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat(precioDos)

	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat(precioTres)

	promedio = (precioUno+precioDos+precioTres)/3

	alert(promedio)
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	//var IVA;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat(precioUno)

	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat(precioDos)

	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat(precioTres)

	suma = precioUno+precioDos+precioTres

	// Sólo el IVA 
	//IVA = suma*0.21

	total = suma*1.21

	alert("Precio final: $"+total)
}