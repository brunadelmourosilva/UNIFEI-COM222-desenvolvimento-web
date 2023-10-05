
const nome = document.querySelector('#nome');
const dtNascimento =document.querySelector('#dtNascimento');
const btnEnvia = document.querySelector('#botao');
const resposta = document.querySelector('#resposta');

const idade = () => {
    var ano_atual = new Date().getFullYear();
    var data_nascimento = new Date(dtNascimento.value);

    return ano_atual - data_nascimento.getFullYear();
}

const envia = () => {
    console.log(nome.value);

    resposta.style.color = 'black';
    resposta.innerText = `Seu nome é ${nome.value} e você tem ${idade()} ano(s).`;
}

btnEnvia.addEventListener('click', envia);
