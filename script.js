const box = document.querySelector(".conteiner");
const imagens = document.querySelectorAll(".conteiner contimg");

let contador = 0;

function slider() {
    contador++;

    if (contador > imagens.length -1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 600}px)`;

}

setInterval( slider  , 2000);