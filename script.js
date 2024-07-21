window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// Style the Cursor

const cursorDot=document.getElementById("dot");
const cursorOutline=document.getElementById("outline");

window.onmousemove= function(e) {

    const posX=e.clientX;
    const posY=e.clientY;

    cursorDot.style.left=`${posX}px`;
    cursorDot.style.top=`${posY}px`;

    //cursorOutline.style.left=`${posX}px`;
    //cursorOutline.style.top=`${posY}px`;

    cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`
    },{duration:500,fill:"forwards"});
    
}