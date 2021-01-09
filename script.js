/*
 * File: script.js
 * Created: Wednesday, 6th January 2021 9:57:03 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Sunday, 10th January 2021 12:34:25 am
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

//Declear all elements used in HTML file.
let checkButton = document.querySelector('#check_button');
let inputOption = document.querySelector('#input_options');
let inputExp = document.querySelector('#input_expression');


//Declearation classes

class UI {
    constructor() {
        this.result = document.querySelector('#result');
    }
    showResult(expression, option) {

        //console.log(expression);

        let result;
        //let regularExpression = /^(+)?(88)?01[0-9]{9}$/;
        //console.log(regularExpression.test(expression));

        if (option === "Email Expression") {
            let regularExpression = /^([a-zA-Z0-9]\.?)+[^\.?^' ']@([a-zA-Z0-9]\.?)+[^\.]$/;
            result = regularExpression.test(expression);

        } else if (option === "Phone Number") {
           let regularExpression = /^(\+)?(88)?01[0-9]{9}$/;
            result = regularExpression.test(expression);

        } else if (option === "Postal Code"){
            let regularExpression = /^[0-9]{4}$/;
            result = regularExpression.test(expression);

        } else {
            UI.showAlert("Choose option from list..!", "error");
        }

        if (result === true) {
            result = "valid";
        } else {
            result = "invalid";
        }

        this.result.innerHTML = `
        <br>
        <p class="lead" >Result:</p>
        <p class="display5">Given Expression: ${expression}</p>
        <p>This is ${result} expression.</p>`
    }
    clearResult() {
        this.result.innerHTML = "";
    }

    static showAlert(message, className) {

        //creating a div for alert message.
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        //Creating a place for alert div
        let place = document.querySelector('.card');
        let showing = document.querySelector('.lead');

        place.insertBefore(div, showing);

        // Code for removing alert message automatically
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1350);
    }
}




//Add eventlistener with the variable
checkButton.addEventListener('click', checkExpression);



// Declearation function
function checkExpression(e) {

    let ui = new UI();

    if (inputOption.value === "" || inputExp.value ==="") {
        UI.showAlert("Please Fill both fields..!","error");
        ui.clearResult();
        inputOption.value = "";
    } else {
        //main task to check validation
        ui.showResult(inputExp.value, inputOption.value)
        inputOption.value = "";
        inputExp.value = "";
    }
}
