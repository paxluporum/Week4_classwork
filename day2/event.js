function onKeyPresseed(event) {
    console.log(event.key);
}


document.addEventListener("keydown", onKeyPresseed);

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

const player = document.getElementById("rude");
pencil.drawImage(player, 100, 0, canvas.width, canvas.height);

