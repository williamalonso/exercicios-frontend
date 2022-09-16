var btn = document.getElementById("btn");
var dataDigitada = document.getElementById("dataDigitada");
var y = new Date(); // retorna a data atual

btn.addEventListener("click", function(){
    checarData(dataDigitada.value);
});

// compara a data "expiration date" com o dia de hoje
function checarData(data) {
    var separaData = data.split("-"); // separa os valores da data digitada
    var dataDigitada =  new Date(separaData[0], separaData[1] - 1, separaData[2]); // coloca os valores digitados em formato Date
    if(dataDigitada > y) {
        console.log("Data informada é maior que a data de hoje");
    } else {
        console.log("data de hoje é maior que a data informada");
    }
}