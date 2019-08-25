var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    if (n > slides.length) {slideIndex = 1} 
  showSlides(slideIndex += n);
}
var slides = document.getElementsByClassName("slider");
// Thumbnail image controls
function currentSlide(n) {
    if (n > slides.length) {slideIndex = 1} 
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) Node{slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block"; 


  slideIndex++;
  setTimeout(function() {
        showSlides(n=slideIndex);
        // alert('hi')
    }, 6000);// Change image every 2 seconds
}

