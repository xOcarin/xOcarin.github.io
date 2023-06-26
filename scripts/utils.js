

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



function playMusic(id) {
  var audio = document.getElementById(id);
  audio.volume = 0; // Start with volume set to 0

  audio.play();

  var fadeStep = 0.001; // Adjust this value to control the fade speed
  var fadeInterval = 150; // Adjust this value to control the fade interval (in milliseconds)

  var fadeTimer = setInterval(function() {
    if (audio.volume + fadeStep < .03) {
      audio.volume += fadeStep;
    } else {
      audio.volume = .03; // Ensure volume reaches 1
      clearInterval(fadeTimer); // Stop the fade-in process
    }
  }, fadeInterval);
}

function stopMusic(id) {
  var audio = document.getElementById(id);

  var fadeStep = 0.001; // Adjust this value to control the fade speed
  var fadeInterval = 50; // Adjust this value to control the fade interval (in milliseconds)

  var fadeTimer = setInterval(function() {
    if (audio.volume - fadeStep > 0) {
      audio.volume -= fadeStep;
    } else {
      audio.volume = 0; // Ensure volume reaches 0
      audio.pause(); // Stop the music playback
      clearInterval(fadeTimer); // Stop the fade-out process
    }
  }, fadeInterval);
}









function restrictTimeoutInput() {
  var input = document.getElementById("timeoutform");
  var value = parseInt(input.value);
  if (value < 1 || value > 30 || isNaN(value)) {
    input.value = 15;
  }
}

function showmainmenu(){
  var div = document.getElementById("mainmenu");
  var contact = document.getElementById('contact');
    contact.style.opacity = 1;
    div.style.transform = "scale(1)";
    div.style.opacity = 1;
    div.style.pointerEvents = 'auto';
    var canvas = document.getElementById('canvas')
    canvas.style.transform = 'scale(1)'
    canvas.style.opacity = 1;
     setTimeout(function (){
      div.style.filter = "blur(0px)";
      canvas.style.filter = "blur(0px)"
      }, 2000)
}


function hidemainmenu(){
  var div = document.getElementById("mainmenu");
  var contact = document.getElementById('contact');
  contact.style.opacity = 0;
  div.style.transform = 'scale(.5)'
  div.style.opacity = .2;
  div.style.pointerEvents = 'none';
  var canvas = document.getElementById('canvas')
  canvas.style.transform = 'scale(.5)'
  canvas.style.opacity = .2;
  setTimeout(function (){
    div.style.filter = "blur(10px)"
    canvas.style.filter = "blur(10px)"
  }, 2000)
}

function showprojmenu() {
  var div = document.getElementById("projectmenu");

    div.style.transform = "scale(1)";
    div.style.opacity = 1;
    div.style.display = 'flex';
    setTimeout(function() {
      div.style.pointerEvents = 'auto';
    }, 2000);
}
function hideprojmenu() {
  var div = document.getElementById("projectmenu");

    div.style.transform = "scale(8)";
    div.style.pointerEvents = 'none';
    div.style.opacity = 0;
}


function showaboutmemenu() {
  var div = document.getElementById("aboutmemenu");

  div.style.transform = "scale(1)";
  div.style.opacity = 1;
  div.style.display = 'flex';
  setTimeout(function() {
    div.style.pointerEvents = 'auto';
  }, 2000);
}
function hideaboutmemenu() {
  var div = document.getElementById("aboutmemenu");

  div.style.transform = "scale(8)";
  div.style.pointerEvents = 'none';
  div.style.opacity = 0;
  setTimeout(function() {

  }, 2000); // Adjust the delay time as needed
}


function hoverGifs(hover, id) {
  var element = document.getElementById(id);
  element.style.transform = 'scale(1.2)';
    if (hover) {
      element.style.transform = 'scale3d(1.1, 1.1, 1.1)';
    } else {
      element.style.transform = 'none';
    }
  }


function fadeinText(hover, id) {
  var element = document.getElementById(id);

  if (hover) {
    element.style.opacity = '1';
    element.style.transition = 'opacity 0.3s ease-in-out';
  } else {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.3s ease-in-out';
  }
}

function showgallery(gallery, hide, thumb) {
  var div = document.getElementById(gallery);
  var hidden = document.getElementsByClassName("projpage");
  var galbtn = document.getElementById(thumb);

  galbtn.style.opacity = 0;
  galbtn.style.pointerEvents = 'none';
  // Iterate through the hidden elements and hide them individually
  for (var i = 0; i < 6; i++) {
    hidden[i].style.filter = 'blur(15px)';
    console.log("here: " + i + ' ' + hidden[i] + " length: " + hidden.length);
    hidden[i].style.pointerEvents = 'none';
  }
  hidden[2].style.display = 'none';
  hidden[4].style.display = 'none';
  div.style.display = 'flex';
  div.style.opacity = 1;
  div.style.pointerEvents = 'auto';
}

