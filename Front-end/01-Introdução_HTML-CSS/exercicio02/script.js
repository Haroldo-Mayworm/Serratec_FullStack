const btn = document.querySelector('.btn');

function bomDia() {
  let valorTop = Math.floor(Math.random() * 750) + 1;
  btn.style.top = valorTop + 'px';

  let valorLeft =  Math.floor(Math.random() * 1000) + 1;
  btn.style.left = valorLeft + 'px';
}

btn.addEventListener('mouseover', bomDia);