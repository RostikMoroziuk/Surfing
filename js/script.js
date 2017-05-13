onload = resizeControll;
$(window).resize(resizeControll);

function resizeControll() {
  var nav = document.getElementsByClassName("navbar")[0];

  if ($(window).width() <= 767) {
    nav.className = "navbar navbar-default";
  } else {
    nav.className = "navbar";
  }
}

$('.carousel').carousel({
  interval: 6500
})


//slick slider
$('.boards').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  centerPadding: '0px',
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Animate on scroll
AOS.init({
  duration: 1500
});

//Video player
window.onload = function () {
  var video = document.getElementById("video");
  var playButton = document.getElementById("play-pause");
  playButton.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();
      playButton.style.display = "none";
    } else {
      video.pause();
      playButton.style.display = "block";
    }
  });
  video.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();
      playButton.style.display = "none";
    } else {
      video.pause();
      playButton.style.display = "block";
    }
  });
}