function comparacion(){
   
var num=document.getElementById('CajaTexto1').value;
var uni,dec,cent,um,dm;
 var   resultado=0;
    resultado=parseInt(resultado);

         uni = num % 10;
		 num = num / 10;
		 
		 dec = num % 10;
		 num = num / 10;
		
		 cent = num % 10;
		 num = num / 10;
		 
		 um = num % 10;
		 num = num / 10;
		
		 dm = num;
		resultado=(uni+dec+cent+um+dm);
	
    
     resultado=document.getElementById('CajaTexto3').value=resultado;
}