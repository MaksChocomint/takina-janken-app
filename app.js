let choices = ["Guu", "Choki", "Paa"] // камень, ножницы, бумага
let result = ""
const botChoiceEl = document.getElementById("bot-choice")
const playerChoiceEl = document.getElementById("player-choice")

bot = {
    choice: "None",
    wins: 0
}

player = {
    choice: "None",
    wins: 0
}

function playerChoiceNone() {
    player.choice = "None"
    result = ""
}

function botChoiceNone() {
    bot.choice = "None"
    result = ""
}

if (bot.choice === "None") {
    botChoiceEl.src = "images/loading-bot.png"
}

if (player.choice === "None") {
    playerChoiceEl.src = "images/loading-player.png"
}

function jankenBot() {
    let botChoice = choices[Math.floor(Math.random()*3)]
    if (botChoice === "Guu") {
        botChoiceEl.src = "images/janken_0001.png"
        bot.choice = "Guu"
    } else if (botChoice === "Choki") {
        botChoiceEl.src = "images/janken_0002.png"
        bot.choice = "Choki"
    } else {
        botChoiceEl.src = "images/janken_0003.png"
        bot.choice = "Paa"
    }

    setTimeout(gameResult, 500)
    setTimeout(playerChoiceNone, 600)
    setTimeout(botChoiceNone, 600)
}


function guuChoice() {
    playerChoiceEl.src = "images/janken_0001.png"
    player.choice = "Guu"
}

function chokiChoice() {
    playerChoiceEl.src = "images/janken_0002.png"
    player.choice = "Choki"
}

function paaChoice() {
    playerChoiceEl.src = "images/janken_0003.png"
    player.choice = "Paa"
}

function gameResult() {
    if (player.choice === "Guu" && bot.choice === "Guu") {
        result = "Draw"
    } else if (player.choice === "Guu" && bot.choice === "Choki") {
        result = "Win"
    } else if (player.choice === "Guu" && bot.choice === "Paa") {
        result = "Lose"
    } else if (player.choice === "Choki" && bot.choice === "Guu") {
        result = "Lose"
    } else if (player.choice === "Choki" && bot.choice === "Choki") {
        result = "Draw"
    } else if (player.choice === "Choki" && bot.choice === "Paa") {
        result = "Win"
    } else if (player.choice === "Paa" && bot.choice === "Guu") {
        result = "Win"
    } else if (player.choice === "Paa" && bot.choice === "Choki") {
        result = "Lose"
    } else if (player.choice === "Paa" && bot.choice === "Paa") {
        result = "Draw"
    }
    
    if (result === "Win") {
        playerChoiceEl.src = "images/win.png"
        botChoiceEl.src = "images/lose.png"
        player.wins++
    } else if (result === "Lose") {
        playerChoiceEl.src = "images/lose.png"
        botChoiceEl.src = "images/win.png"
        bot.wins++
    } else if (result === "Draw") {
        playerChoiceEl.src = "images/draw.png"
        botChoiceEl.src = "images/draw.png"
    }

    let playerWins = document.getElementById("player-wins")
    let botWins = document.getElementById("bot-wins")
    playerWins.textContent = "Wins: " + player.wins 
    botWins.textContent = "Wins: " + bot.wins
    
    if (player.wins === 10) {
        let takina = document.body
        takina.innerHTML = "<video width='1280' height='720' autoplay><source src='videos/WinSong.mp4' type='video/mp4'></video>"
        takina.style.padding = '98px'
    }
}