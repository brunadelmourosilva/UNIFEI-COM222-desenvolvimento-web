
let playerOne = 0;
let playerTwo = 0;

const selectPtPlayer1 = document.querySelector("#ptPlayer1");
const selectPtPlayer2 = document.querySelector("#ptPlayer2");
const selectWinnerScore = document.querySelector("#ptVitoriaSelect");

// -----------------------
const btnPlayerOne = document.querySelector("#btnPlayer1");

const incrementScorePlayerOne = () => {
    playerOne += 1;
    selectPtPlayer1.innerHTML = playerOne;

    if(playerOne === Number(selectWinnerScore.value)) {
        selectPtPlayer1.style.color = 'green';
        selectPtPlayer2.style.color = 'red';
    }
};

btnPlayerOne.addEventListener('click', incrementScorePlayerOne);

// -----------------------

const btnPlayerTwo = document.querySelector("#btnPlayer2");

const incrementScorePlayerTwo = () => {
    playerTwo += 1;
    selectPtPlayer2.innerHTML = playerTwo;

    if(playerTwo === Number(selectWinnerScore.value)) {
        selectPtPlayer2.style.color = 'green';
        selectPtPlayer1.style.color = 'red';
    }
};

btnPlayerTwo.addEventListener('click', incrementScorePlayerTwo);

// -----------------------
const resetPlay = () => {
    selectPtPlayer1.style.color = 'black';
    selectPtPlayer1.innerHTML = 0;
    playerOne = 0;

    selectPtPlayer2.style.color = 'black';
    selectPtPlayer2.innerHTML = 0;
    playerTwo = 0;

    selectWinnerScore.value = 5;
};

btnReset.addEventListener('click', resetPlay);

//------------------------
selectWinnerScore.addEventListener('change', (e) => {

    // identifica que o jogo encontra-se em andamento
    if(playerOne != 0 || playerTwo != 0) {
        resetPlay();
    }
});