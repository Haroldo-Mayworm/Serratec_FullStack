colorToChange = document.querySelector('#trakinas');
textFinal = document.querySelector('#final');

function changeColor() {
  colorToChange.style.color = 'blue';
  textFinal.innerHTML = 'É BISCOITO!';
}

colorToChange.addEventListener('click', changeColor);
