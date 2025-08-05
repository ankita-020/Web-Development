/*** https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs ***/

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);

function toggleVideoStatus() {
  if(video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
 
function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML = '<i class="fa-solid fa-play fa-2x" />'
  } else {
    play.innerHTML = '<i class="fa-solid fa-pause fa-2x" />'
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  // Get mins
  let mins = Math.floor(video.currentTime / 60)
  if(mins < 10) {
    mins = `0${mins}`
  }
  // Get secs
  let secs = Math.floor(video.currentTime % 60)
  if(secs < 10) {
    secs = `0${secs}`
  }
  timestamp.innerHTML = `${mins}:${secs}`
}

function stopVideo() {
  video.currentTime = 0
  video.pause()
}

function setVideoProgress() {
   video.currentTime = (progress.value * video.duration) / 100
}

