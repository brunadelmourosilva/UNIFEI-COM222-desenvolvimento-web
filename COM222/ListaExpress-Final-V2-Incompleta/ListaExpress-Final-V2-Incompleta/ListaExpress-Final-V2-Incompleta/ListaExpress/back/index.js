
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());


function getUsersFromDatabase() {
    return JSON.parse(
        fs.readFileSync('../back/db/banco-dados-usuario.json', { encoding: 'utf8', flag: 'r' }));
}

function getCoursesFromDatabase() {
    return JSON.parse(
        fs.readFileSync('../back/db/cursos.json', { encoding: 'utf8', flag: 'r' }));
}

function validateUserLogin(users, emailRequest, passwordRequest, response) {

    let user = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailRequest) {
            user = users[i];
            break;
        }
    }

    if (user === null) {
        return response.status(404).send(`Usuario com email ${emailRequest} não existe. Considere criar uma conta!.`);
    }

    if (user.email === emailRequest && user.password === passwordRequest) {
        return response.status(200).send('Autenticado com Sucesso');
    } else {
        return response.status(401).send('Usuario ou senha incorretos.');
    }
}

function createUser(users, username, email, password, res) {
    const newUser = { "id": users.length + 1, "username": username, "email": email, "password": password };
    users.push(newUser);

    fs.writeFileSync('../back/db/banco-dados-usuario.json', JSON.stringify(users));

    res.send(`Tudo certo usuario criado com sucesso.`);
}

function findCourseByRegex(courses, nome) {
    return courses.filter(function (course) {
        var regex = new RegExp(nome, "i");

        return regex.test(course.nome);
    });
}

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const users = getUsersFromDatabase();

    validateUserLogin(users, email, password, res);
});

app.post('/create', (req, res) => {

    const { email, password, username } = req.body;

    const users = getUsersFromDatabase();

    for (let index = 0; index < users.length; index++) {
        if (email === users[index].email) {
            return res.send(`Usuario com email ${email} já existe.`);
        }
    }

    createUser(users, username, email, password, res);
});

app.get('/cursos', (req, res) => {
    const courses = getCoursesFromDatabase();

    res.send(courses);
});

app.get('/cursos/:nome', (req, res) => {

    const { nome } = req.params;

    const courses = getCoursesFromDatabase();

    var matchCourses = findCourseByRegex(courses, nome);

    if (matchCourses.length === 0) {
        return res.send(`Curso Não Encontrado!`);
    }

    return res.send(matchCourses);
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});

