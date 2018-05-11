function comparacion(){
   
var numero1=document.getElementById('CajaTexto1').value;

var resultado=0;
    if(numero1>0){
        resultado=("El número es positivo");
    }
    else
        resultado=("El número es negativo");
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
}