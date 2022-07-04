const kick = document.getElementById('kick-drum');
const snare = new Audio('./sounds/RF_snare.mp3');
const hihat = new Audio('./sounds/RF_HiHat.mp3');
const openhat = new Audio('./sounds/RF_Openhat.mp3');

let dSpeedText = 1;
let drumSpeed = 1000;
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

var presetFourOnTheFloor = document.getElementById("preset1");
var preset2 = document.getElementById("preset2");

bpmText.innerHTML = 93;
loopText.innerHTML = 1;


presetFourOnTheFloor.onclick = function() {
  preset1();
}

preset2.onclick = function() {
  console.log("here")
  }

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

function resetPreset() {
  for (let p = 0; p < 32 ;p++) {
    beatState[p] = [false,false,false,false];
  }
  for (let k = 0; k < 128 ;k++) {
    newBtn[k].classList.remove('button-on')
  }
}

function preset1() {
  resetPreset();
  beatState[0][0] = true;
  beatState[4][0] = true;
  beatState[8][0] = true;
  beatState[12][0] = true;
  beatState[16][0] = true;
  beatState[20][0] = true;
  beatState[24][0] = true;
  beatState[28][0] = true;
  newBtn[0].classList.add('button-on')
  newBtn[4].classList.add('button-on')
  newBtn[8].classList.add('button-on')
  newBtn[12].classList.add('button-on')
  newBtn[16].classList.add('button-on')
  newBtn[20].classList.add('button-on')
  newBtn[24].classList.add('button-on')
  newBtn[28].classList.add('button-on')

  beatState[2][1] = true;
  beatState[6][1] = true;
  beatState[10][1] = true;
  beatState[14][1] = true;
  beatState[18][1] = true;
  beatState[22][1] = true;
  beatState[26][1] = true;
  beatState[30][1] = true;
  newBtn[34].classList.add('button-on')
  newBtn[38].classList.add('button-on')
  newBtn[42].classList.add('button-on')
  newBtn[46].classList.add('button-on')
  newBtn[50].classList.add('button-on')
  newBtn[54].classList.add('button-on')
  newBtn[58].classList.add('button-on')
  newBtn[62].classList.add('button-on')

  beatState[1][2] = true;
  beatState[3][2] = true;
  beatState[5][2] = true;
  beatState[7][2] = true;
  beatState[9][2] = true;
  beatState[11][2] = true;
  beatState[15][2] = true;
  beatState[17][2] = true;
  beatState[19][2] = true;
  beatState[21][2] = true;
  beatState[23][2] = true;
  beatState[25][2] = true;
  beatState[27][2] = true;
  beatState[31][2] = true;
  newBtn[65].classList.add('button-on')
  newBtn[67].classList.add('button-on')
  newBtn[69].classList.add('button-on')
  newBtn[71].classList.add('button-on')
  newBtn[73].classList.add('button-on')
  newBtn[75].classList.add('button-on')
  newBtn[79].classList.add('button-on')
  newBtn[81].classList.add('button-on')
  newBtn[83].classList.add('button-on')
  newBtn[85].classList.add('button-on')
  newBtn[87].classList.add('button-on')
  newBtn[89].classList.add('button-on')
  newBtn[91].classList.add('button-on')
  newBtn[95].classList.add('button-on')

  beatState[13][3] = true;
  beatState[29][3] = true;
  newBtn[109].classList.add('button-on')
  newBtn[125].classList.add('button-on')
}

function preset2() {
  resetPreset();
  beatState[0][0] = true;
  newBtn[40].classList.add('button-on')
}

function emptySound(){
  console.log("empty sound")
}

function startSequencer() {
  console.log("speed " + drumSpeed);
  console.log(beatState);
  console.log(newBtn);

  for (let z = 60; z < 200; z++) {
    if (speedMod == z) {
      speedSet = 60000/z;
    }
  }

  for (let k = 0; k < loopSlider.value; k++) {


    for (let i = 0; i < 32; i++) {


      function kickColourOn() {
        newBtn[i].classList.add('button-playing')
      }

      function snareColourOn() {
        newBtn[i+32].classList.add('button-playing')
      }

      function hihatColourOn() {
        newBtn[i+64].classList.add('button-playing')
      }

      function openhatColourOn() {
        newBtn[i+96].classList.add('button-playing')
      }


      function kickColourOff(){
        newBtn[i].classList.remove('button-playing')
        newBtn[i].classList.add('button-on')
        // 3 on
        // for (let g = 0; g < 128 ;g++) {
        //   if (newBtn[g].classList.contains('button-on')) {
        //     newBtn[g].classList.add('button-playing')
        //   }
        // }
      }

      function snareColourOff(){
        newBtn[i+32].classList.remove('button-playing')
        newBtn[i+32].classList.add('button-on')
      }

      function hihatColourOff(){
        newBtn[i+64].classList.remove('button-playing')
        newBtn[i+64].classList.add('button-on')
      }

      function openhatColourOff(){
        newBtn[i+96].classList.remove('button-playing')
        newBtn[i+96].classList.add('button-on')
      }

      if (beatState[i][0]) {
        setTimeout(cloneKick, drumSpeed);
        setTimeout(kickColourOn, drumSpeed - 50);
        setTimeout(kickColourOff, drumSpeed);
      } 
      if (beatState[i][1]) {
        setTimeout(cloneSnare, drumSpeed);

        //for progress bar style
        // newBtn[i+32].classList.add('button-playing')
        setTimeout(snareColourOn, drumSpeed - 50);
        setTimeout(snareColourOff, drumSpeed);
      } 
      if (beatState[i][2]) {
        setTimeout(cloneHihat, drumSpeed);
        // newBtn[i+64].classList.add('button-playing')
        setTimeout(hihatColourOn, drumSpeed - 50);
        setTimeout(hihatColourOff, drumSpeed);
      } 
      if (beatState[i][3]) {
        setTimeout(cloneOpenhat, drumSpeed);
        // newBtn[i+96].classList.add('button-playing')
        setTimeout(openhatColourOn, drumSpeed - 50);
        setTimeout(openhatColourOff, drumSpeed);
      }
      if (!beatState[i][0] && !beatState[i][1] && !beatState[i][2] && !beatState[i][3]) {
        setTimeout(emptySound, drumSpeed);
      } 

      drumSpeed = drumSpeed + speedSet;
    }
  } 
}







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