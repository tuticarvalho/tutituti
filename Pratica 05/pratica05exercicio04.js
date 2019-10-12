//ESCOLHA DA OPERAÇÃO

var expr = parseInt(prompt("Informe a operação desejada: \n [1] Área de Retângulo; \n [2] Área de Triângulo; \n [3] Área de Trapézio;"));

//TIPOS DE CÁLCULOS   

switch (expr) {
	case 1:
            document.write("<div class='numero'>Informe o valor da Base do Retângulo: <br><input type='number' id='primeiroN' min='0'></div>");
            document.write("<div class='numero'>Informe o valor da Altura do Retângulo: <br><input type='number' id='segundoN' min>='0'</div>");
                
            function arearetan () {
                var n1 = document.getElementById ("primeiroN").value;
                var n2 = document.getElementById ("segundoN").value;
                var resultret = parseInt (n1) * parseInt (n2);
                document.getElementById ("calculoretan").innerHTML = resultret
            }             
            document.write("<button onclick='arearetan ()' class='botao'>Calcular</button><br>");
            document.write("<div id='escrita' class='resultado'>O valor da área do Retângulo é:</div>");
            document.write("<div id='calculoretan' class='resultado'></div>");
    break;
    

	case 2:
        document.write("<div class='numero'>Informe o valor da Base do Triângulo:<br> <input type='number' id='primeiroN' min='0'></div>");
        document.write("<div class='numero'>Informe o valor da Altura do Triângulo:<br> <input type='number' id='segundoN' min='0'></div>");
            
        function areatrian () {
            var n1 = document.getElementById ("primeiroN").value;
            var n2 = document.getElementById ("segundoN").value;
            var resultri = parseInt (n1) * parseInt (n2) / 2;
            document.getElementById ("calculotrian").innerHTML = resultri
        }             
        document.write("<button onclick='areatrian ()' class='botao'>Calcular</button><br>");
        document.write("<div id='escrita' class='resultado'>O valor da área do Triângulo é:</div>");
        document.write("<div id='calculotrian' class='resultado'></div>");
	    
	break;
	case 3:
            document.write("<div class='numero'>Informe o valor da Base Maior do Trapézio: <br><input type='number' id='primeiroN' min='0'></div>");
            document.write("<div class='numero'>Informe o valor da Base Menor do Trapézio: <br><input type='number' id='segundoN' min='0'></div>");
            document.write("<div class='numero'>Informe o valor da Altura do Trapézio: <br><input type='number' id='terceiroN' min='0'></div>");
                
            function multiplicar () {
                var n1 = document.getElementById ("primeiroN").value;
                var n2 = document.getElementById ("segundoN").value;
                var n3 = document.getElementById ("terceiroN").value;
                var multiplica = (parseInt (n1) + parseInt (n2)) * parseInt(n3) / 2;
                document.getElementById ("multiplicação").innerHTML = multiplica
            }             
            document.write("<button onclick='multiplicar ()' class='botao'>Calcular</button><br>");
            document.write("<div id='escrita' class='resultado'>O valor da área do Triângulo é:</div>");
            document.write("<div id='multiplicação' class='resultado'></div>");

		
	
	break;
	default: 
        document.write("<div class='erro'>Valor inválido</div>");
    
}