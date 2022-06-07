var kick = document.getElementById('kick-drum');
var snare = new Audio('./sounds/RF_snare.mp3');
let dSpeedText = 1;
var drumSpeed = 500;

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
  newKick.play();
}

function cloneSnare() {

  let newSnare = snare.cloneNode();
  newSnare.play();
}

function playKick() {

  checkKey();
  let myint = setInterval(cloneKick, drumSpeed);
  var stopButton = document.getElementById('stop-button')
  stopButton.addEventListener('click', clearKick)

  function clearKick(){

    clearInterval(myint);
  }
}

function playSnare() {

  checkKey();
  let myint = setInterval(cloneSnare, drumSpeed);
  var stopButton = document.getElementById('stop-button')
  stopButton.addEventListener('click', clearSnare)

  function clearSnare(){

    clearInterval(myint);
  }

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
  snareCol.innerHTML = '<p>Snare</p>'
  document.body.appendChild(snareCol);
  for (let i = 0; i < 16; i++) {
    newBtn[i] = document.createElement('button');
    newBtn[i].id = 'newBtn'
    newBtn[i].classList.add('button-off')
    newBtn[i].innerHTML = i+1;
    document.body.appendChild(newBtn[i]);

    newBtn[i].addEventListener('click', newColor)

    function newColor() {
      if (newBtn[i].classList.contains('button-off')) {
        newBtn[i].classList.remove('button-off')
        newBtn[i].classList.add('button-on')
      } else if (newBtn[i].classList.contains('button-on')){
        newBtn[i].classList.add('button-off')
        newBtn[i].classList.remove('button-on')
      }
    }
  }
}

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