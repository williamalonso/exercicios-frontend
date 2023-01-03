/*
	Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

	Entrada
	O arquivo de entrada contém 2 valores inteiros.

	Saída
	Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

var PROD = parseInt(a*b);
console.log('PROD = ' + PROD);

/*
	Navegador

	var a = parseInt(prompt('Digite o valor de A'));
	var b = parseInt(prompt('Digite o valor de B'));
	var PROD = parseInt(a*b);
	console.log('PROD = ' + PROD);
*/