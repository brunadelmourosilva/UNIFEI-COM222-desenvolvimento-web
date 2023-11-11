
// nodemon -L index.js -> run this for WSL

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({extended: true}));

app.post('/disciplinas/', (req, res) => {
    //const {sigla} = req.params; //path param
    //console.log(sigla);

    //http://localhost:3000/disciplinas/2?name=bru&idade=18
    //const query = req.query; //query param
    //console.log(query);

    // ------
    //extract the body from request
    const { sigla, ementa, equivalencia } = req.body;

    //get the data from json / "database"
    const dados =
        JSON.parse(
            fs.readFileSync('disciplinas.json', { encoding: 'utf8', flag: 'r' }));

    console.log(dados);

    //create the object data for the "database"
    const disciplina = {
        "id": dados.length + 1,
        "sigla": sigla,
        "ementa": ementa,
        "equivalencia": equivalencia
    }

    //persist on the "database"
    dados.push(disciplina);
    fs.writeFileSync('disciplinas.json', JSON.stringify(dados, null, 2));

    for(const dado of dados) {
        if(sigla === dado.sigla) {
            res.send(dado);
        }
    }
    res.send("Está disciplina não existe.");
    // ------
});

app.listen(3000, () => {
    console.log("Server listen on 3000 port");
});

//mv node_modules/ index.js package-lock.json package.json
