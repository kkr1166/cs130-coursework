function viewScore() {
  var x = document.getElementById("embedded_score");
  var y = document.querySelector("#blacksugar").querySelector(".tooltiptext");
  var z = document.querySelector("#blacksugar").querySelector("#eye");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "";
    y.innerHTML = "Hide Score"; 
    z.classList.remove('fa-eye', 'fa-times');
    z.classList.add('fa-times');
  } else {
    x.style.display = "none";
    y.innerHTML = "";
    y.innerHTML = "View Score";
    z.classList.remove('fa-times', 'fa-eye');
    z.classList.add('fa-eye');    
  }
}

const audioPlayer1 = AudioPlayer('.player.blacksugar', "../media/alarm.mp3");

const audioPlayer2 = AudioPlayer('.player.next', "../media/dontthink.mp3");