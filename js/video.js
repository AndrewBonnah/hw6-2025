// Select the video element once so we can reuse it
var video = document.querySelector("#player1");

// When the page is fully loaded, ensure autoplay and loop are turned off
window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

// Play the video and set the initial volume from the slider
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log("Play button clicked.");
});

// Pause the video when the pause button is clicked
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause button clicked.");
});

// Slow down playback speed by 10% each time the button is clicked
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("New playback rate:", video.playbackRate);
});

// Speed up playback speed by 10% each time the button is clicked
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
	console.log("New playback rate:", video.playbackRate);
});

// Skip ahead 10 seconds; if close to the end, loop back to start
document.querySelector("#skip").addEventListener("click", function() {
	if ((video.currentTime + 10) > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time:", video.currentTime);
	console.log("Video duration:", video.duration);
});

// Toggle mute on and off, and update the button label
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		this.textContent = "Mute";
		video.muted = false;
	} else {
		this.textContent = "Unmute";
		video.muted = true;
	}
	console.log("Mute button clicked. Muted:", video.muted);
});

// Update volume in real time when the slider is adjusted
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("Volume slider changed to:", this.value);
});

// Apply retro visual styling using the oldSchool class
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage effect applied.");
});

// Remove retro styling and revert to default look
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Vintage effect removed.");
});
