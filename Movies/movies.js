

const card = document.querySelector ("card")
const trailerVideo = document.getElementById ("trailer")
const cover = document.querySelector ("img1")

cover.addEventListener('click', function() {
    trailerVideo.style.display = 'block';
    trailerVideo.play();
  });