"use strict";

const rockp1Button = document.getElementById('rock');
const paperp1Button = document.getElementById('paper');
const scissorsp1Button = document.getElementById('scissors');
const btnArray = [rockp1Button, paperp1Button, scissorsp1Button];

btnArray.forEach(button => {
    button.addEventListener('click', function(event) {
        const playerButton = button;

        const hands = ['rock', 'paper', 'scissors'];
        const cpuRandom = Math.floor(Math.random() * 3);
        const cpuHand = hands[cpuRandom];
        const playerHand = playerButton.getAttribute('id');

        const cpuButton = document.getElementById(cpuHand + 'Bot');
        const resultText = document.querySelector('.resultText');

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