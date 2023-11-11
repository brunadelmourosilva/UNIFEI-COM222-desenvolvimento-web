const express = require('express');
const app = express();

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.urlencoded({ extended: true }));

//Requisicao com GET
app.get('/disciplinas', (req,res) => {
    const {sigla} = req.query;
    console.log(sigla);
    console.log(req.query);
    res.send(`Requisicao com GET /disciplinas ${sigla}`);
});

//Requisicao com POST
app.post('/disciplinas', (req,res) => {
    const {sigla} = req.body; //necessário ter primeiro informado express que 
    //estamos extraindo informações vindo de Forms. (linha 4,5)
    console.log(sigla);
    console.log(req.body);
    res.send(`Requisicao com POST /disciplinas ${sigla}`);
});

app.get('/', (req,res) => {
    res.send('Página Inicial');
});

app.get('*', (req,res) =>{
    res.send('Não conheço essa rota');
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});