//function viewScore(id) {
//  var x = document.getElementsByClassName("embedded_score");
//  var y = document.querySelector("#blacksugar").querySelector(".tooltiptext");
//  var z = document.querySelector("#blacksugar").querySelector("#eye");
//  if (x.style.display === "none") {
//    x.style.display = "block";
//    y.innerHTML = "";
//    y.innerHTML = "Hide Score"; 
//    z.classList.remove('fa-eye', 'fa-times');
//    z.classList.add('fa-times');
//  } else {
//    x.style.display = "none";
//    y.innerHTML = "";
//    y.innerHTML = "View Score";
//    z.classList.remove('fa-times', 'fa-eye');
//    z.classList.add('fa-eye');    
//  }
//}
 
function viewScore(id) {
    var x = document.getElementById(id + "_score");
    var y = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "";
        y.innerHTML = "Hide Score"; 
    }
    else {
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "View Score";        
    }   
}
 
//var cards = document.querySelectorAll(".card");

//function playAudio(id) {
//  var audio = document.getElementById("audio" + id);
//  audio.play();
//}
//
//function pauseAudio(id) {
//  var audio = document.getElementById("audio" + id);
//  audio.pause();
//}

const audioPlayer1 = AudioPlayer('.player.heterochromia', "../music/classicalMusic/heterochromia.mp3");

const audioPlayer2 = AudioPlayer('.player.bonesick', "../music/classicalMusic/boneSick.m4a");

const audioPlayer3 = AudioPlayer('.player.blacksugar', "../music/classicalMusic/blackSugar.m4a");

const audioPlayer4 = AudioPlayer('.player.smokewater', "../music/classicalMusic/smokeWater.m4a");

const audioPlayer5 = AudioPlayer('.player.beehivecoke', "../music/classicalMusic/beehiveCoke.m4a");

const audioPlayer6 = AudioPlayer('.player.mode', "../music/classicalMusic/mode.mp3");

const audioPlayer7 = AudioPlayer('.player.tiptoe', "../music/classicalMusic/tiptoe.mp3");

const audioPlayer8 = AudioPlayer('.player.rain', "../music/classicalMusic/rain.mp3");

const audioPlayer9 = AudioPlayer('.player.mourningmoon', "../music/classicalMusic/mourningMoon.mp3");