function hidegallery(gallery, hide, thumb) {
  var div = document.getElementById(gallery);
  var hidden = document.getElementsByClassName("projpage");
  var galbtn = document.getElementById(thumb);

  galbtn.style.opacity = 1;
  galbtn.style.pointerEvents = 'auto';
  // Iterate through the hidden elements and hide them individually
  for (var i = 0; i < 6; i++) {
    hidden[i].style.filter = 'blur(0px)';
    hidden[i].style.pointerEvents = 'auto';
  }
  hidden[2].style.display = 'flex';
  hidden[4].style.display = 'flex';
  hidden[1].style.filter = 'drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.9)';
  hidden[3].style.filter = 'drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.9)';
  div.style.display = 'none';
  div.style.opacity = 0;
  div.style.pointerEvents = 'none';
}

//GALLERY STUFF




var ttpics = ["./assets/ttgallery/tt1uc.png", "./assets/ttgallery/tt2uc.png", "./assets/ttgallery/tt3uc.png", "./assets/ttgallery/tt4uc.png", "./assets/ttgallery/tt5uc.png"];
var currentIndex = 0; // Track the current index of the ttpics array

function selectphoto(photono, container, xbtn, picid){
  currentIndex = photono;
  var cont = document.getElementById(container);
  var x = document.getElementById(xbtn);
  cont.style.opacity = 1;
  x.style.opacity = 1;
  cont.style.display = 'flex';
  x.style.display = 'flex';
  cont.style.pointerEvents = 'auto';
  x.style.pointerEvents = 'auto';

  var overlay = document.getElementById('overlay');
  overlay.style.opacity = 1;
  overlay.style.display = 'inline-block';
  var spotlight = document.getElementById(picid);
  spotlight.src = ttpics[currentIndex];

}


function hitright(id){
  photoslide(id);
}

function hitleft(id){
  photoslide(id);
}


function photoslide(mainpic) {
  var spotlight = document.getElementById(mainpic);
  console.log(currentIndex);
  // Increment the currentIndex and wrap around if it exceeds array length
  currentIndex = (currentIndex + 1) % ttpics.length;

  // Set the new src for the spotlight element
  spotlight.src = ttpics[currentIndex];
}

function hidebigpic(container, xbtn){
  var cont = document.getElementById(container);
  var x = document.getElementById(xbtn);
  var overlay = document.getElementById('overlay');


  cont.style.opacity = 0;
  x.style.opacity = 0;
  overlay.style.opacity = 0;
  cont.style.display = 'none';
  x.style.display = 'none';
  cont.style.pointerEvents = 'none';
  x.style.pointerEvents = 'none';
  overlay.style.pointerEvents = 'none';

}


function displayProj(projId, hiddenId){
  var projpage = document.getElementById(projId);
  var hide = document.getElementById(hiddenId);

  projpage.style.transform = 'translate(-50%, -50%)';

  hide.style.transform = 'translateX(100%)';


}

function hideProj(projId, hiddenId){
  var projpage = document.getElementById(projId);
  var hide = document.getElementById(hiddenId);

  projpage.style.transform = 'translate(-200%, -50%)';
  hide.style.transform = 'translateX(0%)';


}

function displayProjr(projId, hiddenId){
  var projpage = document.getElementById(projId);
  var hide = document.getElementById(hiddenId);

  projpage.style.transform = 'translate(100%, -50%)';

  hide.style.transform = 'translateX(-100%)';


}

function hideProjr(projId, hiddenId){
  var projpage = document.getElementById(projId);
  var hide = document.getElementById(hiddenId);

  projpage.style.transform = 'translate(250%, -50%)';
  hide.style.transform = 'translateX(0%)';


}

function showEmail(){
  var email = document.getElementById('email2');
  email.style.opacity = 1;
}

function hideCover(){
  var cover = document.getElementById('cover');
  cover.style.opacity = 0;
  setTimeout(function() {
    cover.style.display = 'none';
  }, 2000);
}






var enterbtn = document.getElementById('start');
let i = 1;
let y = 1;

function ticker() {
  y++;

  if (y >= 0 && y < 50) {
    i -= 0.02;
  } else if (y >= 50 && y < 100) {
    i += 0.02;
  } else {
    y = 1;
  }

  enterbtn.style.opacity = i;
}

setInterval(ticker, 20);
