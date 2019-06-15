/*
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

*/

/*
// for latest post

var div = getElementById("latest");
var img = getElementById("img");
var caption = getElementById("caption");
var captionText = getElementById("img").alt;

caption.innerHTML = captionText;
*/

var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var l,s=document.getElementsByClassName("mySlides"),d=document.getElementsByClassName("demo"),n=document.getElementById("caption");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),l=0;l<s.length;l++)s[l].style.display="none";for(l=0;l<d.length;l++)d[l].className=d[l].className.replace(" active","");s[slideIndex-1].style.display="block",d[slideIndex-1].className+=" active",n.innerHTML=d[slideIndex-1].alt}showSlides(slideIndex);
