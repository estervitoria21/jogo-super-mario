const mario = document.querySelector (".mario");
const pipe = document.querySelector("pipe");

 const jump = () =>  {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump")
    }
    ,500);
}

       const loop = setInterval(() => {
        const pipePosition = pipe.offsetleft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px","");

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
         pipe.style.animation = "none";
         pipe.style.left = `${pipePosition}px`;

         mario.style.animation = "none";
         mario.style.left = `${pipePosition}px`;
         
          mario.src = "./img/game-over.png";
         mario.style.width = "75px";
         mario.style.width = "50px";

         clearInterval(loop);
         
       },10);

document.addEventlistener("keydpw", jump);
       



















    document.addEventListener("keydown",jump);
