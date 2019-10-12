document.write("<div class='numero'>Informe o primerio número: <input type='number' id='primeiroN'></div>");
document.write("<div class='numero'>Informe o segundo número: <input type='number' id='segundoN'></div>");

function somar () {
    var n1 = document.getElementById ("primeiroN").value;
    var n2 = document.getElementById ("segundoN").value;
    var soma = parseInt (n1) + parseInt (n2);
    document.getElementById ("adição").innerHTML = soma;
}

function subtrair () {
    var n1 = document.getElementById ("primeiroN").value;
    var n2 = document.getElementById ("segundoN").value;
    var subtrai = parseInt (n1) - parseInt (n2);
    document.getElementById ("subtração").innerHTML = subtrai;
}

function multiplicar () {
    var n1 = document.getElementById ("primeiroN").value;
    var n2 = document.getElementById ("segundoN").value;
    var multiplica = parseInt (n1) * parseInt (n2);
    document.getElementById ("multiplicação").innerHTML = multiplica
}

function dividir () {
    var n1 = document.getElementById ("primeiroN").value;
    var n2 = document.getElementById ("segundoN").value;
    var dividi = parseInt (n1) / parseInt (n2);
    document.getElementById ("divisão").innerHTML = dividi;
}

function potenciar () {
    var n1 = document.getElementById ("primeiroN").value;
    var n2 = document.getElementById ("segundoN").value;
    var potencia = Math.pow(parseInt (n1),parseInt (n2));
    document.getElementById ("potenciação").innerHTML = potencia;
}

//BOTÕES//
document.write("<button onclick='somar ()'>Somar</button>");
document.write("<button onclick='subtrair ()'>Subtrair</button>");
document.write("<button onclick='multiplicar ()'>Multiplicar</button>");
document.write("<button onclick='dividir ()'>Dividir</button>");
document.write("<button onclick='potenciar ()'>Potenciar</button>");

//RESULTADOS// 
document.write("<div id='adição' class='resultado'></div>");
document.write("<div id='subtração' class='resultado'></div>");
document.write("<div id='multiplicação' class='resultado'></div>");
document.write("<div id='divisão' class='resultado'></div>");
document.write("<div id='potenciação' class='resultado'></div>");