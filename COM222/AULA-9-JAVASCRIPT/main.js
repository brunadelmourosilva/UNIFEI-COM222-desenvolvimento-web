//console.log('Hello, World!');
/*
function nome(x,y){
    return x + y;
}

//anônima
const nome2 = function nome(x,y){
    return x + y;
}

//lamba ex.
const nome3 = (x, y) => {
    return x - y;
}

//alert(nome(2, 2));

//alert(nome2(2, 2));

alert(nome3(2, 2));
*/

const foodsList = (foods) => {
    let msg = '------------';

    if(foods.length === 0) {
        msg = msg.concat('\n empty list \n');
    } else {
        for(let i = 0; i < foods.length; i++) { 
            msg = msg.concat(`\n[${i}] - ${foods[i]}\n`);
        }
    }
    msg = msg.concat('------------');
    
    return msg;
}

let option = '';
const foods = [];

do {

    option= prompt(`O que deseja fazer?
    Digite “novo” para adicionar um item
    Digite “deletar” para remover um item
    Digite “listar”
    Digite “q” para sair`).toLocaleLowerCase().trim();

    switch(option){
        case 'novo':
            let item = prompt('Enter the item');
            foods.push(item);
            break;

        case 'listar':
            alert(foodsList(foods));
            break;

        case 'deletar':
            let list = foodsList(foods);
            let index = prompt(`Enter the item index that you wish remove:\n ${list}`);
            foods.splice(index, 1); //n functions
            break;

        default:
            alert('Wrong option.');
            option = 'q';
            break;
    }

} while(option !== 'q');