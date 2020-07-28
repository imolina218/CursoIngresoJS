/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 /*
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


/* 
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 /*
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	
 	var descuentoCalculado;
 	var porcentaje;
 	var precioFinal;
 	var aumentoIIBB;


 	
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
 	//testing
 	//console.log(marcaLamparas+" "+cantidadLamparas);
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
						
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}






	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
				porcentaje=10;	
				}else
				{
					porcentaje=5;	
				}
			}
			break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
			{
	 			porcentaje=25;
			}else
			{
	 			porcentaje=20;
			}

			break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else if(cantidadLamparas==5 )
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
 		porcentaje=40;
		}else
		{
 		porcentaje=30;
		}
	}
	else if(cantidadLamparas==4)
	{
		if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
		{
 		porcentaje=25;
		}else
		{
 		porcentaje=20;
		}
	}else if(cantidadLamparas==3)
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
			porcentaje=15;
		}else if(marcaLamparas=="FelipeLamparas")
		{
		porcentaje=10;	
		}else
		{
			porcentaje=5;	
		}
		
	}
	
	
 	


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else
 	{
 		if(cantidadLamparas==5 )
 		{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
 				{
			 		porcentaje=25;
 				}else
 				{
			 		porcentaje=20;
 				}
 			}else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marcaLamparas=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}else
 					{
 						if(marcaLamparas=="FelipeLamparas")
 						{
							porcentaje=10;	
 						}else
 						{
 							porcentaje=5;	
 						}
 					}
 				}
 			}
 		}
 	}


 	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuentoCalculado;
	aumentoIIBB=0;
	if(precioFinal>120)
	{
		aumentoIIBB=precioFinal*10/100;
		alert("Usted p/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	
 	var descuentoCalculado;
 	var porcentaje;
 	var precioFinal;
 	var aumentoIIBB;


 	
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
 	//testing
 	//console.log(marcaLamparas+" "+cantidadLamparas);
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
						
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}






	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
				porcentaje=10;	
				}else
				{
					porcentaje=5;	
				}
			}
			break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
			{
	 			porcentaje=25;
			}else
			{
	 			porcentaje=20;
			}

			break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else if(cantidadLamparas==5 )
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
 		porcentaje=40;
		}else
		{
 		porcentaje=30;
		}
	}
	else if(cantidadLamparas==4)
	{
		if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
		{
 		porcentaje=25;
		}else
		{
 		porcentaje=20;
		}
	}else if(cantidadLamparas==3)
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
			porcentaje=15;
		}else if(marcaLamparas=="FelipeLamparas")
		{
		porcentaje=10;	
		}else
		{
			porcentaje=5;	
		}
		
	}
	
	
 	


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else
 	{
 		if(cantidadLamparas==5 )
 		{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
 				{
			 		porcentaje=25;
 				}else
 				{
			 		porcentaje=20;
 				}
 			}else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marcaLamparas=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}else
 					{
 						if(marcaLamparas=="FelipeLamparas")
 						{
							porcentaje=10;	
 						}else
 						{
 							porcentaje=5;	
 						}
 					}
 				}
 			}
 		}
 	}


 	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuentoCalculado;
	aumentoIIBB=0;
	if(precioFinal>120)
	{
		aumentoIIBB=precioFinal*10/100;
		alert("Usted pago "+aumentoIIBB+" de IIBB.")
	}
 	txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}
ago "+aumentoIIBB+" de IIBB.")
	}
 	txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}


*/ 
	var cantidadDeLamparas;
    var marca;
    var precioBruto;
    var descuento;
    var precioConDescuento;

    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    marca = Marca.value;
    precioBruto = cantidadDeLamparas * 35;

    switch(cantidadDeLamparas)
    {
        case 5:
        switch(marca)
        {
            case "ArgentinaLuz":
            descuento = 40;
            break;
            default:
            descuento = 30;
            break;
        }
        case  4:
        switch(marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
            descuento = 25;
            break;
            default:
            descuento = 20;
            break;
        }

        case 3:
        switch(marca)
        {
            case "ArgentinaLuz":
            descuento = 15;
            break;
            case "FelipeLamparas":
            descuento = 10;
            break;
            default:
            descuento = 5;
            break;
        }
        break;
        case 1:
        case 2:
        descuento = 0;
        break;
    }

    precioConDescuento = precioBruto - precioBruto *  descuento/100;
    alert("Y este es el descuento",precioConDescuento);
    txtIdprecioDescuento.value = precioConDescuento.value;