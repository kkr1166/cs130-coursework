 $('.flip-container .flipper').click(function() {
	$(this).closest('.flip-container').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});

$(document).ready(function(){
  $(".btn1").click(function(){
    $(".p").fadeOut(1000);
  });
  $(".btn2").click(function(){
    $(".p").fadeIn(1000);
  });
});

jQuery(document).ready(function($) {
    $(".item").mouseleave(function(){
        $(this).find('.info').stop().css('marginTop', '0');
    }).mouseenter(function(){
        $(this).find('.info').animate({ marginTop: '-50px', opacity: 0.5 }, 1000);
    });
});