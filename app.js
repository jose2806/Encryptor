let inputText = document.querySelector('.request_text');
let encryptButton = document.querySelector('.encriptar');
let decryptButton = document.querySelector('.desencriptar');
let resultSection = document.querySelector('.result');
let copyButton = document.querySelector('.copy');

const encryptionKeys = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

const decryptionKeys = {
  enter: 'e',
  imes: 'i',
  ai: 'a',
  ober: 'o',
  ufat: 'u',
};

function encryptText(text) {
  return text
    .split('')
    .map((char) => encryptionKeys[char] || char)
    .join('');
}

function decryptText(text) {
  for (let key in decryptionKeys) {
    text = text.split(key).join(decryptionKeys[key]);
  }
  return text;
}

function copyText() {
  let resultText = document.querySelector('.result_text').textContent;
  let tempTextarea = document.createElement('textarea');
  tempTextarea.value = resultText;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);
}

function displayResult(text) {
  if (text.trim() === '') {
    resultSection.innerHTML = `<img src="assets/1.png" alt="Resultado" class="result_image" />`;
  } else {
    resultSection.innerHTML = `<p class="result_text">${text}</p><button class="copy" type="button">Copiar</button>`;
    document.querySelector('.copy').addEventListener('click', copyText);
  }
}

encryptButton.addEventListener('click', function (event) {
  event.preventDefault();
  let encryptedText = encryptText(inputText.value);
  displayResult(encryptedText);
  inputText.value="";
});

decryptButton.addEventListener('click', function (event) {
  event.preventDefault();
  let decryptedText = decryptText(inputText.value);
  displayResult(decryptedText);
  inputText.value="";
});

inputText.addEventListener("input", function () {
  inputText.value = inputText.value
    .replace(/[^a-z\s]/g, "")  // Permite solo letras minúsculas y espacios
    .replace(/\s+/g, " ");     // Reemplaza múltiples espacios por uno solo
    
});

