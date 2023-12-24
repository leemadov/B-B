function handleFile() {
  const fileInput = document.getElementById('fileInput');
  const base64Output = document.getElementById('base64Data');

  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const fileData = event.target.result;
    const base64String = arrayBufferToBase64(fileData);
    base64Output.value = base64String;
  };
  reader.readAsDataURL(file);
}

function arrayBufferToBase64(buffer) {
  return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
}

function displayMedia() {
  const base64Data = document.getElementById('base64Data').value;
  if (!base64Data) return;

  const mediaWindow = window.open('', '_blank');
  mediaWindow.document.write(`<img src="${base64Data}" alt="Base64 Image/Video">`);
}
