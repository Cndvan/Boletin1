function comparacion(){
   
var numero1=document.getElementById('CajaTexto1').value;
var numero2=document.getElementById('CajaTexto2').value;
resultado=0;
    
    
    if(num1>num2){
			resultado=(numero1+'\r\n'+numero2);
			
		}
		else
			resultado=(numero2+'\r\n'+numero1);
		
      document.write(resultado);  
}
    