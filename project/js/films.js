//alert messages on load to force interaction and allow audio hover effect
function hoverMessage() {
  alert("Hover over the film posters to hear short score excerpts. Click on the film posters for more info about each film. (None of the 'watch film' buttons work yet.)");
}

function clickMessage() {
  alert("Click on the film posters for more info about each film.");
}

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
 $('.card .flipper').click(function() {
	$(this).closest('.card').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});

//open film in new tab
//window.open(
//  'placeholder.html',
//  '_blank' // <- This is what makes it open in a new window.
//);