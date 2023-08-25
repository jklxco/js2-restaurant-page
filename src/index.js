import './style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js'


let btnHome = document.querySelector('button#home');
let btnMenu = document.querySelector('button#menu');
let btnContact = document.querySelector('button#contact');

btnHome.addEventListener('click', addHomeToDOM);
btnMenu.addEventListener('click', addMenuToDOM);
btnContact.addEventListener('click', addContactToDOM);

function addHomeToDOM(){
    container.replaceChildren('');
    container.appendChild(home());
}
function addMenuToDOM(){
    container.replaceChildren('');
    container.appendChild(menu());
}
function addContactToDOM(){
    container.replaceChildren('');
    container.appendChild(contact());
}

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
container.appendChild( home() );