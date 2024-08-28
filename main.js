const mayara = document.querySelector(".mayara");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mayara.classList.add("jump");

    setTimeout(() => {
        mayara.classList.remove("jump");
    }
    ,500);
}

const loop = setInterval (() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
    }
});





















document.addEventListener("keydown", jump);