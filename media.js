function Calcular (){
  
    var nota1Elemento = document.getElementById("nota1");
    var nota1 = parseFloat(nota1Elemento.value);
    
    var nota2Elemento = document.getElementById("nota2");
    var nota2 = parseFloat(nota2Elemento.value);
    
    var nota3Elemento = document.getElementById("nota3");
    var nota3 = parseFloat (nota3Elemento.value);
    
    var nota4Elemento = document.getElementById("nota4");
    var nota4 = parseFloat (nota4Elemento.value);
    
    var resultado = (nota1 + nota2 + nota3 + nota4) / 4
    
    var elementoResultado = document.getElementById("resultado");
   elementoResultado.innerHTML = resultado
  }