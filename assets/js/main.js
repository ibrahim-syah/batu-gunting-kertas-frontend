"use strict";

const rockp1Button = document.getElementById('rock');
const paperp1Button = document.getElementById('paper');
const scissorsp1Button = document.getElementById('scissors');
const btnArray = [rockp1Button, paperp1Button, scissorsp1Button];
const playAgainPrompt = document.querySelector('.prompt');
const resultText = document.querySelector('.resultText');

btnArray.forEach(button => {
    button.addEventListener('click', function(event) {
        const playerButton = button;

        const hands = ['rock', 'paper', 'scissors'];
        const cpuRandom = Math.floor(Math.random() * 3);
        const cpuHand = hands[cpuRandom];
        const playerHand = playerButton.getAttribute('id');

        const cpuButton = document.getElementById(cpuHand + 'Bot');

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
        playAgainPrompt.removeAttribute('hidden');

        const history = {
            player: playerHand,
            cpu: cpuHand,
            result: result
        }
        putHistory(history);
        renderHistory();
        
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

playAgainPrompt.addEventListener('click', function (event) {
    let buttons = document.querySelectorAll('.option');
    buttons.forEach(button => {
        button.style.backgroundColor = 'white';
    });
    resultText.innerHTML = 'VS';
    playAgainPrompt.setAttribute('hidden', 'true');
});