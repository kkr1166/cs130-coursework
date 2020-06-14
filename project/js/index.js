$(window).scroll(function(){
    $(".namediv").css("opacity", 1 - $(window).scrollTop() / 100);
  });

//
//function menuFunction() {
//    var nav = document.querySelector("nav");
//    var bar = document.querySelector(".bar");
//    let counter = 0;
//    
//    if (counter === 0) {
//        nav.style.display === "none";
//    };
//    if (nav.style.display === "none") {
//        bar.style.display = "none";
//        nav.style.display = "block";
//    }
//    else {
//        bar.style.display = "block";
//        nav.style.display = "none";
//    }
//    console.log(++counter);
//    ++counter;
//    
//    console.log(counter);
//}

var x = document.querySelector(".x");
x.addEventListener("click", function () {
    var nav = document.querySelector("nav");
    var bar = document.querySelector(".bar");
    var bio = document.querySelector("#bio");
    nav.style.display === "none";
    if (nav.style.display === "none") {
        bar.style.display = "none";
        nav.style.display = "block";
    }
    else {
        bar.style.display = "block";
        nav.style.display = "none";
    }
});

var bar = document.querySelector(".bar");
bar.addEventListener("click", function () {
    var nav = document.querySelector("nav");
    var bar = document.querySelector(".bar");
    var bio = document.querySelector("#bio");
    nav.style.display === "none";
    if (nav.style.display === "none") {
        bar.style.display = "none";
        nav.style.display = "block";
    }
    else {
        bar.style.display = "block";
        nav.style.display = "none";
    }
});

//var ham = document.querySelector(".ham");
//ham.addEventListener("click", function () {
//    var nav = document.querySelector("nav");
//    var bar = document.querySelector(".bar");
//    var bio = document.querySelector("#bio");
//    nav.style.display === "none";
//    if (nav.style.display === "none") {
//        bar.style.display = "none";
//        nav.style.display = "block";
//    }
//    else {
//        bar.style.display = "block";
//        nav.style.display = "none";
//    }
//});
//function menuFunction() {
//    var nav = document.querySelector("nav");
//    var bar = document.querySelector(".bar");
//    var bio = document.querySelector("#bio");
//    nav.style.display === "none";
//    if (nav.style.display === "none") {
//        bar.style.display = "none";
//        nav.style.display = "block";
//    }
//    else {
//        bar.style.display = "block";
//        nav.style.display = "none";
//    }
//}
//
//// When the user clicks the button, open the modal 
//btn.addEventListener('click', function () {
//    var x = window.innerWidth;
//    if (x > 768) {
//        //event.preventDefault();
//        modal.style.display = "block";
//    } else {
//        //event.preventDefault();
//    }
//});

//function menuFunction() {
//  var nav = document.querySelector("nav");
//  var bar = document.querySelector(".bar");
//  nav.classList.toggle('hide');
//  bar.classList.toggle('hide');
//}
//
//function hideall(){
//    var numdivs=4;
//	for(i=1; i <= numdivs; i++) {
//	  x = document.getElementById('detailspecs_' + i).style;
//      x.display = "none";
//	 }
//	
//  }
//  
//  function showlayer(layerid){
//     hideall();
//	 x = document.getElementById(layerid).style;
//     x.display = "block";
//  }

//function bioScroll() {
//    var bio = document.querySelector.getElementById("bio");
//    var bioHeight = bio.offsetHeight;
//    var navHeight = nav.offsetHeight;
//    var second = document.querySelector.getElementsByClassName("second");
//    second.style.height = "calc(100vh - navHeight - bioHeight)";
//    console.log(bioHeight);   
//}

//function viewScore(id) {
//    var x = document.getElementById(id + "_score");
//    var y = document.getElementById(id);
//    if (x.style.display === "none") {
//        x.style.display = "block";
//        y.innerHTML = "";
//        y.innerHTML = "Hide Score"; 
//    }
//    else {
//        x.style.display = "none";
//        y.innerHTML = "";
//        y.innerHTML = "View Score";        
//    }   
//}