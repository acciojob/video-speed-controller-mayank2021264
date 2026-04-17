let video = document.querySelector('.player_video');
let progress = document.querySelector('.progress');
let progress_filled = document.querySelector('.progress__filled');
let toggle = document.querySelector('.toggle');
let range = document.querySelectorAll('input');
let skip = document.querySelectorAll('[data-skip]');

function togglePlay(){
	if(video.paused){
		video.play();
	}
	else{
		video.pause();
	}
}
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

function updateButton() {
	toggle.textContent = video.paused ? '►' : '❚ ❚';
}
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);

function handleRangeUpdate() {
  video[this.name] = this.value;
}
range.forEach(input => input.addEventListener('input', handleRangeUpdate));

function skipbtn() {
  video.currentTime += parseFloat(this.dataset.skip);
}
skip.forEach(btn => btn.addEventListener('click', skipbtn));

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = percent + '%';
}
video.addEventListener('timeupdate', handleProgress);

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
progress.addEventListener('click', scrub);





