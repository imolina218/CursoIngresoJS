/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var radio;
	var alambreTotal;

	ancho = txtIdAncho.value
	ancho = parseFloat(ancho)

	largo = txtIdLargo.value
	largo = parseFloat(largo)

	radio = ancho*2+largo*2

	txtIdRadio.value = radio

	alambreTotal = radio*3

	alert("Cantidad de alambre necesaria: "+alambreTotal+" metros")
}
function Circulo () 
{
	var radio;
	var longitud;
	var alambreTotal;

	radio = txtIdRadio.value;
	radio = parseFloat(radio);

	longitud = (radio*2)*3.14;

	alambreTotal = longitud*3;

	alert("La cantidad de alambre necesaria es: "+alambreTotal+" metros")
}
function Materiales () 
{
	var ancho;
	var largo;
	var cemento;
	var cal;

	ancho = txtIdAncho.value
	ancho = parseFloat(ancho)

	largo = txtIdLargo.value
	largo = parseFloat(largo)

	cemento = (largo*ancho)*2
	cemento = parseInt(cemento)

	cal = (largo*ancho)*3
	cal = parseInt(cal)

	alert("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.")
}