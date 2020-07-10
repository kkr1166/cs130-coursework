//Classical Player
function viewScore(id) {
    var x = document.getElementById(id + "_score");
    var y = document.getElementById(id);
    var z = document.getElementById(id + "_logic_btn");
    var w = document.getElementById(id + "_logic_pdf");
    if (x.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        x.style.display = "block";
        y.innerHTML = "";
        y.innerHTML = "hide"; 
        y.style.paddingLeft ="4.5px";
        y.style.paddingRight ="4.5px";
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }
    else {
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }   
}
 
//Don't Think pdf
function logicDontThink(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("dontthink_view_score");
    var y = document.getElementById("dontthink_view");
    var w = document.getElementById("dontthink_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

//logicaffluentaphasia pdf
function logicaffluentaphasia(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("affluentaphasia_view_score");
    var y = document.getElementById("affluentaphasia_view");
    var w = document.getElementById("affluentaphasia_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

//logicfaeries pdf
function logicfaeries(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("faeries_view_score");
    var y = document.getElementById("faeries_view");
    var w = document.getElementById("faeries_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

//logicskeletonlies pdf
function logicskeletonlies(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("skeletonlies_view_score");
    var y = document.getElementById("skeletonlies_view");
    var w = document.getElementById("skeletonlies_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

//logicseasharpe pdf
function logicseasharpe(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("seasharpe_view_score");
    var y = document.getElementById("seasharpe_view");
    var w = document.getElementById("seasharpe_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

//logicroslyn pdf
function logicroslyn(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("roslyn_view_score");
    var y = document.getElementById("roslyn_view");
    var w = document.getElementById("roslyn_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

//logicwhy pdf
function logicwhy(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("why_view_score");
    var y = document.getElementById("why_view");
    var w = document.getElementById("why_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

//logicriver pdf
function logicriver(id) {
    var z = document.getElementById(id);
    var x = document.getElementById("river_view_score");
    var y = document.getElementById("river_view");
    var w = document.getElementById("river_view_logic_pdf");
    if (w.style.display === "none") {
        for (let pdf of document.getElementsByClassName("score")) {
            pdf.style.display = "none";
        }
        for (let lybtn of document.getElementsByClassName("lyrics")) {
            lybtn.innerHTML = "";
            lybtn.innerHTML = "lyrics";
            lybtn.style.paddingLeft ="1.2px";
            lybtn.style.paddingRight ="1.2px";
        }
        for (let lobtn of document.getElementsByClassName("logic")) {
            lobtn.innerHTML = "";
            lobtn.innerHTML = "logic";
            lobtn.style.paddingLeft ="3px";
            lobtn.style.paddingRight ="3px";
        }
        w.style.display = "block";
        z.innerHTML = "";
        z.innerHTML = "hide"; 
        z.style.paddingLeft ="5px";
        z.style.paddingRight ="5px";
        x.style.display = "none";
        y.innerHTML = "";
        y.innerHTML = "lyrics";
        y.style.paddingLeft ="1.2px";
        y.style.paddingRight ="1.2px";
    }
    else {
        w.style.display = "none";
        z.innerHTML = "";
        z.innerHTML = "logic";
        z.style.paddingLeft ="3px";
        z.style.paddingRight ="3px";
    }   
}

const audioPlayer1 = AudioPlayer('.player.dontthink', "../../music/popMusic/dontThink.mp3");

const audioPlayer2 = AudioPlayer('.player.affluentaphasia', "../../music/popMusic/affluentAphasia.mp3");

const audioPlayer3 = AudioPlayer('.player.faeries', "../../music/popMusic/faeries.mp3");

const audioPlayer4 = AudioPlayer('.player.skeletonlies', "../../music/popMusic/skeletonLies.mp3");

const audioPlayer5 = AudioPlayer('.player.seasharpe', "../../music/popMusic/seaSharpe.mp3");

const audioPlayer6 = AudioPlayer('.player.roslyn', "../../music/popMusic/roslynByBon.mp3");

const audioPlayer7 = AudioPlayer('.player.why', "../../music/popMusic/whyWait.mp3");

const audioPlayer8 = AudioPlayer('.player.river', "../../music/popMusic/riverByIbeyi.mp3");
