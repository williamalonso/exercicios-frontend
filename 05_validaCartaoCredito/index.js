// Global Variables
    var firstName = document.getElementById("firstName");
    var secondName = document.getElementById("secondName");
    var dataDigitada = document.getElementById("dataDigitada");
    var ccNumber = document.getElementById("ccNumber");
    var codeNumber = document.getElementById("codeNumber");
    var btn = document.getElementById("btn");
    var currentDate = new Date(); // returns current Date
    var controlName = false; // control variable
    var controlLastName = false;
    var controlDate = false;
    var controlCcNumber = false;
    var controlCodeNumber = false;

// Listeners
    firstName.addEventListener("keyup", function(){
        var name = this.value;
        checkName(name);
    });
    secondName.addEventListener("keyup", function(){
        var name = this.value;
        checkLastName(name);
    });
    ccNumber.addEventListener("keyup", function(){
        checkCcNumber(this.value);
    });
    codeNumber.addEventListener("keyup", function(){
        checkSecurityCode(this.value);
    });
    dataDigitada.addEventListener("input", function(){
        checkData(dataDigitada.value);
    });

// Functions

    // check Name field
    function checkName(name) {
        var regex = /[^a-z ]/gi;
        let result = regex.test(name);
        if(result){ // if user types a number
            controlName = false;
        } else {
            controlName = true;
        }
        if(name.length < 1) { // if user let the input empty
            controlName = false;
        }
        activateButton();
    }

    // check last name
    function checkLastName(name) {
        var regex = /[^a-z ]/gi;
        let result = regex.test(name);
        if(result){ // if user types a number
            controlLastName = false;
        } else {
            controlLastName = true;
        }
        if(name.length < 1) { // if user let the input empty
            controlLastName = false;
        }
        activateButton();
    }

    // check Credit Card Number
    function checkCcNumber(value) {        
        if(value) {
            controlCcNumber = true;
        } else {
            controlCcNumber = false;
        }
        if(value.length < 1) { // if user let the input empty
            controlCcNumber = false;
        }
        activateButton();
    }

    // check Security Code
    function checkSecurityCode(value) {        
        if(value) {
            codeNumber = true;
        } else {
            codeNumber = false;
        }
        if(value.length < 1) { // if user let the input empty
            codeNumber = false;
        }
        activateButton();
    }

    // compare "expiration date" field with current day
    function checkData(data) {
        var separaData = data.split("-"); // separa os valores da data digitada
        var dataDigitada =  new Date(separaData[0], separaData[1] - 1, separaData[2]); // coloca os valores digitados em formato Date
        if(dataDigitada >= currentDate) {
            controlDate = true;
        } else {
            controlDate = false;
        }
        activateButton();
    }

    // activate/desactivate button
    function activateButton() {
        if(controlName == true && controlLastName == true && controlCcNumber == true && codeNumber == true && controlDate == true){
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }