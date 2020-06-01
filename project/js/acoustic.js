<script src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"></script>
<script>
SC.initialize({
  client_id: 'PgKFRG98vbasF0IWR0AuZ09A4TgDnwk1'
});

// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play().then(function(){
    console.log('Playback started!');
  }).catch(function(e){
    console.error('Playback rejected. Try calling play() from a user interaction.', e);
  });
});
</script>