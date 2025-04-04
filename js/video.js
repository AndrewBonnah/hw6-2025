// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get video element
  const video = document.getElementById("player1");

  // Get buttons and controls
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const slowerButton = document.getElementById("slower");
  const fasterButton = document.getElementById("faster");
  const skipButton = document.getElementById("skip");
  const muteButton = document.getElementById("mute");
  const volumeSlider = document.getElementById("slider");
  const volumeDisplay = document.getElementById("volume");
  const vintageButton = document.getElementById("vintage");
  const originalButton = document.getElementById("orig");

  // Play video
  playButton.addEventListener("click", function () {
    video.play();
    console.log("Video playing...");
  });

  // Pause video
  pauseButton.addEventListener("click", function () {
    video.pause();
    console.log("Video paused...");
  });

  // Slow down video playback
  slowerButton.addEventListener("click", function () {
    if (video.playbackRate > 0.5) {
      video.playbackRate -= 0.1;
      console.log(`Playback rate slowed to ${video.playbackRate}`);
    } else {
      console.log("Cannot slow down further.");
    }
  });

  // Speed up video playback
  fasterButton.addEventListener("click", function () {
    if (video.playbackRate < 2) {
      video.playbackRate += 0.1;
      console.log(`Playback rate increased to ${video.playbackRate}`);
    } else {
      console.log("Cannot speed up further.");
    }
  });

  // Skip ahead in the video
  skipButton.addEventListener("click", function () {
    if (video.currentTime + 10 < video.duration) {
      video.currentTime += 10;
    } else {
      video.currentTime = 0; // Restart if skipping past the end
    }
    console.log(`Skipped ahead, current time: ${video.currentTime}`);
  });

  // Mute/unmute video
  muteButton.addEventListener("click", function () {
    video.muted = !video.muted; // Toggle mute state
    muteButton.textContent = video.muted ? "Unmute" : "Mute";
    console.log(`Video muted: ${video.muted}`);
  });

  // Adjust volume using slider
  volumeSlider.addEventListener("input", function () {
    const volumeValue = volumeSlider.value / 100; // Convert to range [0,1]
    video.volume = volumeValue;
    volumeDisplay.textContent = `${volumeSlider.value}%`; // Update display
    console.log(`Volume set to ${volumeValue}`);
  });

  // Apply "Old School" style
  vintageButton.addEventListener("click", function () {
    video.classList.add("vintage"); // Add CSS class for old-school style
    console.log("Vintage style applied.");
  });

  // Revert to original style
  originalButton.addEventListener("click", function () {
    video.classList.remove("vintage"); // Remove CSS class for old-school style
    console.log("Original style applied.");
  });
});
