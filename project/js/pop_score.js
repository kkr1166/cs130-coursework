//Classical Player
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
 

 
const audioPlayer1 = AudioPlayer('.player.heterochromia', "../music/popMusic/dontThink.mp3");

const audioPlayer2 = AudioPlayer('.player.bonesick', "../music/popMusic/affluentAphasia.mp3");

const audioPlayer3 = AudioPlayer('.player.blacksugar', "../music/popMusic/faeries.mp3");

const audioPlayer4 = AudioPlayer('.player.smokewater', "../music/popMusic/skeletonLies.mp3");

const audioPlayer5 = AudioPlayer('.player.beehivecoke', "../music/popMusic/seaSharpe.mp3");

const audioPlayer6 = AudioPlayer('.player.mode', "../music/popMusic/roslynByBon.mp3");

const audioPlayer7 = AudioPlayer('.player.tiptoe', "../music/popMusic/whyWait.mp3");

const audioPlayer8 = AudioPlayer('.player.rain', "../music/popMusic/riverByIbeyi.mp3");
