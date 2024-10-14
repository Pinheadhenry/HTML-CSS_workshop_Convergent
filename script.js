// script.js

// Alert message when the page loads
// window.onload = function() {
//   alert("Welcome to my first web page!");
// };

// Function to change the text when button is clicked
function changeText() {
  document.getElementById("myParagraph").innerText = "You clicked the button!";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  console.log(slides)

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}