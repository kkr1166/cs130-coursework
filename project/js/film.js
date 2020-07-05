//maybe make cards flip to poster side when a new poster is clicked so you're not confused where the audio is coming from


//play audio on hover
function playAudio(id) {
  var one = document.getElementById("audioone");
  one.pause(); 
  var two = document.getElementById("audiotwo");
  two.pause();
  var three = document.getElementById("audiothree");
  three.pause();
  var four = document.getElementById("audiofour");
  four.pause();
  var five = document.getElementById("audiofive");
  five.pause();
  var six = document.getElementById("audiosix");
  six.pause();
  var seven = document.getElementById("audioseven");
  seven.pause();
  var eight = document.getElementById("audioeight");
  eight.pause();
  var nine = document.getElementById("audionine");
  nine.pause();
  var ten = document.getElementById("audioten");
  ten.pause();
  var audio = document.getElementById("audio" + id);
  audio.play();
}

function pauseAudio(id) {
  var audio = document.getElementById("audio" + id);
  audio.pause();
}

//flip cards using jQuery
 $('.card .flipper .front').click(function() {
     ///have all cards flip to the front
     ///remove class .hover from all cards, then add class hover to current card
    $('#one').removeClass('hover');
    $('#two').removeClass('hover');
    $('#three').removeClass('hover');
    $('#four').removeClass('hover');
    $('#five').removeClass('hover');
    $('#six').removeClass('hover');
    $('#seven').removeClass('hover');
    $('#eight').removeClass('hover');
    $('#nine').removeClass('hover');
    $('#ten').removeClass('hover');
	$(this).closest('.card').addClass('hover');
    $(this).css('transform, rotateY(180deg)');
    
     ////
     ////
     ///
     ////
     ////
});

 $('.card .flipper .back').click(function() {
	$(this).closest('.card').removeClass('hover');
    $(this).css('transform, rotateY(180deg)');
});
 
//fade out ok
$(document).ready(function(){
  $(".ok").click(function(){
    $(".message-b").fadeOut(500);
      $("body").css("overflow", "auto");
  });
});

function fadeIn(obj) {
    $(obj).fadeIn(1000);
} 