

//sounds
function playHoverSound() {
  var audio = document.getElementById("hoverAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function playClickSound() {
  var audio = document.getElementById("clickAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function playFadeSound() {
  var audio = document.getElementById("fadeAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function playCharmingSound() {
  var audio = document.getElementById("charmingAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function playWhistleSound() {
  var audio = document.getElementById("whistleAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function playPipSound() {
  var audio = document.getElementById("pipAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function playSloshSound() {
  var audio = document.getElementById("sloshAudio");
  audio.play();
  audio.volume = 0.04; // set volume to 50%
}

function playBlipSound() {
  var audio = document.getElementById("blipAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}
function playAmbSound() {
  var audio = document.getElementById("ambAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function replaceText(newText) {
  var element = document.getElementById("projText");
  if (element) {
    element.innerText = newText;
    element.style.opacity = 1;
  } else {
    console.error("Element with ID '" + elementId + "' not found.");
  }
}

function removeText() {
  var element = document.getElementById("projText");
  if (element) {
    element.style.opacity = 0;
  } else {
    console.error("Element with ID '" + elementId + "' not found.");
  }
}

