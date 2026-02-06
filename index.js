const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Access the webcam
const video = document.getElementById('camera');

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Error accessing webcam:', err);
    const status = document.querySelector('.camera-status');
    status.textContent = '● Offline';
    status.style.color = 'red';
  });

// Capture snapshot function
function captureSnapshot() {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const imgData = canvas.toDataURL('image/png');
  window.open(imgData); // open snapshot in a new tab
}
