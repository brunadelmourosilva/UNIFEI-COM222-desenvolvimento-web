const cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const spans = document.querySelectorAll('span')

for(let i = 0; i < spans.length; i++) {
    spans[i].style.color = cores[i];
}

//busca o botão
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    //console.log('clicked!');

    //cria parágrafo
    const p = document.createElement('p');
    p.innerText = 'acabei de ser criado!';

    //adiciona o parágrado criado em um lugar específico - depois do botão, no caso indica-se o 'btn'
    btn.after(p);

    //outra forma
    btn.insertAdjacentElement("afterend", p); //afterend, afterbegin, beforebegin, beforend
});

// -----------------------------

//busca o botão
const btnDel = document.querySelector('#del');

//e -> deletar o proprio botão
const deletar = () => {
    const pRemove = document.querySelector('p');

    pRemove.remove();
}

btnDel.addEventListener('click', deletar);


