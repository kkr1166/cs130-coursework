function viewScore(id) {
    var x = document.getElementById(id + "_score");
    var y = document.getElementById(id);
    if (x.style.display === "none") {
        for (let item of document.getElementsByClassName("tooltiptext")) {
            item.style.display = "none";
        }
        for (let thing of document.getElementsByClassName("part")) {
            thing.innerHTML = "";
            thing.innerHTML = "parts";
            thing.style.paddingLeft ="3px";
            thing.style.paddingRight ="3px";
        }
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let clicker of document.getElementsByClassName("view_score")) {
            clicker.innerHTML = "";
            clicker.innerHTML = "score";
            clicker.style.paddingLeft ="3px";
            clicker.style.paddingRight ="3px";
        }
        
        x.style.display = "block";
        y.innerHTML = "";
        y.innerHTML = "hide"; 
        y.style.paddingLeft ="6.5px";
        y.style.paddingRight ="6.5px";
    }
    else {
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "score";
        y.style.paddingLeft ="3px";
        y.style.paddingRight ="3px";
    }   
}

function viewParts(id) {
    var x = document.getElementById(id + "_links");
    var y = document.getElementById(id);
    if (x.style.display === "none") {
        for (let item of document.getElementsByClassName("tooltiptext")) {
            item.style.display = "none";
        }
        for (let thing of document.getElementsByClassName("part")) {
            thing.innerHTML = "";
            thing.innerHTML = "parts";
            thing.style.paddingLeft ="3px";
            thing.style.paddingRight ="3px";
        }
//        var a = document.getElementById(bonesick_parts);
//        a.innerHTML = "";
//        a.innerHTML = "parts";
//        a.style.paddingLeft ="3px";
//        a.style.paddingRight ="3px";
//        
//        var b = document.getElementById(blacksugar_parts);
//        b.innerHTML = "";
//        b.innerHTML = "parts";
//        b.style.paddingLeft ="3px";
//        b.style.paddingRight ="3px";
//        
//        var c = document.getElementById(smokewater_parts);
//        c.innerHTML = "";
//        c.innerHTML = "parts";
//        c.style.paddingLeft ="3px";
//        c.style.paddingRight ="3px";
//        
//        var d = document.getElementById(beehivecoke_parts);
//        d.innerHTML = "";
//        d.innerHTML = "parts";
//        d.style.paddingLeft ="3px";
//        d.style.paddingRight ="3px";
//        
//        var e = document.getElementById(mode_parts);
//        e.innerHTML = "";
//        e.innerHTML = "parts";
//        e.style.paddingLeft ="3px";
//        e.style.paddingRight ="3px";
//        
//        var f = document.getElementById(mourningmoon_parts);
//        f.innerHTML = "";
//        f.innerHTML = "parts";
//        f.style.paddingLeft ="3px";
//        f.style.paddingRight ="3px";
        
        x.style.display = "block";
        y.innerHTML = "";
        y.innerHTML = "hide"; 
        y.style.paddingLeft ="5.5px";
        y.style.paddingRight ="5.5px";
//        y.style.color ="grey";
//        y.style.hpaddingRight ="6px";
    }
    else {
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "parts";
        y.style.paddingLeft ="3px";
        y.style.paddingRight ="3px";
//        y.style.color ="whitesmoke";
    }   
}


const audioPlayer1 = AudioPlayer('.player.heterochromia', "../music/classicalMusic/heterochromia.mp3");

//const audioPlayer1 = AudioPlayer('.player.heterochromia', "../music/classicalMusic/heterochromia.mp3");

const audioPlayer2 = AudioPlayer('.player.bonesick', "../music/classicalMusic/rain.mp3");

const audioPlayer3 = AudioPlayer('.player.blacksugar', "../music/classicalMusic/rain.mp3");

const audioPlayer4 = AudioPlayer('.player.smokewater', "../music/classicalMusic/rain.mp3");

const audioPlayer5 = AudioPlayer('.player.beehivecoke', "../music/classicalMusic/rain.mp3");

//const audioPlayer2 = AudioPlayer('.player.bonesick', "../music/classicalMusic/boneSick.m4a");
//
//const audioPlayer3 = AudioPlayer('.player.blacksugar', "../music/classicalMusic/blackSugar.m4a");
//
//const audioPlayer4 = AudioPlayer('.player.smokewater', "../music/classicalMusic/smokeWater.m4a");
//
//const audioPlayer5 = AudioPlayer('.player.beehivecoke', "../music/classicalMusic/beehiveCoke.m4a");

const audioPlayer6 = AudioPlayer('.player.mode', "../music/classicalMusic/mode.mp3");

const audioPlayer7 = AudioPlayer('.player.tiptoe', "../music/classicalMusic/tiptoe.mp3");

const audioPlayer8 = AudioPlayer('.player.rain', "../music/classicalMusic/rain.mp3");

const audioPlayer9 = AudioPlayer('.player.mourningmoon', "../music/classicalMusic/mourningMoon.mp3");