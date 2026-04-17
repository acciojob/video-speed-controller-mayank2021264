const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const ranges = document.querySelectorAll('input');
const skipButtons = document.querySelectorAll('[data-skip]');

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button icon
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Volume & Speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Skip forward/backward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Update progress bar
function handleProgress() {
  if (!video.duration) return;
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = percent + '%';
}

// Scrub (click on progress bar)
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event Listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

ranges.forEach(input => input.addEventListener('input', handleRangeUpdate));

skipButtons.forEach(btn => btn.addEventListener('click', skip));

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);