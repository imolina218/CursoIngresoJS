/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precio;
 	var descuento;
 	var IIBB;

 	cantidad = txtIdCantidad.value;
 	cantidad = parseInt(cantidad);
 	marca = Marca.value;
 	precio = 35;
 	precio = precio*cantidad;

 	if (cantidad>5)
 	{
 		descuento = precio*0.5;
 		precio = precio-descuento;
 	}else
 	{
 		if (cantidad==5)
 		{
 			if (marca=="ArgentinaLuz")
 			{
		 		descuento = precio*0.4;
		 		precio = precio-descuento;
 			}else
 			{
		 		descuento = precio*0.3;
		 		precio = precio-descuento;
 			}
 		}else
 		{
 			if (cantidad==4)
 			{
 				if (marca=="ArgentinaLuz"||marca=="FelipeLamparas")
 				{
			 		descuento = precio*0.25;
			 		precio = precio-descuento;
 				}else
 				{
			 		descuento = precio*0.2;
			 		precio = precio-descuento;
 				}
 			}else
 			{
 				if(cantidad==3){
 					if (marca=="ArgentinaLuz")
 					{
				 		descuento = precio*0.15;
				 		precio = precio-descuento;
 					}else
 					{
	 					if (marca=="FelipeLamparas")
	 					{
					 		descuento = precio*0.1;
							precio = precio-descuento;
	 					}else{
					 		descuento = precio*0.05;
					 		precio = precio-descuento;
	 					}
 					}
 				}
 			}
 		}
 	}
 	if (precio>120)
 	{
 		IIBB = precio*0.1;
 		alert("IIBB Usted pago $"+IIBB)
 		precio = precio+IIBB;
 		txtIdprecioDescuento.value = "$"+precio.toFixed(2);
 	}else
 	{
 		txtIdprecioDescuento.value = "$"+precio.toFixed(2);
 	}
}
