const calculator_display=document.getElementById("calculator_text");
const guess_frame = document.getElementById("number_guess_frame");
const guess_field = document.getElementById("guess_input");
const guess_indicator = document.getElementById("guess_indicator");
const dice_frame = document.getElementById("dice_roll_frame");
const dice = document.getElementById("dice");
const solved_roll = document.getElementById("solved_roll");
const won_frame = document.getElementById("win_title");

function press_number(x){
    if(calculator_display.textContent=="✝⬇️⬅️"){
        calculator_display.textContent="";
    }
    let stringx = String(x);
    switch(stringx){
        case "9":
            calculator_display.textContent+="9";
            break;
        case "8":
            calculator_display.textContent+="8";
            break;
        case "7":
            calculator_display.textContent+="7";
            break;
        case "6":
            calculator_display.textContent+="6";
            break;
        case "5":
            calculator_display.textContent+="5";
            break;
        case "4":
            calculator_display.textContent+="4";
            break;
        case "3":
            calculator_display.textContent+="3";
            break;
        case "2":
            calculator_display.textContent+="2";
            break;
        case "1":
            calculator_display.textContent+="1";
            break;
        case "C":
            calculator_display.textContent="✝⬇️⬅️";
            break;
        case "0":
            calculator_display.textContent+="0";
            break;
        case "E":
            if(calculator_display.textContent=="8520456"){
                solved();
            }
            break;
    }
}

function solved(){
    guess_frame.style.display = "block";
    generate_number();
}

let random_num = Math.trunc(Math.random()*48+17);
let tries = 6;

function try_guess(){
    let guess = Number(guess_field.value);

    if(guess==random_num){
        correct_guess();
    }
    else{
        tries--;
    }

    if(tries==0){
        game_over();
    }
    else if(guess<random_num){
        guess_indicator.textContent="Higher";
    }
    else if(guess>random_num){
        guess_indicator.textContent="Lower";
    }
}

function correct_guess(){
    guess_indicator.style.color = 'green';
    guess_indicator.textContent="CORRECT!";
    dice_frame.style.display = "flex";
}

function roll(){
    let possible_rolls = ["⚀","⚁","⚂","⚃","⚄","⚅"];
    let random_side = Math.trunc(Math.random()*6);
    dice.textContent=possible_rolls[random_side];
    if(random_side==5){
        roll_solved();
    }
}

function roll_solved(){
    solved_roll.textContent = "Solved!";
    won_frame.style.display = "flex";
}

function game_over(){
    location.reload();
}