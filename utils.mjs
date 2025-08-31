const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");
const character = document.getElementById("character");


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


let score = 0;
const apple = document.createElement("div");
apple.id = "apple";
apple.innerHTML = "🍎";
gameArea.appendChild(apple);

// Fungsi acak posisi apel
function randomApplePosition() {
const gameAreaRect = gameArea.getBoundingClientRect();
  const x = Math.random() * (gameAreaRect.width - 40);
  const y = Math.random() * (gameAreaRect.height - 40);
apple.style.left = `${x}px`;
apple.style.top = `${y}px`;
}
randomApplePosition(); // pertama kali

// Fungsi cek tabrakan
function checkCollision(a, b) {
const aRect = a.getBoundingClientRect();
const bRect = b.getBoundingClientRect();
return !(
    aRect.top > bRect.bottom ||
    aRect.bottom < bRect.top ||
    aRect.left > bRect.right ||
    aRect.right < bRect.left
);
}

// Update posisi apel tiap 3 detik
setInterval(randomApplePosition, 3000);

// Periksa apakah karakter menyentuh apel
setInterval(() => {
if (checkCollision(character, apple)) {
    score++;
    alert("Yeay! Apel berhasil diambil. Skor: " + score);
    randomApplePosition();
}
}, 100);
