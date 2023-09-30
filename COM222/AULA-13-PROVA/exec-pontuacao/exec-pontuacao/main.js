let ptVitoria = 5;
let isGameOver = false;

const player1 = {
    pontuacao: 0 ,
    btn : document.querySelector('#btnPlayer1'),
    display: document.querySelector('#ptPlayer1')
}

const player2 = {
    pontuacao: 0 ,
    btn : document.querySelector('#btnPlayer2'),
    display: document.querySelector('#ptPlayer2')
}

const atualizaPontuacao = (jogador, oponente) => {

    if(!isGameOver){
        jogador.pontuacao++;
        if(jogador.pontuacao === ptVitoria){
            isGameOver = true;
            jogador.display.classList.add('vencedor');
            oponente.display.classList.add('perdedor');
        }
        jogador.display.innerText = jogador.pontuacao;
    }
}

player1.btn.addEventListener('click', () => {
    atualizaPontuacao(player1,player2);
});

player2.btn.addEventListener('click', () => {
    atualizaPontuacao(player2,player1);
});

const btnReset = document.querySelector('#btnReset');
const ptVitoriaSelect = document.querySelector('#ptVitoriaSelect');




const reset = () => {
    isGameOver = false;
    player1.pontuacao = 0;
    player2.pontuacao = 0;
    player1.display.innerText = 0;
    player2.display.innerText = 0;
    player1.display.classList.remove('vencedor', 'perdedor');
    player2.display.classList.remove('vencedor', 'perdedor');
}

ptVitoriaSelect.addEventListener('change', (e) => {
    ptVitoria = Number(e.target.value);
    reset();
});

btnReset.addEventListener('click', reset);

