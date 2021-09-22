"use strict";

let rockp1Button = document.getElementById('rock');
let paperp1Button = document.getElementById('paper');
let scissorsp1Button = document.getElementById('scissors');
let btnArray = [rockp1Button, paperp1Button, scissorsp1Button];

btnArray.forEach(button => {
    button.addEventListener('click', function(event) {
        let playerButton = button;

        const hands = ['rock', 'paper', 'scissors'];
        const cpuRandom = Math.floor(Math.random() * 3);
        const cpuHand = hands[cpuRandom];
        const playerHand = playerButton.getAttribute('id');

        let cpuButton = document.getElementById(cpuHand + 'Bot');
        let resultText = document.querySelector('.resultText');

        const result = suit(playerHand, cpuHand);
        switch (result) {
            case "tie":
                playerButton.style.backgroundColor = 'blue';
                cpuButton.style.backgroundColor = 'blue';
                resultText.innerHTML = 'Seri!';
                break;

            case "win":
                playerButton.style.backgroundColor = 'green';
                cpuButton.style.backgroundColor = 'red';
                resultText.innerHTML = 'Anda Menang!';
                break;

            case "lose":
                playerButton.style.backgroundColor = 'red';
                cpuButton.style.backgroundColor = 'green';
                resultText.innerHTML = 'Anda Kalah!';
                break;
        
            default:
                break;
        }
    })
});


// function round(_playerPick) {
//     const hands = ['rock', 'paper', 'scissors'];
//     const cpuRandom = Math.floor(Math.random() * 3);
//     const cpuHand = hands[cpuRandom];
//     const playerHand = hands[_playerPick];

//     let playerButton = document.getElementById(playerHand + 'Player');
//     let cpuButton = document.getElementById(cpuHand + 'Bot');
//     let resultText = document.querySelector('.resultText');

//     const result = suit(playerHand, cpuHand);
//     switch (result) {
//         case "tie":
//             playerButton.style.backgroundColor = 'blue';
//             cpuButton.style.backgroundColor = 'blue';
//             resultText.innerHTML = 'Seri!';
//             break;

//         case "win":
//             playerButton.style.backgroundColor = 'blue';
//             cpuButton.style.backgroundColor = 'red';
//             resultText.innerHTML = 'Anda Menang!';
//             break;

//         case "lose":
//             playerButton.style.backgroundColor = 'red';
//             cpuButton.style.backgroundColor = 'blue';
//             resultText.innerHTML = 'Anda Kalah!';
//             break;
    
//         default:
//             break;
//     }

// }

function suit(_player, _cpu) {
    if (_player === _cpu) {
        return "tie"
    }
    if (_player === 'rock') {
        if (_cpu === 'paper') {
            return "lose"
        } else {
            return "win"
        }
    } else if (_player === 'paper') {
        if (_cpu === 'scissors') {
            return "lose"
        } else {
            return "win"
        }
    } else {
        if (_cpu === 'rock') {
            return "lose"
        } else {
            return "win"
        }
    }
}