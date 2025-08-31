const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");

let posX = gameArea.clientWidth / 2;
let posY = gameArea.clientHeight / 2;
const step = 20; // langkah per gerakan

function updatePosition() {
player.style.left = posX + "px";
player.style.top = posY + "px";
}

// kontrol keyboard
document.addEventListener("keydown", (e) => {
if (e.key === "ArrowUp") {
    posY = Math.max(0, posY - step);
} else if (e.key === "ArrowDown") {
    posY = Math.min(gameArea.clientHeight - 40, posY + step);
} else if (e.key === "ArrowLeft") {
    posX = Math.max(0, posX - step);
} else if (e.key === "ArrowRight") {
    posX = Math.min(gameArea.clientWidth - 40, posX + step);
}
updatePosition();
});

// posisi awal
updatePosition();
