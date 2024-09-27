let selectRandom;
let userPoint = 0;
let computerPoint = 0;
let drawmatch = 0;
let userChoice = document.getElementById('userChoice')
let comChoice = document.getElementById('computerChoice');
let userpointnum = document.getElementsByClassName('userpoint')[0];
let computerpointnum = document.getElementsByClassName('computerpoint')[0];
let drawpoints = document.getElementsByClassName('drawmatchpoint')[0];
let winmessage = document.getElementById('win');

function computerSelector() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    const randomComputerChoose = Math.floor(Math.random() * arr.length);
    selectRandom = arr[randomComputerChoose]
    return selectRandom;
}

function choiceHandler(choice) {
    userChoice.innerHTML = choice;
    const computerRandomChoice = computerSelector();
    comChoice.innerHTML = computerRandomChoice;

    if ((choice === 'Rock' && computerRandomChoice === 'Scissors') ||
        (choice === 'Scissors' && computerRandomChoice === 'Paper') ||
        (choice === 'Paper' && computerRandomChoice === 'Rock')) {
        userPoint++;
        winmessage.innerHTML = 'User Win';
        winmessage.style.display = 'block';

        setTimeout(function () {
            winmessage.style.display = 'none';
        }, 1000);

    }
    else if (choice === 'Rock' && computerRandomChoice === 'Rock' ||
        choice === 'Paper' && computerRandomChoice === 'Paper' ||
        choice === 'Scissors' && computerRandomChoice === 'Scissors') {
        computerPoint;
        userPoint;
        drawmatch++;
        drawpoints.innerHTML = drawmatch;
        winmessage.innerHTML = 'Match Draw'
        winmessage.style.display = 'block';
        setTimeout(function () {
            winmessage.style.display = 'none';
        }, 1000);
    }
    else {
        computerPoint++;
        winmessage.innerHTML = 'Computer Win'
        winmessage.style.display = 'block';
        setTimeout(function () {
            winmessage.style.display = 'none';
        }, 1000);
    }
    userpointnum.innerHTML = userPoint;
    computerpointnum.innerHTML = computerPoint;
}

document.getElementById('rockbtn').addEventListener('click', function () {
    choiceHandler('Rock');
})

document.getElementById('paperbtn').addEventListener('click', function () {
    choiceHandler('Paper');
})

document.getElementById('scissorsbtn').addEventListener('click', function () {
    choiceHandler('Scissors');
})