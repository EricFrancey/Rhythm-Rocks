const kick = document.getElementById('kick-drum');
const snare = new Audio('./sounds/RF_snare.mp3');
const hihat = new Audio('./sounds/RF_HiHat.mp3');
const openhat = new Audio('./sounds/RF_Openhat.mp3');

let dSpeedText = 1;
let drumSpeed = 150;
// document.onkeydown = checkKey;

// let kickSeq = [];
let barCount = 0;
// let setBeatState = [false,false,false,false];
let beatState = [
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false]
];

// function initBeatState (){
//   for (let i = 0; i < 16; i ++) {
//   beatState[i] = setBeatState;

//   }
//   console.log(beatState);
// }


// function countBeats() {
//   document.getElementById('hit-button').innerHTML = "Beat: " + barCount + 1;
// }

// function setKickSeq() {

//   for (let i = 0; i < 16; i++) {
//     kickSeq[i] = false;
//   }
// }



function emptySound(){
console.log("empty")
}

function startSequencer() {

  console.log("speed " + drumSpeed)
  console.log(beatState)
for (let i = 0; i < 16; i++) {

// any 1 on
// xooo
if (beatState[i][0] && !beatState[i][1] && !beatState[i][2] && !beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    drumSpeed = drumSpeed + 150;
// oxoo
  } else if (!beatState[i][0] && beatState[i][1] && !beatState[i][2] && !beatState[i][3]) {

    setTimeout(cloneSnare, drumSpeed);
    drumSpeed = drumSpeed + 150;
// ooxo
  } else if (!beatState[i][0] && !beatState[i][1] && beatState[i][2] && !beatState[i][3]) {

    setTimeout(cloneHihat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// ooox
  } else if (!beatState[i][0] && !beatState[i][1] && !beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;

// any 2 on
// xxoo
  } else if (beatState[i][0] && beatState[i][1] && !beatState[i][2] && !beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    setTimeout(cloneSnare, drumSpeed);
    drumSpeed = drumSpeed + 150;
// oxxo
  } else if (!beatState[i][0] && beatState[i][1] && beatState[i][2] && !beatState[i][3]) {

    setTimeout(cloneSnare, drumSpeed);
    setTimeout(cloneHihat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// ooxx
  } else if (!beatState[i][0] && !beatState[i][1] && beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneHihat, drumSpeed);
    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// xoxo
  } else if (beatState[i][0] && !beatState[i][1] && beatState[i][2] && !beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    setTimeout(cloneHihat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// oxox
  } else if (!beatState[i][0] && beatState[i][1] && !beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneSnare, drumSpeed);
    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// xoox
  } else if (beatState[i][0] && !beatState[i][1] && !beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;

// any 3 on
// xxxo
  } else if (beatState[i][0] && beatState[i][1] && beatState[i][2] && !beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    setTimeout(cloneSnare, drumSpeed);
    setTimeout(cloneHihat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// oxxx
  } else if (!beatState[i][0] && beatState[i][1] && beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneSnare, drumSpeed);
    setTimeout(cloneHihat, drumSpeed);
    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// xoxx
  } else if (beatState[i][0] && !beatState[i][1] && beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    setTimeout(cloneHihat, drumSpeed);
    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// xxox
  } else if (beatState[i][0] && beatState[i][1] && !beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    setTimeout(cloneSnare, drumSpeed);
    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// all on
// xxxx
  } else if (beatState[i][0] && beatState[i][1] && beatState[i][2] && beatState[i][3]) {

    setTimeout(cloneKick, drumSpeed);
    setTimeout(cloneSnare, drumSpeed);
    setTimeout(cloneHihat, drumSpeed);
    setTimeout(cloneOpenhat, drumSpeed);
    drumSpeed = drumSpeed + 150;
// all off
// oooo
  } else if (!beatState[i][0] && !beatState[i][1] && !beatState[i][2] && !beatState[i][3]) {

    setTimeout(emptySound, drumSpeed);
    drumSpeed = drumSpeed + 150;
    
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

// function checkKey(e) {
//   e = e || window.event;
    
//   if (e.key == 'ArrowUp') {
//     document.getElementById('drumSpeed').innerHTML = dSpeedText + 1;
//     dSpeedText += 1;
//     drumSpeed -= 100;
//     } else if (e.key == 'ArrowDown') {
//     document.getElementById('drumSpeed').innerHTML = dSpeedText - 1;
//     dSpeedText -= 1;
//     drumSpeed += 100;
//   }
// }

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
          // kickSeq[i] = true;
          beatState[i][j] = true;
        } else if (newBtn[i].classList.contains('button-on')){
          newBtn[i].classList.add('button-off')
          newBtn[i].classList.remove('button-on')
          // kickSeq[i] = false;
          beatState[i][j] = false;
        }
      }
    }
  }
}
 
function init() {
  createKickButtons();
  console.log(beatState);
  // setKickSeq();
  // initBeatState();
}

init();