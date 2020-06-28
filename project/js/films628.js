//play corresponding audio when first poster is flipped- in HTML?
//flip card button turns off music of corresponding poster
//when click on new poster, all audio is paused before corresponding poster plays
//when you click watch, all audio stops
//maybe make cards flip to poster side when a new poster is clicked so you're not confused where the audio is coming from


//play audio on hover
function playAudio(id) {
  var audio = document.getElementById("audio" + id);
  audio.play();
}

function pauseAudio(id) {
  var audio = document.getElementById("audio" + id);
  audio.pause();
}
//pause all audio
function pauseAll() {
    for (let item of document.getElementsByClassName('track')) {
            item.pause();
        }
}


//flip cards using jQuery
 $('.card .flipper .front').click(function() {
	$(this).closest('.card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
     //pause any playing audio
     //play corrrseponding audio
});

 $('.card .flipper .back-button').click(function() {
	$(this).closest('.card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
     //pause corrseponding audio
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