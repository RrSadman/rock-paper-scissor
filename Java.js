let computer;
function computerPlay() {
    computer = Math.floor(Math.random() * 3) + 1
    return computer;
}
let a, i = 0, j = 0;
a = prompt("Inset your choice : ");
a = a.toLowerCase();

var str1 = 'rock';
var str2 = 'paper';
var str3 = 'scissor';
let winplayer = 0, wincomputer = 0;
function game(num, computer) {
    if (num == 1) {
        if (computer == 1) {
            console.log("Its a tie!");
            i--;
        }
        else if (computer == 2) {
            console.log("You lose!");
            wincomputer = wincomputer + 1;
        }
        else {
            console.log("You Win!");
            winplayer = winplayer + 1;
        }
    }
    else if (num == 2) {
        if (computer == 2) {
            console.log("Its a tie!");
            i--;
        }
        else if (computer == 3) {
            console.log("You lose!");
            wincomputer = wincomputer + 1
        }
        else {
            console.log("You Win!");
            winplayer = winplayer + 1;
        }
    }
    else if (num == 3) {
        if (computer == 3) {
            console.log("Its a tie!");
            i--;
        }
        else if (computer == 1) {
            console.log("You lose!");
            wincomputer = wincomputer + 1
        }
        else {
            console.log("You Win!");
            winplayer = winplayer + 1;
        }
    }
}


while (i < 5) {
    
    if (a == str1 || a == str2 || a == str3) {

        a = a.toLowerCase();
        computerPlay();
        var num;
        if (a == str1) {
            num = 1;
        }
        else if (a == str2) {
            num = 2;
        }
        else if (a == str3) {
            num = 3;
        }
        else {
            console.log("Unknown type");
        }

        console.log(num);
        console.log(computer);
        console.log("Vallue of i = " + i);

        game(num, computer);
        i++;
        console.log("In loop 1");
    }

    else {
        console.log("Please enter a proper input : ");
        console.log("In loop 2");

    }
    a = prompt("Inset your choice : ");
}

if (winplayer > wincomputer) {
    console.log("Congrats you have won the series");
}
else {
    console.log("Sorry you have lost the series");
}


