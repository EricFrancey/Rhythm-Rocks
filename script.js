// var kick = new Audio('./sounds/RF_kick.mp3');
var kick = document.getElementById('kick-drum');
var snare = new Audio('./sounds/RF_snare.mp3');
let dSpeedText = 1;

var drumSpeed = 500;

// function pauseKick() {
//   document.getElementById('stopButton').addEventListener('click', () => {
//     document.querySelectorAll('audio').forEach(el => el.pause());
//   });
// }

// document.getElementById('stopButton').addEventListener('click', () => {
// document.getElementById('newKick').forEach(el => el.pause());
// });


document.onkeydown = checkKey;
function checkKey(e) {
  
    
  e = e || window.event;
    
  if (e.key == 'ArrowUp') {
    document.getElementById('drumSpeed').innerHTML = dSpeedText + 1;
    dSpeedText += 1;
    drumSpeed -= 100;
    } else if (e.key == 'ArrowDown') {
    document.getElementById('drumSpeed').innerHTML = dSpeedText - 1;
    dSpeedText -= 1;
    drumSpeed += 100;
  }
}

function cloneKick() {
  let newKick = kick.cloneNode();
  // newKick.id = "newKick"
  newKick.play();
}

function cloneSnare() {
  let newSnare = snare.cloneNode();
  newSnare.play();
}

function playKick() {
  checkKey();
  setInterval(cloneKick, drumSpeed);
}

function setSnare() {
  snare.play();
}
  
function playSnare() {
  checkKey();
  setInterval(cloneSnare, drumSpeed);
}

function stopAll() {
  location.reload();
// kick.pause();
}

function createKickButtons() {

  let newBtn = [];
  let snareCol = document.createElement('div');
  snareCol.classList.add('col')
  snareCol.innerHTML = '<p>Kick</p>'
  document.body.appendChild(snareCol);
  for (let i = 0; i < 16; i++) {
    newBtn[i] = document.createElement('button');
    newBtn[i].id = 'newBtn'
    newBtn[i].innerHTML = i+1;
    document.body.appendChild(newBtn[i]);
  }
}

function createSnareButtons() {

  let newBtn = [];
  let snareCol = document.createElement('div');
  snareCol.classList.add('col')
  // snareCol.classList.add('instrument-headings')
  snareCol.innerHTML = '<p>Snare</p>'
  document.body.appendChild(snareCol);
  for (let i = 0; i < 16; i++) {
    newBtn[i] = document.createElement('button');
    newBtn[i].id = 'newBtn'
    newBtn[i].innerHTML = i+1;
    document.body.appendChild(newBtn[i]);
  }
}


// function createSnareButtons() {

//   let newBtn = [];
//   let snareCol = document.createElement('div');
//   snareCol.classList.add('col')
//   // snareCol.classList.add('instrument-headings')
//   snareCol.innerHTML = '<pSnare</p>'
//   document.body.appendChild(snareCol);
//   for (let i = 0; i < 16; i++) {
//     newBtn[i] = document.createElement('button');
//     newBtn[i].id = 'newBtn';
//     newBtn[i].innerHTML = i+1;
//     document.body.appendChild(newBtn[i]);
//   }
// }

function createOpenhatButtons() {

  let newBtn = [];
  let snareCol = document.createElement('div');
  snareCol.classList.add('col')
  snareCol.innerHTML = '<p>Openhat</p>'
  document.body.appendChild(snareCol);
  for (let i = 0; i < 16; i++) {
    newBtn[i] = document.createElement('button');
    newBtn[i].id = 'newBtn';
    newBtn[i].innerHTML = i+1;
        // newBtn[i].classList.add('btn-lg');
        // newBtn[i].classList.add('btn-danger');
    document.body.appendChild(newBtn[i]);
  }
}
  
function createHihatButtons() {

  let newBtn = [];
  let snareCol = document.createElement('div');
  snareCol.classList.add('col')
  snareCol.innerHTML = '<p>Hihat</p>'
  document.body.appendChild(snareCol);
  for (let i = 0; i < 16; i++) {
    newBtn[i] = document.createElement('button');
    newBtn[i].id = 'newBtn';
    newBtn[i].innerHTML = i+1;
          // newBtn[i].classList.add('btn-lg');
          // newBtn[i].classList.add('btn-danger');
    document.body.appendChild(newBtn[i]);
  }
}
     
function init() {
  createKickButtons();
  createSnareButtons();
  createHihatButtons();
  createOpenhatButtons();
}

init();