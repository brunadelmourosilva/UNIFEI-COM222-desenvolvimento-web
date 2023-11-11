const express = require('express');
const app = express();

const fs = require('fs');

//Passando parametros na URL (Query Param) 
// /disciplinas?sigla=VALOR  => /disciplinas é a rota, e sigla é um parametro query param
// Diferente do params (exemplo 4), na Query Param é passado um par chave-valor
// Para iniciar o Query Param colocamos um "?" na URL e depois passamos os parametros seguindo
//chave=valor
//Para passar mais parametros, separamos por "&"
//disciplinas?param1=valor1?param2=valor2?param3=valor3

function listarTodasAsDisciplinas(){
    const data = JSON.parse(fs.readFileSync('disciplinas.json', { encoding: 'utf8', flag: 'r' }));
    let conteudo = `<h1>Todas as Disciplinas</h1>`;
    conteudo += "\n<ul>";
    for(let disciplina of data){
        conteudo += `\n\t<li>${disciplina.sigla}</li>`;
    }
    conteudo += '\n</ui>';
    return conteudo;
}

function listarPropDisciplina(sigla){
    const data = JSON.parse(fs.readFileSync('disciplinas.json', { encoding: 'utf8', flag: 'r' }));
    for(let disciplina of data){
        if(disciplina.sigla===sigla){
            let conteudo = `<h1>Navegando na disciplina ${sigla} </h1>`;
            conteudo += "\n<ul>";
            for(let info in disciplina){
                conteudo += `\n\t<li>${info.toUpperCase()} : ${disciplina[info]}</li>`;
            }
            return conteudo;
        }
    }
    return `<h1>Não conheço a disciplina ${sigla} </h1>`;
}

app.get('/disciplinas', (req,res) => {
    
    const { sigla } = req.query; //considerando que um param "sigla" será passado.
    //Se fosse direto por "params", utilizariamos "req.params"
    let conteudo = '';
    if(!sigla){//Caso nada seja passado, listar todas
        conteudo = listarTodasAsDisciplinas();
    }else{
        conteudo = listarPropDisciplina(sigla);
    }
    res.send(conteudo);
});

app.get('*', (req,res) =>{
    res.send('Não conheço essa rota');
});

app.listen(3000, () => {
    console.log('Servidor ligado 3000');
});