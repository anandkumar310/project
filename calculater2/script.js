const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["%","*","-","+","="];
let output = "";
// define function to calculater based on button cliked.
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%","/100"));
    }
    else if(btnValue === "AC"){
        output = "";
    }
    else if(btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    }
    else{
        if(output === "" && specialChar.includes(btnValue))return;
        output+=btnValue;
    }
    display.value = output;
};

//add event listner to button call calculate() on click.
buttons.forEach((button) => {
    // button cliked lisner call calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});