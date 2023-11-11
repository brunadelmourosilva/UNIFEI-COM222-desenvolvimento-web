const express = require('express');
const app = express();
const fs = require('fs');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.urlencoded({ extended: true }));

//Requisicao com POST
app.post('/disciplinas', (req,res) => {
    const {sigla, ementa, equivalencia} = req.body; //necessário ter primeiro informado express que 
    //estamos extraindo informações vindo de Forms. (linha 4,5)
    
    const data = JSON.parse(fs.readFileSync('disciplinas.json', { encoding: 'utf8', flag: 'r' }));
    const disciplina = { "id": data.length + 1, "sigla" : sigla, "ementa" : ementa, "equivalencia" : equivalencia};
    data.push(disciplina);
    fs.writeFileSync('disciplinas.json',JSON.stringify(data,null,2));
    res.send(`Disciplina ${sigla} inserida no servidor`);
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