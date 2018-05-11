function comparacion(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
var resultado=0;
    if(numero1!=numero2){
        resultado=("Los números no son iguales");
    }
    else
        resultado=("Los números son iguales");
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
}