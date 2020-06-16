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

//fade out ok
$(document).ready(function(){
  $(".ok").click(function(){
    $(".message-b").fadeOut(500);
      $("body").css("overflow", "auto");
  });
});
