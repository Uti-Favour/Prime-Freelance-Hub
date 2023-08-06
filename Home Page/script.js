document.addEventListener('DOMContentLoaded', function() {
   const landingPageVideo = document.getElementById('landingPageVideo');
   const playButton = document.getElementById('playButton');
   const removeButton = document.getElementById('removeButton');
   
   playButton.addEventListener('click', () => {
     landingPageVideo.play();
     playButton.style.display = 'none';
     removeButton.style.display = 'block';
   });
   
   removeButton.addEventListener('click', () => {
     landingPageVideo.pause();
     landingPageVideo.currentTime = 0;
     playButton.style.display = 'block';
     removeButton.style.display = 'none';
   });
   
   landingPageVideo.addEventListener('click', () => {
     if (landingPageVideo.requestFullscreen) {
       landingPageVideo.requestFullscreen();
     } else if (landingPageVideo.mozRequestFullScreen) {
       landingPageVideo.mozRequestFullScreen();
     } else if (landingPageVideo.webkitRequestFullscreen) {
       landingPageVideo.webkitRequestFullscreen();
     } else if (landingPageVideo.msRequestFullscreen) {
       landingPageVideo.msRequestFullscreen();
     }
   });
   
   document.addEventListener('fullscreenchange', () => {
     if (!document.fullscreenElement) {
       landingPageVideo.pause();
       landingPageVideo.currentTime = 0;
       playButton.style.display = 'block';
       removeButton.style.display = 'none';
     }
   });
   
   
});