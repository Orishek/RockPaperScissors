

let xScore = '0';
let yScore = '0';

function getComputerChoice() {
    let choices = ["Kámen", "Papír", "Nůžky"];
    return choices[(
            Math.round(
                Math.random()*(choices.length-1)
                    )
                )]
        }

function getPlayerChoice() {
    let PlayerChoice = prompt("Vyber volbu", "");
    PlayerChoice = PlayerChoice.toUpperCase();
    return PlayerChoice;
}

function playRound() {
    let x = getComputerChoice();
    let y = getPlayerChoice();
    console.log("PC: "+x);
    console.log("Hráč: "+y);


    if(x == "Kámen" && y == "NŮŽKY" || x == "Nůžky" && y == "PAPÍR" || x == "Papír" && y == "KÁMEN") {
        console.log("prohra");
        xScore = ++xScore;
    } else if(x == "Kámen" && y == "STONE" || x == "Nůžky" && y == "NŮŽKY" || x == "Papír" && y == "PAPÍR") {
        console.log("remiza");
    }
    else    
    {
            console.log("vyhra");
            yScore = ++yScore;
        }
    console.log("PC Skóre: "+xScore);
    console.log("Hráč Skóre: "+yScore);
    console.log("___________________");
}