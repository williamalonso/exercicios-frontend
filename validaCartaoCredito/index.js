// Global Variables
    var firstName = document.getElementById("firstName");
    var secondName = document.getElementById("secondName");
    var btn = document.getElementById("btn");
    var dataDigitada = document.getElementById("dataDigitada");
    var currentDate = new Date(); // returns current Date
    var controlName = false; // control variable

// Listeners
    firstName.addEventListener("keyup", function(){
        var name = this.value;
        checkName(name);
    });
    secondName.addEventListener("keyup", function(){
        var name = this.value;
        checkName(name);
    });
    btn.addEventListener("click", function(){
        checkData(dataDigitada.value);
    });

// Functions
    function checkName(name) {
        var regex = /[^a-z ]/gi;
        let result = regex.test(name);
        if(result){
            controlName = false;
        } else {
            controlName = true;
        }
        console.log(controlName);
    }

    // compara a data "expiration date" com o dia de hoje
    function checkData(data) {
        var separaData = data.split("-"); // separa os valores da data digitada
        var dataDigitada =  new Date(separaData[0], separaData[1] - 1, separaData[2]); // coloca os valores digitados em formato Date
        if(dataDigitada > currentDate) {
            console.log("Data informada é maior que a data de hoje");
        } else {
            console.log("data de hoje é maior que a data informada");
        }
    }