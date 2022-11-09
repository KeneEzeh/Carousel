
let slideIndex = 1;
showSlides(slideIndex);

function change(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slider = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slider.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slider[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
