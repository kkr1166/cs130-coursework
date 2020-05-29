//function myFunction() {
//  document.getElementById("name").innerHTML = "";
//}


$(window).scroll(function(){
    $(".namediv").css("opacity", 1 - $(window).scrollTop() / 350);
  });
