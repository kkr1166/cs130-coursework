$(window).scroll(function(){
    $(".namediv").css("opacity", 1 - $(window).scrollTop() / 100);
  });






//function bioScroll() {
//    var bio = document.querySelector.getElementById("bio");
//    var bioHeight = bio.offsetHeight;
//    var navHeight = nav.offsetHeight;
//    var second = document.querySelector.getElementsByClassName("second");
//    second.style.height = "calc(100vh - navHeight - bioHeight)";
//    console.log(bioHeight);   
//}

