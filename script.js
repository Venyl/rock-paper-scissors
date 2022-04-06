let emojis = ["🌯", "🌭", "🍔"];
let [burrito, hotdog, burger] = emojis;

let playerScore = 0;
let enemyScore = 0;
let gameOver = false;

const duel = document.querySelector(".duel");
const player = document.querySelector(".you");
const enemy = document.querySelector(".enemy");
const modal = document.querySelector("dialog");
const newGameBtn = document.querySelector(".new-game-btn");

newGameBtn.addEventListener("click", () => {
    playerScore = 0;
    enemyScore = 0;
    gameOver = false;

    player.textContent = `You: 0`;
    enemy.textContent = `Enemy: 0`;
    duel.textContent = "\xa0";

    modal.close();
    document.body.classList.toggle("blur");
});

function update(playerEmoji) {
    if (gameOver) return;

    enemyEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    if (playerEmoji === burrito) {
        console.log(1);
        playerScore += enemyEmoji === burger;
        enemyScore += enemyEmoji === hotdog;
    } else if (playerEmoji === hotdog) {
        console.log(2);
        playerScore += enemyEmoji === burrito;
        enemyScore += enemyEmoji === burger;
    } else {
        console.log(3);
        playerScore += enemyEmoji === hotdog;
        enemyScore += enemyEmoji === burrito;
    }

    player.textContent = `You: ${playerScore}`;
    enemy.textContent = `Enemy: ${enemyScore}`;

    if (playerScore === 5 || enemyScore === 5) {
        gameOver = true;
        endGame();
        return;
    }

    duel.textContent = `${playerEmoji} vs ${enemyEmoji}`;
}

for (const elem of document.getElementsByClassName("game-btn")) {
    elem.addEventListener("click", (e) => {
        update(e.currentTarget.textContent);
    });
}

function endGame(playerScore) {
    modal.querySelector("h2").textContent = `You ${playerScore === 5 ? "win" : "lose"}!`;
    modal.showModal();
    document.body.classList.toggle("blur");
}
