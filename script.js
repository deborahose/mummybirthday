const images = [
  'imgs/new_imgs/children.jpg',
  'imgs/new_imgs/i and mum1.jpg',
  'imgs/new_imgs/i and mum2.jpg',
  'imgs/new_imgs/i and mum3.jpg',
  'imgs/new_imgs/i and mum4.jpg',
  'imgs/new_imgs/i and mum5.jpg',
  'imgs/new_imgs/i and mum6.jpg',
  'imgs/new_imgs/i and mum7.jpg',
  'imgs/new_imgs/i and mum8.jpg',
  'imgs/new_imgs/mum1.jpg',
  'imgs/new_imgs/mum2.jpg',
  'imgs/new_imgs/mum3.jpg',
  'imgs/new_imgs/mum4.jpg',
  'imgs/new_imgs/mum and dad.jpg'
];

//SEQUENTIAL GENERATION
let currentIndex = 0;
  function newQuotes(){
  const img = document.createElement('img');
  img.src = images[currentIndex];
  img.classList.add('styled-image'); 
  document.getElementById('quoteDisplay').innerHTML = '';
  document.getElementById('quoteDisplay').appendChild(img);
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
  }
  newQuotes();


  //HIDDEN BIRTHDAY MESSAGE

  document.getElementById("openMessage").onclick = function() {
    document.getElementById("hiddenMessage").style.display = "block";
    document.getElementById("openMessage").textContent = "Deborah's message says:";
  }


  // AUDIO 
  window.addEventListener("load", function() {
    var audio = document.getElementById("hbdAudio");
    audio.muted = false;
    audio.play().catch(error => {
        console.log('Autoplay was prevented. Interact with the page to play the audio.');
    });
});

document.body.addEventListener("click", function() {
    var audio = document.getElementById("hbdAudio");
    if (audio.paused) {
        audio.play();
    }
});