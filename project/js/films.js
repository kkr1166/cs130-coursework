var cards = document.querySelectorAll(“.card”);

for (card of cards) {
    card.addEventListener(‘mouseenter’, playAudio(card.id));
}

function playAudio(id) {
  var audio = document.getElementById(“audio” + id);
  audio.play();
  console.log("testing");
  
}





