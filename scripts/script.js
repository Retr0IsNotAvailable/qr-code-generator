const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-button');
const imgElement = document.querySelector('.js-img');

async function generateQR(inputValue = 'Example') {
  imgElement.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputValue;
  imgElement.style.display = 'block';
  inputElement.value = '';
}

inputElement.addEventListener('keydown', e => {
  if (e.key === 'Enter' && inputElement.value) {
    generateQR(inputElement.value);
  } else {
    inputElement.classList.add('error');
    
    setTimeout(() => inputElement.classList.remove('error'), 1000);
  }
});

buttonElement.addEventListener('click', () => {
  if (inputElement.value) {
    generateQR(inputElement.value);
  } else {
    inputElement.classList.add('error');

    setTimeout(() => inputElement.classList.remove('error'), 1000);
  }
});