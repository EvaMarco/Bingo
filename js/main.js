'use strict';

let array = [];
let divsArray = [];
let gameArray = [];
const btn = document.querySelector('.js__btn');
const bingoNum = document.querySelector('.js__bingoNums');
const gamediv = document.querySelector('.js__randNums');
const win = document.querySelector('.win');
const initBtn = document.querySelector('.init');
let gCounter = 0;

// Vamos a crear el tablero de juego con estas funciones

function randNumGenerator(){
  const randNum = Math.floor(Math.random() * 100) + 1;
  checkList(randNum, array);
  return randNum;
}

function checkList(num, arr1){
  console.log(arr1);
  if(arr1.length){
    console.log('existe length', arr1);
    if(arr1.includes(num)){
      randNumGenerator();
    }else{
      arr1.push(num);
      checkLengthList(array, 20);
    }
  }
  else{
    arr1.push(num);
    checkLengthList(array, 20);
  }
  return array;
}

function checkLengthList(list, max){
  if (list.length === max){
    createElements(array);
  }else{
    randNumGenerator();
  }
}

function createElements(l){
  let counter = 0;
  for (let item of l){
    const div = document.createElement('div');
    const content = document.createTextNode(item);
    div.appendChild(content);
    div.classList.add(`numberDiv`);
    div.classList.add(`div${counter}`);
    div.classList.add(`empty`);
    bingoNum.appendChild(div);
    counter += 1;
  }
  divsArray = bingoNum.querySelectorAll('.numberDiv');
  return divsArray;
}

randNumGenerator();

// Ahora ya he creado el tablero de juego y tenemos que empezar a jugar.

function randNumGenerator2(){
  const randNum = Math.floor(Math.random() * 100) + 1;
  if(gameArray.length){
    if(gameArray.includes(randNum)){
      randNumGenerator2();
    }else{
      creatediv(randNum);
    }
  }
  else{
    creatediv(randNum);
  }
  return gameArray, randNum;
}
function creatediv(n){
  gameArray.push(n);
  const div = document.createElement('div');
  const content = document.createTextNode(n);
  div.appendChild(content);
  div.classList.add(`gameDiv`);
  gamediv.appendChild(div);
  checkList2(n, array);
}
function checkList2(num, ar){
  for (let i of ar){
    if(i === num){
      getIndex(i, array);
    }
  }
}
function getIndex(b, arr){
  const arrayIndex = arr.indexOf(b);
  findDiv(arrayIndex, divsArray);
}
function findDiv(num2, arr2){
  for(let item of arr2){
    if(item.classList.contains(`div${num2}`)){
      item.classList.remove('empty');
      item.classList.add('selected');
    }
  }
  gameCounter();
}
function gameCounter(){
  gCounter += 1;

  checkCounter(gCounter);
  return gCounter;
}
function checkCounter(c){
  if(c===20){
    bingo();
  }
}
function bingo(){
  win.classList.toggle('hidden');
}
function init(){
  win.classList.toggle('hidden');
  array = [];
  divsArray = [];
  gameArray = [];
  bingoNum.innerHTML = '';
  gamediv.innerHTML = '';
  randNumGenerator();
}

btn.addEventListener('click', randNumGenerator2);
initBtn.addEventListener('click', init);