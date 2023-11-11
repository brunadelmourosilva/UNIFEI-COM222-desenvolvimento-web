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

//Cuidado com o método "use", pois ele intercepta todas as requisições.
//Podemos ter no máximo um SEND por requisição.

app.get('/', (req,res) => {
    res.send('Você acessou a Rota Game Dev Raiz');
})

app.get('/ps5', (req,res) => {
    res.send('Você acessou Rota do PS5');
})

app.get('/pc', (req,res) => {
    res.send('Você acessou a Rota do PC');
})

//Cuidado com a rota *, ela precisa ser a última
app.get('*', (req,res) => {
    res.status(404).send('Desconheço a Rota, você deve jogar no celular');
})