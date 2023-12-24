let audioContext;

function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const base64SongOutput = document.getElementById('base64Song');

  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const audioData = event.target.result;
    const base64String = arrayBufferToBase64(audioData);
    base64SongOutput.value = base64String;
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

function generateBase64() {
  handleFile();
}

function playBase64() {
  const base64Song = document.getElementById('base64Song').value.trim();
  if (!base64Song) return;

  const audioData = base64ToArrayBuffer(base64Song);
  playAudio(audioData);
}

function base64ToArrayBuffer(base64String) {
  const binaryString = atob(base64String);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function playAudio(audioBlob) {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  audioContext.decodeAudioData(audioBlob, function(buffer) {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
  });
}
