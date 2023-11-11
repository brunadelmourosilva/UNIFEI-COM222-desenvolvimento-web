//Primeiro ponto é "importar" (require) o express para o código
const express = require('express');

//Agora precisamos de uma instância de express() que irá nos permitir inicializar o servidor
//A referência "app" possui diversos métodos necessário para o servidor.

const app = express();


//O método "listen" permite inicializar um servidor em uma dada porta.
//Em seguida passamos um callback que será invocado quando o servidor ligar!
//Se executar "nodemon index.js" o servidor ficará ligado
//Se executar "nohup nodemon app.js </dev/null &" o servidor é ligado sem bloquear o terminal
//Porém essa última linha pode ser problemática e tentar criar outro servidor ao invés de reiniciar apenas
//Para matar o servidor podemos usar Ctrl+C ou achar o processo e matar
//lsof -i:3000 (encontrar o processo rodando na porta 3000 e verifique o PID)
//kill -9 <PID>
//
app.listen(3000, () => {
    console.log('Servidor ouvindo na porta 3000!!!!!');
});

//O método use é chamado por toda e qualquer requisição recebida no servidor.
app.use(() => {
    console.log('Requisição Recebida!!!!');
})