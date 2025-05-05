document.addEventListener("DOMContentLoaded", function() {
  anime.timeline({ easing: 'easeOutExpo' })
    .add({
      targets: '#stanford',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 500
    })
    .add({
      targets: '.arrow:nth-of-type(1)',
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 500
    })
    .add({
      targets: '#apple',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800
    })
    .add({
      targets: '.arrow:nth-of-type(2)',
      opacity: [0, 1],
      translateX: [-20, 0],
      duration: 500
    })
    .add({
      targets: '#nexa-ai',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800
    });
});
