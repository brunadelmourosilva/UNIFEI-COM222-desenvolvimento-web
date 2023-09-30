//const idp = document.getElementById("idp");
//console.log(idp.innerText);

//const p = document.querySelector('p');
//console.log(p.innerHTML);
//console.log(p.innerText);
//console.log(p.textContent);

const input = document.querySelector('input');
input.name = 'username';
input.setAttribute('name', 'username');


//primeira op pra add uma classe do css
const p = document.querySelector('p');
p.style.color = 'blue';
p.style.fontSize = '3rem';

//segunda op
p.classList.add('class1');
p.classList.add('class2');

p.classList.toggle('class2');