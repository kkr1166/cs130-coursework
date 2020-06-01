function viewScore() {
  var x = document.getElementById("embedded_score");
  var y = document.querySelector("#blacksugar").querySelector(".tooltiptext");
  var z = document.querySelector("#blacksugar").querySelector("#eye");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.innerHTML = "";
    y.innerHTML = "Hide Score"; 
    z.classList.remove('fas fa-eye', 'fas fa-times');
    z.classList.add('fas fa-times');
  } else {
    x.style.display = "none";
    y.innerHTML = "";
    y.innerHTML = "View Score";
    z.classList.remove('fas fa-times', 'fas fa-eye');
    z.classList.add('fas fa-eye');    
  }
}

const audioPlayer = AudioPlayer('.player', "../media/alarm.mp3");