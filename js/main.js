'use strict';
const cond1 = false;
const cond2 = true;
const cond3 = true;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const btn = document.querySelector('.js__btn');
const bingoNum = document.querySelector('.js__bingoNums');
let gCounter = 0;

function randNumGenerator(){
  console.log('Genero un numero aleatorio entre 1 y 100 y lo devuelvo');
  iamNum();
}
function iamNum(){
  console.log('Soy el numero generado');
  checkList();
}
function checkList(){
  console.log('Compruebo si mi numero esta en la lista');
  if(cond1 === true){
    inList();
  }else{
    notInList();
  }
}
function notInList(){
  console.log('El numero no    inList();esta en la lista');
  addToList();
}
function inList(){
  console.log('El numero ya esta en la lista');
  randNumGenerator();
}
function addToList(){
  console.log('Añado el numero en la lista');
  checkLengthList();
}
function checkLengthList(){
  console.log('Compruebo que el la longitud de la lista es menor que vente');
  if (cond2 === true){
    createElements();
  }else{
    randNumGenerator();
  }
}
function createElements(){
  let counter = 0;
  for (let item in array){
    const div = document.createElement('div');
    const content = document.createTextNode(item);
    div.appendChild(content);
    div.classList.add(`div${counter}`);
    div.classList.add(`empty`);
    bingoNum.appendChild(div);
    counter += 1;
  }
  console.log('creo los elementos y los selecciono todos y los meto en un array');
}
function getIndex(){
  console.log('consigo el indice del numero generado con array.indexOf(num)');
  findDiv();
}
function findDiv(){
  console.log('Recorro el array de los divs y busco el elemento con la clase div${index}');
  changeStyle();
}
function changeStyle(){
  console.log('Eliminar la clase style normal y añadir clase style selected');
  gameCounter();
}
function gameCounter(){
  gCounter += 1;
  console.log('Añado uno al contador de juego');
  checkCounter();
  return gCounter;
}
function checkCounter(){
  if(cond3===true){
    console.log('El contador ha llegado a 20');
    bingo();
  }
  else{
    console.log('Aún no tenemos ganador');
  }
}
function bingo(){
  console.log('has ganado');
}
randNumGenerator();
function randNumGenerator2(){
  console.log('Genero un numero aleatorio para jugar entre 1 y 100 y lo devuelvo');
  iamNum2();
}
function iamNum2(){
  console.log('Soy el numero generado para jugar');
  checkList2();
}
function checkList2(){
  console.log('Compruebo si mi numero esta en la lista');
  if(cond1 === true){
    getIndex();
  }else{
    console.log('pide otro número para jugar');
  }
}
btn.addEventListener('click', randNumGenerator2);