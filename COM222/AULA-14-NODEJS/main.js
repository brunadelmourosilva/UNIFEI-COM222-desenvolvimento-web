const version = process.version;
const cwd = process.cwd();
const release = process.release; //retorna objeto JSON
const env = process.env; //retorna objeto JSON

console.log(`Versão: ${version}`);
console.log(`Diretório de Trabalho: ${cwd}`);
console.log(`Release: ${JSON.stringify(release, null, 10)}`); //Cada item 
//console.log(`Ambiente (env) ${JSON.stringify(env, null,5)}`);