//Primeiro ponto é "importar" (require) o express para o código
const express = require('express');
const fs = require('fs');

//Agora precisamos de uma instância de express() que irá nos permitir inicializar o servidor
//A referência "app" possui diversos métodos necessário para o servidor.
const app = express();

//O método "listen" permite inicializar um servidor em uma data porta.
//Em seguida passamos um callback que será invocado quando o servidor ligar!
app.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000!!!!!');
});

//Cuidado com o método "use", pois ele intercepta todas as requisições.
//Podemos ter no máximo um SEND por requisição.

app.get('/', (req,res) => {
    res.send('Você acessou a Rota Raiz');
});

//Passando parametros na URL (Params)
// /disciplinas/:sigla  => /disciplinas é a rota, e SIGA um parametro
// nesse exemplo ele devolve as informações da disciplina
// Em projetos reais não devolveríamos o HTML e sim apenas os dados
// Nas aulas de React iremos trabalhar melhor a construção da página com os dados.
app.get('/disciplinas/:sigla', (req,res) => {
    const data = JSON.parse(fs.readFileSync('disciplinas.json'));
    const { sigla } = req.params; //Obter o valor da variável "sigla" de todos os "params" enviados
    //Os params chegam como um array, e podem ser acessados por req.params (isso para requisições GET)
    let conteudo = '';
    for(let disciplina of data){
        if(disciplina.sigla===sigla){
            conteudo += `<h1>Navegando na disciplina ${sigla} </h1>`;
            conteudo += "\n<ul>";
            for(let info in disciplina){
                conteudo += `\n\t<li>${info.toUpperCase()} : ${disciplina[info]}</li>`;
            }
            conteudo += `\n</ul>`
            break;
        }
    }
    if(conteudo==='')
        conteudo += `<h1>Não conheço a disciplina ${sigla} </h1>`;
    res.send(conteudo);
});

app.get('/disciplinas', (req,res) => {
    const data = JSON.parse(fs.readFileSync('disciplinas.json', { encoding: 'utf8', flag: 'r' }));
    let conteudo = `<h1>Todas as Disciplinas</h1>`;
    conteudo += "\n<ul>";
    for(let disciplina of data){
        conteudo += `\n\t<li>${disciplina.sigla}</li>`;
    }
    conteudo += '\n</ui>';
    res.send(conteudo);
});

//Cuidado com a rota *, ela precisa ser a última
app.get('*', (req,res) => {
    res.status(404).send('Desconheço a Rota, você deve jogar no celular');
});