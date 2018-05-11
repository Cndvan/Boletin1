function comparacion(){
   
var num=document.getElementById('CajaTexto1').value;
var resultado=0;
    
    
    	if(num<=4){
			resultado=("Insuficiente");	
		}
		else if(num<=7 && num>=5){
			resultado=("Suficiente");	
		}
		else if(num<=10 && num>7){
			resultado=("Bien");	
		}
		else{
			resultado=("El número ingresado no es correcto");	
		}
    
     resultado=document.getElementById('CajaTexto3').value=resultado;
}