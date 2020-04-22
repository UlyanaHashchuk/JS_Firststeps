//Checking user's input choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else if (userInput === 'bomb') { //Cheating mode
        return userInput;
    } else {
        console.log('Wrong choice. Try again!');
    }
};

//Random computer choice
const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

//Determining a winner due to combinations
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It is a tie!'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!'
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!'
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!'
        } else {
            return 'You won!';
        }
    }
    //Cheating mode
    if (userChoice === 'bomb') {
        return 'You won, little cheater!'
    }
}

//The play game, everything together
const playGame = () => {
    //Change user input here
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You choose: ' + userChoice);
    console.log('The computer choose: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
};

//Playing game
playGame();