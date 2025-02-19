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

let winNumber = 0;

let randomNum1;
let randomNum2;
let randomNum3;

rollBtn.onclick = function () {
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
