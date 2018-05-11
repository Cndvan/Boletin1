function comparacion(){
   
var num=document.getElementById('CajaTexto1').value;
var resultado=0;
    if(num<10){
			resultado=("El número ingresado tiene una cifra");
		}
		else if(num<100){
			resultado=("El número ingresado tiene dos cifras");
		}
		else if(num<1000){
			resultado=("El número ingresado tiene tres cifras");
		}
		else if(num<10000 && num>=1000){
			resultado=("El número ingresado tiene cuatro cifras");
		}
    
     resultado=document.getElementById('CajaTexto3').value=resultado;
}