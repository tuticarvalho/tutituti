var num1 = parseFloat(prompt("Informe um Número Natural:"));
var num2 = parseFloat(prompt("Informe outro Número Natural:"));


if (num1 < 0)
    alert("O Números informado deve ser Natural!");
if (num2 < 0)
    alert("O Números informado deve ser Natural!");

// EXECUÇÃO DOS VALORES    

if (num1 <= num2) {

        document.write(`<div class='valor'>Números Pares Naturais no intervalo de [${num1},${num2}]:</div>`);
        
        do { 
            if(num1 % 2 == 0)
            document.write(`<span class='resp'>${num1}, </span>`);
            num1++;
    
        } while (num1 <= num2);
    }

        else {

        document.write(`<div class='valor'>Números Pares Naturais no intervalo de [${num2},${num1}]:</div>`);
        do { 
            if(num2 % 2 == 0)
            document.write(`<span class='resp'>${num2}, <span>`);
            num2++;
    
        } while (num2 <= num1);
        
    }
