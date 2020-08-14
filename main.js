function findElement(query, isMulti = false) {
    return (!isMulti) ?
            document.querySelector(query) :
            document.querySelectorAll(query);
}

function startHands(playerChoice) {
    findElement('.player-hand').classList.add("move");
    findElement('.player-hand').src = handArray[0];

    findElement('.enemy-hand').classList.add("move");
    findElement('.enemy-hand').src = handArray[0];

    setTimeout(() => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        enemyChoice = getRandomInt(3);

        findElement('.player-hand').classList.remove("move");
        findElement('.player-hand').src = handArray[playerChoice];

        findElement('.enemy-hand').classList.remove("move");
        findElement('.enemy-hand').src = handArray[enemyChoice];
        decideWinner(playerChoice, enemyChoice)
    }, 1000)
}

function decideWinner(playerChoice, enemyChoice){
    setTimeout(() => {
        if (playerChoice === enemyChoice) {
            findElement('.brief').textContent = "it's a tie!";
            sounds.crowd.aww.volume = 0.3
            sounds.crowd.aww.play()
        } else if (playerChoice === 0 && enemyChoice === 1 || playerChoice === 1 && enemyChoice === 2 || playerChoice === 2 && enemyChoice === 0) {
            findElement('.brief').textContent = 'You lose!';
            sounds.crowd.boo.volume = 0.3
            sounds.crowd.boo.play()
        } else {
            findElement('.brief').textContent = 'You win!';
            sounds.crowd.cheer.volume = 0.3
            sounds.crowd.cheer.play()
        }   
    }, 100)
}

const handArray = ["/images/rock.png", "/images/paper.png", "/images/scissors.png"]
const sounds = {
    bgMusic: new Audio('/sounds/we-will-rock-you.mp3'),
    crowd: {
        boo: new Audio('/sounds/crowd-boo.mp3'),
        cheer: new Audio('/sounds/crowd-cheer.mp3'),
        aww: new Audio('/sounds/crowd-aww.mp3')
    }
}


findElement('.rock').addEventListener('click', () => {
    startHands(0);
})

findElement('.paper').addEventListener('click', () => {
    startHands(1);
})

findElement('.scissors').addEventListener('click', () => {
    startHands(2);
})

findElement('.start-btn').addEventListener('click', () => {
    sounds.bgMusic.volume = 0.2;
    sounds.bgMusic.play();
    findElement('.game').classList.remove('hide');
    findElement('.before-game').classList.add('hide');
})
