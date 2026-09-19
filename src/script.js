const botaotype = document.querySelector("#typeObutton");
const musicatype = document.querySelector("#typeO");


//isso abaixa um pouco o som o audio, para deixar mais confortavel o som
musicatype.volume = 0.3;


//isso faz com que toque a musica ao clicar e para ela ao clicar novamente
botaotype.addEventListener("click", () => {
  
    if (musicatype.paused) {
    musicatype.play();
    botaotype.textContent = "⏸︎ Pausar a música";
 
} else {
    musicatype.pause();
    botaotype.textContent = "▶︎ Toque a música";
  }

});

const botaoKorn = document.querySelector("#Kornbutton");
const musicaKorn = document.querySelector("#Korn");

musicaKorn.volume = 0.3;

botaoKorn.addEventListener("click", () => {
  
    if (musicaKorn.paused) {
    musicaKorn.play();
    botaoKorn.textContent = "⏸︎ Pausar música";
  
} else {
    musicaKorn.pause();
    botaoKorn.textContent = "▶︎ Toque a música";
  }


});

const botaosoad = document.querySelector("#Soadbutton")
const musicasoad = document.querySelector("#soad")

musicasoad.volume = 0.3;

botaosoad.addEventListener("click", () => {
  
    if (musicasoad.paused) {
    musicasoad.play();
    botaosoad.textContent = "⏸︎ Pausar a música";
  
} else {
    musicasoad.pause();
    botaosoad.textContent = "▶︎ Toque a música";
  }

});