function textToBinary() {
    const textInput = document.getElementById('textInput').value.trim();
    const binaryOutputElement = document.getElementById('binaryOutput');
  
    if (!textInput) {
      binaryOutputElement.textContent = 'Please enter a word.';
      return;
    }
  
    const binaryResult = stringToBinary(textInput);
  
    binaryOutputElement.textContent = `Binary Code: ${binaryResult}`;
  }
  
  function copyBinaryToClipboard() {
    const binaryOutput = document.getElementById('binaryOutput').textContent.trim().split(': ')[1];
    const textArea = document.createElement('textarea');
    textArea.value = binaryOutput;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
  
  function stringToBinary(text) {
    return text.split('').map(char => {
      const binary = char.charCodeAt(0).toString(2);
      return '0'.repeat(8 - binary.length) + binary;
    }).join(' ');
  }
  
  function binaryToText() {
    const binaryInput = document.getElementById('binaryInput').value.trim();
    const textOutputElement = document.getElementById('textOutput');
    
    if (!isValidBinary(binaryInput)) {
      textOutputElement.textContent = 'Invalid binary code. Please enter a valid binary sequence (0s and 1s).';
      return;
    }
  
    const textResult = binaryToString(binaryInput);
  
    textOutputElement.textContent = `Corresponding Text: ${textResult}`;
  }
  
  function isValidBinary(input) {
    return /^[01\s]+$/.test(input);
  }
  
  function binaryToString(binary) {
    const binaryArray = binary.split(' ');
    return binaryArray.map(binaryChar => String.fromCharCode(parseInt(binaryChar, 2))).join('');
  }

  function fileToBinary() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please select a file.');
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const fileContent = event.target.result;
      const binaryResult = stringToBinary(fileContent);
  
      document.getElementById('fileBinaryOutput').textContent = `Binary Code: ${binaryResult}`;
    };
  
    reader.readAsText(file);
  }