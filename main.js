function findElement(query, isMulti = false) {
    return (!isMulti) ?
            document.querySelector(query) :
            document.querySelectorAll(query);
}

function playGame(){

    let choice = getRandomInt(3);
    let comp = getRandomInt(3);
    

    if (choice === comp) {
      console.log("it's a tie!");
    } else if (choice === 0 && comp === 1 || choice === 1 && comp === 2 || choice === 2 && comp === 0) {
      console.log('comp wins!');
    } else {
      console.log('choice wins')
    }   
}

const handArray = ["/images/rock.png", "/images/paper.png", "/images/scissors.png"]

function startHands(playerChoice) {
    findElement('.player-hand').classList.add("move");
    findElement('.enemy-hand').classList.add("move");

    setTimeout(() => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        findElement('.player-hand').classList.remove("move");
        findElement('.player-hand').src = handArray[playerChoice];

        findElement('.enemy-hand').classList.remove("move");
        findElement('.enemy-hand').src = handArray[getRandomInt(3)];
    }, 1000)
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
