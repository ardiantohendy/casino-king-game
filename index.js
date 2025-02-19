// let username;

// document.getElementById(`myText`).textContent = username;

// let username;

// document.getElementById(`myBtn`).onclick = function () {
//   username = document.getElementById(`myText`).value;
//   document.getElementById(`h1`).textContent = `Welcome ${username}`;
//   console.log(username);
// };

const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const rollBtn = document.getElementById("rollBtn");
const anouncement = document.getElementById("alert");
const winNum = document.getElementById("winNum");
const btnPlay = document.getElementById("btnPlay");
const inputField = document.getElementById("inputField");
const userTurn = document.getElementById("num1");
const turnNumber = document.getElementById("num2");

let winNumber = 0;
let numOfTurn;
let turn = 0;
let num;
let much = 0;

let randomNum1;
let randomNum2;
let randomNum3;

rollBtn.style.zIndex = -100;

btnPlay.onclick = function () {
  numOfTurn = inputField.value;
  num = Number(numOfTurn);
  if (typeof num == "number" && num !== 0) {
    turnNumber.textContent = num;
    rollBtn.style.zIndex = 0;
  } else {
    alert("Please input a number!");
    console.log(num, typeof num);
  }
};

rollBtn.onclick = function () {
  much++;
  muchPlush = userTurn.textContent = much;
  if (num === much) {
    rollBtn.style.zIndex = -100;
    turnNumber.textContent = 0;
    userTurn.textContent = 0;
    much = 0;
  }
  randomNum1 = Math.floor(Math.random() * 6) + 1;
  randomNum2 = Math.floor(Math.random() * 6) + 1;
  randomNum3 = Math.floor(Math.random() * 6) + 1;

  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;

  if (randomNum1 === randomNum2 && randomNum2 === randomNum3) {
    anouncement.style.opacity = 100;
    winNumber++;
    winNum.textContent = winNumber;
  } else {
    anouncement.style.opacity = 0;
  }
};
