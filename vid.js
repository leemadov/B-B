function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const base64VideoOutput = document.getElementById('base64Video');
  
    const file = fileInput.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (event) {
      const videoData = event.target.result;
      const base64String = arrayBufferToBase64(videoData);
      base64VideoOutput.value = base64String;
    };
    reader.readAsArrayBuffer(file);
  }
  
  function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binaryString = '';
    bytes.forEach(byte => {
      binaryString += String.fromCharCode(byte);
    });
    return btoa(binaryString);
  }
  
  function playBase64() {
    const base64Video = document.getElementById('base64Video').value.trim();
    if (!base64Video) return;
  
    const videoBlob = base64ToArrayBuffer(base64Video);
    playVideo(videoBlob);
  }
  
  function base64ToArrayBuffer(base64String) {
    const binaryString = atob(base64String);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
  
  function playVideo(videoBlob) {
    const video = document.createElement('video');
    const blob = new Blob([videoBlob], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
  
    video.controls = true;
    video.src = url;
  
    const container = document.querySelector('.container');
    container.appendChild(video);
  }
  
  function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const base64VideoOutput = document.getElementById('base64Video');
  
    const file = fileInput.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (event) {
      const videoData = event.target.result;
      const base64String = arrayBufferToBase64(videoData);
      base64VideoOutput.value = base64String;
    };
    reader.readAsArrayBuffer(file);
  }
  
  function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binaryString = '';
    bytes.forEach(byte => {
      binaryString += String.fromCharCode(byte);
    });
    return btoa(binaryString);
  }
  
  function displayVideo() {
    const base64Video = document.getElementById('base64Video').value.trim();
    if (!base64Video) return;
  
    const videoBlob = base64ToArrayBuffer(base64Video);
    const video = document.getElementById('displayVideo');
  
    const blob = new Blob([videoBlob], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
  
    video.src = url;
  
    const container = document.querySelector('.video-container');
    const aspectRatio = video.videoWidth / video.videoHeight;
  
    let width = container.offsetWidth;
    let height = width / aspectRatio;
  
    if (height > container.offsetHeight) {
      height = container.offsetHeight;
      width = height * aspectRatio;
    }
  
    video.style.width = width + 'px';
    video.style.height = height + 'px';
  }
  