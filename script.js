var kick = document.getElementById('kick-drum');
var snare = new Audio('./sounds/RF_snare.mp3');
let dSpeedText = 1;
//83 bpm
var drumSpeed = 723;
document.onkeydown = checkKey;

let kickSeq = [];
for (let i = 0; i < 16; i++) {
  kickSeq[i] = false;
}

function setKickSeq() {
  for (let i = 0; i < 16; i++) {
    kickSeq[i] = false;
  }
}
function emptySound(){
console.log("empty")
}

function startSequencer() {

  for (let i = 0; i < kickSeq.length; i ++) {
    console.log("speed " + drumSpeed)

    if (kickSeq[i] === false) {
      setTimeout(emptySound, drumSpeed);
      drumSpeed = drumSpeed + 723;

     } else if (kickSeq[i] === true) {
      console.log(kickSeq);
      setTimeout(cloneKick, drumSpeed);
      drumSpeed = drumSpeed + 723;
    } 
  }
}

// dropdown
function dropDownBtn() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// dropdown

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

function playAuto() {
// will be used to play both kick and snare
}

function playAutoKick() {

  checkKey();
  let myint = setInterval(cloneKick, drumSpeed);
  var stopButton = document.getElementById('stop-button')
  stopButton.addEventListener('click', clearKick)

  function clearKick(){

    clearInterval(myint);
  }
}

function playKick() {

  let myint = setInterval(cloneKick, drumSpeed);
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
  for (let j = 0; j < 4; j++) {

    let newBtn = [];
    let snareCol = document.createElement('div');
    snareCol.classList.add('col')
    if (j == 0) {
      snareCol.innerHTML = '<h3><br>Kick</h3>'
    } else if (j ==1) {
      snareCol.innerHTML = '<h3><br>Snare</h3>'
    } else if (j ==2) {
      snareCol.innerHTML = '<h3><br>Hihat</h3>'
    } else if (j ==3) {
      snareCol.innerHTML = '<h3><br>Openhat</h3>'
    }
  
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
          kickSeq[i] = true;
        } else if (newBtn[i].classList.contains('button-on')){
          newBtn[i].classList.add('button-off')
          newBtn[i].classList.remove('button-on')
          kickSeq[i] = false;
        }
      }
    }
  }
  // startSequencer();
}
 
function init() {

  createKickButtons();
  setKickSeq();
}

init();