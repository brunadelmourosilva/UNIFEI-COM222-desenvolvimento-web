//Primeiro ponto é "importar" (require) o express para o código
const express = require('express');

//Agora precisamos de uma instância de express() que irá nos permitir inicializar o servidor
//A referência "app" possui diversos métodos necessário para o servidor.

const app = express();


//O método "listen" permite inicializar um servidor em uma data porta.
//Em seguida passamos um callback que será invocado quando o servidor ligar!
app.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000!!!!!');
});

//Para toda requisição HTTP, o express faz o parse para dois objetos
//req -> requisição (request) -> a requisição chegando
//res -> resposta (response) -> a resposta que será devolvida
app.use((req,res) => {
    /*
    O método send() permite configurar uma resposta para a requisição.
    Como argumento, podemos passar string, JSON, objetos.
    Passando como string, o server faz o parse para HTML
    Passando como JSON, o server faz o parte para JSON
    Normalmente iremos estrutura a resposta em forma JSON
    Apenas um send pode ser usado por vez
    */
    //res.status(200).send('Olá. Essa é uma resposta!'); //Apenas um send pode ser usado comente para testar
    res.send('<h1>Resposta direto com HTML</h1>');//Apenas um send pode ser usado comente para testar
    //res.send({username : 'phillima'});//Apenas um send pode ser usado comente para testar

});