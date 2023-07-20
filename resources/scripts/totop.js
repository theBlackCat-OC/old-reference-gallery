var mybutton = document.getElementById("goTopBtn");

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

function goToTop() {
  document.documentElement.style.scrollBehavior = 'smooth';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
