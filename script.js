const kick = document.getElementById('kick-drum');
const snare = new Audio('./sounds/RF_snare.mp3');
const hihat = new Audio('./sounds/RF_HiHat.mp3');
const openhat = new Audio('./sounds/RF_Openhat.mp3');

let dSpeedText = 1;
let drumSpeed = 150;
let barCount = 0;

let beatState = [];
for (let p = 0; p < 32 ;p++) {
  beatState[p] = [false,false,false,false];
}

let speedMod = 93;

//93 bpm default
let speedSet = 645;

let loopSlider = document.getElementById("loopRange");
let loopText = document.getElementById("loops");
var bpmSlider = document.getElementById("bpmRange");
var bpmText = document.getElementById("bpm");

bpmText.innerHTML = 93;
loopText.innerHTML = 1;

bpmSlider.oninput = function() {

  for (let i = 60; i < 200; i++) {
    if (bpmSlider.value == i) {
      bpmText.innerHTML = i;
      speedMod = this.value;
    }
  }
}

loopSlider.oninput = function() {
  if (loopSlider.value == 1) {
    loopText.innerHTML = this.value;
  }
  if (loopSlider.value == 2) {
    loopText.innerHTML = this.value;
  }
  if (loopSlider.value == 3) {
    loopText.innerHTML = this.value;
  }
}

  //s
// function countBeats() {
//   document.getElementById('hit-button').innerHTML = "Beat: " + barCount + 1;
// }

function emptySound(){
  console.log("empty sound")
}

function startSequencer() {
  console.log("speed " + drumSpeed)
  console.log(beatState)

  for (let z = 60; z < 200; z++) {
    if (speedMod == z) {
      speedSet = 60000/z;
    }
  }

  for (let k = 0; k < loopSlider.value; k++) {
    for (let i = 0; i < 32; i++) {

      if (beatState[i][0]) {
        setTimeout(cloneKick, drumSpeed);
      } 
      if (beatState[i][1]) {
        setTimeout(cloneSnare, drumSpeed);
      } 
      if (beatState[i][2]) {
        setTimeout(cloneHihat, drumSpeed);
      } 
      if (beatState[i][3]) {
        setTimeout(cloneOpenhat, drumSpeed);
      }
      if (!beatState[i][0] && !beatState[i][1] && !beatState[i][2] && !beatState[i][3]) {
        setTimeout(emptySound, drumSpeed);
      } 

      drumSpeed = drumSpeed + speedSet;
    }
  }
}

// dropdown
// function dropDownBtn() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// dropdown

function cloneKick() {
  let newKick = kick.cloneNode();
  newKick.play();
}

function cloneSnare() {
  let newSnare = snare.cloneNode();
  newSnare.play();
}

function cloneHihat() {
  let newHihat = hihat.cloneNode();
  newHihat.play();
}

function cloneOpenhat() {
  let newOpenhat = openhat.cloneNode();
  newOpenhat.play();
}

// function playAuto() {
// // will be used to play both kick and snare
// }

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

function createSequencerButtons() {
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
    for (let i = 0; i < 32; i++) {
      newBtn[i] = document.createElement('button');
      newBtn[i].id = 'newBtn'
      newBtn[i].classList.add('button-off')
      newBtn[i].classList.add('sequencer-button')
      newBtn[i].innerHTML = i+1;
      document.body.appendChild(newBtn[i]);
      newBtn[i].addEventListener('click', newColor)

      function newColor() {
        if (newBtn[i].classList.contains('button-off')) {
          newBtn[i].classList.remove('button-off')
          newBtn[i].classList.add('button-on')
          beatState[i][j] = true;
        } else if (newBtn[i].classList.contains('button-on')){
          newBtn[i].classList.add('button-off')
          newBtn[i].classList.remove('button-on')
          beatState[i][j] = false;
        }
      }
    }
  }
}

createSequencerButtons();