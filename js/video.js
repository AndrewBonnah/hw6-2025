// Declare video variable
var video;

// Wait for the window to load
window.addEventListener("load", function () {
  console.log("Good job opening the window");

  // Get the video element
  video = document.getElementById("player1");

  // Play video
  document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();
    document.getElementById("volume").textContent = `${video.volume * 100}%`; // Update volume display
  });

  // Pause video
  document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
  });

  // Slow down video playback
  document.querySelector("#slower").addEventListener("click", function () {
    if (video.playbackRate > 0.5) {
      video.playbackRate -= 0.1;
      console.log(`Playback rate slowed to ${video.playbackRate.toFixed(1)}x`);
    } else {
      console.log("Cannot slow down further.");
    }
  });

  // Speed up video playback
  document.querySelector("#faster").addEventListener("click", function () {
    if (video.playbackRate < 2) {
      video.playbackRate += 0.1;
      console.log(`Playback rate increased to ${video.playbackRate.toFixed(1)}x`);
    } else {
      console.log("Cannot speed up further.");
    }
  });

  // Skip ahead in the video
  document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
      video.currentTime += 10;
    } else {
      video.currentTime = 0; // Restart if skipping past the end
    }
    console.log(`Skipped ahead, current time: ${video.currentTime.toFixed(2)} seconds`);
  });

  // Mute/unmute video
  document.querySelector("#mute").addEventListener("click", function () {
    video.muted = !video.muted; // Toggle mute state
    this.textContent = video.muted ? "Unmute" : "Mute";
    console.log(`Video muted: ${video.muted}`);
  });

  // Adjust volume using slider
  document.querySelector("#slider").addEventListener("input", function () {
    const volumeValue = this.value / 100; // Convert slider value to range [0,1]
    video.volume = volumeValue;
    document.getElementById("volume").textContent = `${this.value}%`; // Update volume display
    console.log(`Volume set to ${volumeValue}`);
  });

  // Apply "Old School" style
  document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("vintage"); // Add CSS class for old-school style
    console.log("Vintage style applied.");
  });

  // Revert to original style
  document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("vintage"); // Remove CSS class for old-school style
    console.log("Original style applied.");
  });
});
