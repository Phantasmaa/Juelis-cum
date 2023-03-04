var text = document.getElementById("Titulo-desc")
var str = text.innerHTML.replace(/<br\s*\/?>/gi, "\n");


const abrazosBtn = document.querySelector('#abrazos-btn');
const loaderContainer = document.querySelector('.loader-container');
const loader = document.querySelector('.loader');
const mensaje = document.querySelector('#mensaje');




text.innerHTML=""

var speed =80
var i = 0

function typeWriter(){
    if(i<str.length){
        if (str.charAt(i) === '\n') {
            text.innerHTML += "<br>"; // Agregar un <br> para cada \n
        } else {
            text.innerHTML += str.charAt(i);
        }
        i++
        setTimeout(typeWriter,speed)
    }
}

setTimeout(typeWriter, speed)

abrazosBtn.addEventListener('click', () => {
    abrazosBtn.style.display = 'none';
    loaderContainer.style.display = 'flex';
    loader.style.animation = 'progress 3s linear forwards';
    setTimeout(() => {
      mensaje.style.display = 'block';
    }, 3000);
  });
  
  window.onload = () => {
    loaderContainer.style.display = 'none';
    mensaje.style.display = 'none';
  };