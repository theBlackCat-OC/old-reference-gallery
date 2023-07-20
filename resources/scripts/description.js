window.onload = function() {
  var slideIndex = 0;
  var slides = document.getElementsByClassName("slide");
  
  // Add descriptions for each slide
  var descriptions = [
    "Description 1",
    "Description 2",
    "Description 3"
  ];

  // Hide all slides initially
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.visibility = "hidden";
  }

  // Display the first slide and description
  slides[0].style.opacity = "1";
  slides[0].style.visibility = "visible";
  updateDescription(0);

  function changeSlideTo(index) {
    slideIndex = index;
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
      slides[i].style.visibility = "hidden";
    }
    slides[slideIndex].style.opacity = "1";
    slides[slideIndex].style.visibility = "visible";
    updateDescription(slideIndex);
  }

  function updateDescription(index) {
    var description = document.getElementById("description");
    description.textContent = descriptions[index];
  }

  var thumbnails = document.getElementsByClassName("thumbnail");
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function() {
      var index = Array.from(thumbnails).indexOf(this);
      changeSlideTo(index);
    });
  }
}
