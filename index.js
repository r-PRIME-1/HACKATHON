// Example: load sample videos
document.querySelectorAll('video').forEach((video, index) => {
  // For simulation, using a sample video file
  video.src = `assets/sample${index+1}.mp4`;
});
