//alert messages on load to force interaction and allow audio hover effect
//function hoverMessage() {
//  alert("Hover over the film posters to hear short score excerpts.");
//}
//
//function clickMessage() {
//  alert("Click on the film posters for more info about each film.");
//}

//play audio on hover

function playAudio(id) {
  var audio = document.getElementById("audio" + id);
  audio.play();
}

function pauseAudio(id) {
  var audio = document.getElementById("audio" + id);
  audio.pause();
}

//flip cards using jQuery
 $('.card .flipper .front').click(function() {
	$(this).closest('.card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});

 $('.card .flipper .back-button').click(function() {
	$(this).closest('.card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});

//open film in new tab
//window.open(
//  'placeholder.html',
//  '_blank' // <- This is what makes it open in a new window.
//);

//div messages to force interaction and allow audio hover effect
function divMessage() {
//    var ok = document.querySelector('.message-b');
//    ok.style.display = "none";
//    var cards = document.querySelector('.cards');
    cards.style.marginTop = "334px";
    var front = document.getElementsByClassName('front');
    var front = document.querySelector(".front");
    front.style.opacity = "";
    front.style.opacity = "1";
    
}

 

$(document).ready(function(){
  $(".ok").click(function(){
    $(".message-b").fadeOut(500);
      $("body").css("overflow", "auto");
  });
});

//jQuery(document).ready(function($) {
//    $(".ok").click(function(){
//        $('.cards').animate({ marginTop: '334px' }, 2000);
//    });
//});



//after we scroll so that cards marginTop is 100px, change marginTop to 100px permanently