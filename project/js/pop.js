var dontThinkAudio = document.getElementById('dontThinkAudio');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (dontThinkAudio.paused) {
        dontThinkAudio.play();
        //controlBtn.textContent = "Pause";
        controlBtn.classList.remove("fa-play-circle");
        controlBtn.classList.add("fa-pause-circle");
        controlBtn.classList.remove("play");
        
        controlBtn.classList.add("pause");
        
    } else { 
        dontThinkAudio.pause();
         //controlBtn.textContent = "Play";
        controlBtn.classList.add("fa-play-circle");
        controlBtn.classList.remove("fa-pause-circle");
        controlBtn.classList.add("play");
        
        controlBtn.classList.remove("pause");
    }
}

controlBtn.addEventListener("click", playPause);
dontThinkAudio.addEventListener("ended", function() {
  controlBtn.className = "play";
});


