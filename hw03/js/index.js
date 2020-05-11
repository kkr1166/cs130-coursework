
// This variable will always hold the "active" photo element (the div)
let activeCard = null;

// PART 1: Make the showPhoto function work
const showPhoto = (e) => {
    activeCard = e.target;
    console.log('the active element is:', activeCard);
    const imgURL = activeCard.style.backgroundImage;
    console.log('the background image of the active element is:', imgURL);
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview').className = "preview active";
};    
    
//document.querySelector('.card').onclick = showPhoto;
const cards = document.querySelectorAll('.card');
for (card of cards) {
     card.onclick = showPhoto;
 }

// PART 3: Close functionality
const close = () => {
    document.querySelector('.active').className = "preview";
    // a. This function should remove the “active” class from the 
    //    “.preview_box” element.
    // b. Attach your newly created “close” function to the onclick
    //    event handler of the close button (in the upper right-hand corner).
};

document.querySelector('.close').onclick = close;

// PART 4: Next functionality:
// a. Modify the “next” function (below) so that that it replaces 
//    the “.featured_image” background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = () => {
    activeCard = activeCard.nextElementSibling;
    console.log(activeCard.nextElementSibling);
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    // HINTS:
    // 1. update the "activeCard" variable so that it's now the
    //    next card in the list.
    // 2. Then do the same steps as before (in the showPhoto).
    
};

document.querySelector('.next').onclick = next;
document.querySelector('.featured_image').onclick = next;

// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).
const previous = () => {
    activeCard = activeCard.previousElementSibling;
    console.log(activeCard.previousElementSibling);
    document.querySelector('.featured_image').style.backgroundImage = activeCard.style.backgroundImage;
    // HINTS:
    // 1. update the "activeCard" variable so that it's now the
    //    next card in the list.
    // 2. Then do the same steps as before (in the showPhoto).
    
};

document.querySelector('.prev').onclick = previous;