window.onload = function() {
  var slideIndex = 0;
  var slides = document.getElementsByClassName("slide");

  // Hide all slides initially
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.visibility = "hidden";
  }

  // Display the first slide
  slides[0].style.opacity = "1";
  slides[0].style.visibility = "visible";

  function changeSlideTo(index) {
    slideIndex = index;
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
      slides[i].style.visibility = "hidden";
    }
    slides[slideIndex].style.opacity = "1";
    slides[slideIndex].style.visibility = "visible";
  }

  var thumbnails = document.getElementsByClassName("thumbnail");
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
      var index = Array.from(thumbnails).indexOf(this);
      changeSlideTo(index);
    });
  }
}
