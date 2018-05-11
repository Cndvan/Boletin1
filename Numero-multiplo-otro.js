function comparacion(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
var resultado=0;
    if(numero1%numero2==0){
        resultado=("Los numeros son multiplos");
    }
    else
        resultado=("Los numeros no son multiplos");
    
    resultado=document.getElementById('CajaTexto3').value=resultado;
}