//Classical Player
function viewScore(id) {
    var x = document.getElementById(id + "_score");
    var y = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "";
        y.innerHTML = "Hide Lyrics"; 
    }
    else {
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "View Lyrics";        
    }   
}
 

 
const audioPlayer1 = AudioPlayer('.player.dontthink', "../music/popMusic/dontThink.mp3");

const audioPlayer2 = AudioPlayer('.player.affluentaphasia', "../music/popMusic/affluentAphasia.mp3");

const audioPlayer3 = AudioPlayer('.player.faeries', "../music/popMusic/faeries.mp3");

const audioPlayer4 = AudioPlayer('.player.skeletonlies', "../music/popMusic/skeletonLies.mp3");

const audioPlayer5 = AudioPlayer('.player.seasharpe', "../music/popMusic/seaSharpe.mp3");

const audioPlayer6 = AudioPlayer('.player.roslyn', "../music/popMusic/roslynByBon.mp3");

const audioPlayer7 = AudioPlayer('.player.why', "../music/popMusic/whyWait.mp3");

const audioPlayer8 = AudioPlayer('.player.river', "../music/popMusic/riverByIbeyi.mp3");
