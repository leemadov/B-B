function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const base64ImageOutput = document.getElementById('base64Image');
  
    const file = fileInput.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageData = event.target.result;
      const base64String = arrayBufferToBase64(imageData);
      base64ImageOutput.value = base64String;
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
  
  function displayImage() {
    const base64Image = document.getElementById('base64Image').value.trim();
    if (!base64Image) return;
  
    const img = document.getElementById('displayImage');
    img.src = 'data:image/jpeg;base64,' + base64Image; // Adjust format based on the uploaded image type
  }
  