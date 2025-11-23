const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-button');
const canvasElement = document.querySelector('.js-canvas');

async function generateQR(inputValue = 'Example') {
  const res = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hello');
  canvasElement.innerHTML = res;
  canvasElement.style.display = 'block';
}

generateQR();