let emojis = ["🌯", "🌭", "🍔"];
let [burrito, hotdog, burger] = emojis;

let playerScore = 0;
let enemyScore = 0;

let duel = document.querySelector(".duel");
let player = document.querySelector(".you");
let enemy = document.querySelector(".enemy");

let gameOver = false;

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
        duel.textContent = `You ${playerScore === 5 ? "win" : "lose"}!`;
        gameOver = true;
        show();
        return;
    }

    duel.textContent = `${playerEmoji} vs ${enemyEmoji}`;
}

for (const elem of document.getElementsByTagName("button")) {
    elem.addEventListener("click", (e) => {
        update(e.currentTarget.textContent);
    });
}

function show() {
    // document.querySelector("dialog").showModal();
}
