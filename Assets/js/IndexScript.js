  document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
 
document.addEventListener("DOMContentLoaded", function() {
  const imagesToPreload = [
    "Assets/img/universiadad.jpg",
    "Assets/img/civil.jpg",
    "Assets/img/medicina.jpg",
    "Assets/img/equipo.jpg",
    "Assets/img/mtyy.jpg",
    "Assets/img/abo.jpg"
  
  ];

  function preloadImages() {
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  preloadImages();
});

window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;


    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
      
      
    }
    else {
      reveals[i].classList.remove("active");
      
    }
}
}