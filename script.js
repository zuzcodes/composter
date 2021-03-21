let points = 0;
let lives = 4;
let timeLeft = 20;

let bottle = document.querySelector("#bottle_container");
let coffecup = document.querySelector("#coffeecup_container");
let can = document.querySelector("#can_container");
let peaches = document.querySelector("#peaches_container");
let tulip = document.querySelector("#tulip_container");
let fishbone = document.querySelector("#fishbone_container");

let bottlesp = document.querySelector("#bottle_container .sprite");
let coffesp = document.querySelector("#coffeecup_container .sprite");
let cansp = document.querySelector("#can_container .sprite");
let peachessp = document.querySelector("#peaches_container .sprite");
let tulipsp = document.querySelector("#tulip_container .sprite");
let fishbonesp = document.querySelector("#fishbone_container .sprite");

let point = document.querySelector("#point");
let click = document.querySelector("#click");
let backgroundsound = document.querySelector("#backgroundsound");
let winning = document.querySelector("#winning");
let losing = document.querySelector("#losing");

let muted = false;

let gameHasEnded = false;

window.addEventListener("load", userStart);

function userStart() {
    document.querySelector("#play").addEventListener("click", startGame);
    document.querySelector("#play").classList.add("move");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#timesup").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
}

function startGame() {
    console.log("Start Game");
    document.querySelector("#play").removeEventListener("click", startGame);
    document.querySelector("#music").addEventListener("click", toggleMusic);
    document.querySelector("#sound").addEventListener("click", toggleSound);
    document.querySelector("#mutemusic").addEventListener("click", toggleMusic);
    document.querySelector("#mutesound").addEventListener("click", toggleSound);
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#timesup").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");
    startItems();
    startTimer();
    backgroundsound.play();
}

function toggleMusic() {
    console.log("Toggle Music");
    if (backgroundsound.muted == true) {
        backgroundsound.muted = false;
        document.querySelector("#mutemusic").style.opacity = 0;
        click.play();
    } else {
        backgroundsound.muted = true;
        document.querySelector("#mutemusic").style.opacity = 100;
    }
}

function toggleSound() {
    console.log("Toggle Sound");
    if (muted == false) {
        muted = true;
        document.querySelector("#mutesound").style.opacity = 100;
    } else {
        muted = false;
        document.querySelector("#mutesound").style.opacity = 0;
        click.play();
    }
}

function startTimer() {
    if (timeLeft == 0) {
        timesUp();
    } else {
        setTimeout(printTime, 1000);
    }
}

function printTime() {
    if (timeLeft > 0) {
        timeLeft--;
        console.log("Time: " + timeLeft);
        startTimer();
        document.querySelector("#time_count").textContent = timeLeft;
    } else {
        timesUp();
    }
}

function startItems() {
    console.log("Start Items");

    bottle.classList.add("falling", "speed1", "position1");
    coffecup.classList.add("falling", "speed2", "position2");
    can.classList.add("falling", "speed3", "position3");
    peaches.classList.add("falling", "speed1", "position4");
    tulip.classList.add("falling", "speed2", "position5");
    fishbone.classList.add("falling", "speed3", "position6");


    bottle.addEventListener("click", bottleClicked);
    coffecup.addEventListener("click", coffeecupClicked);
    can.addEventListener("click", canClicked);
    peaches.addEventListener("click", peachesClicked);
    tulip.addEventListener("click", tulipClicked);
    fishbone.addEventListener("click", fishboneClicked);

    bottle.addEventListener("animationiteration", reachBottom);
    coffecup.addEventListener("animationiteration", reachBottom);
    can.addEventListener("animationiteration", reachBottom);

    peaches.addEventListener("animationiteration", reachBottom);
    tulip.addEventListener("animationiteration", reachBottom);
    fishbone.addEventListener("animationiteration", reachBottom);
}

function reachBottom() {
    console.log("Reach Bottom");

    let item = this;

    item.classList.remove("position1");
    item.classList.remove("position2");
    item.classList.remove("position3");
    item.classList.remove("position4");
    item.classList.remove("position5");
    item.classList.remove("position6");

    let number = Math.floor(Math.random() * 6 + 1);
    item.classList.add("position" + number);
}

function bottleClicked() {
    console.log("Bottle Clicked");

    bottle.removeEventListener("click", bottleClicked);
    bottle.classList.add("pause");
    bottlesp.classList.add("zoom");
    bottlesp.addEventListener("animationend", bottleRestart);
    lives--;
    if (!muted) {
        point.play();
    }
    document.querySelector("#life_" + lives).classList.add("lose_life");
    console.log("You have " + lives + " lives.");

    if (lives > 1) {
        console.log("You lost a life!");
    } else {
        gameOver();
    }
}

function bottleRestart() {
    console.log("Bottle Restart");

    bottlesp.removeEventListener("animationend", bottleRestart);
    bottle.classList.remove("pause");
    bottlesp.classList.remove("zoom");
    bottle.addEventListener("click", bottleClicked);
}

function coffeecupClicked() {
    console.log("coffeecupClicked");
    coffecup.removeEventListener("click", coffeecupClicked);
    coffecup.classList.add("pause");
    coffesp.classList.add("zoom");
    coffesp.addEventListener("animationend", coffeecupRestart);
    lives--;
    if (!muted) {
        point.play();
    }
    document.querySelector("#life_" + lives).classList.add("lose_life");
    console.log("You have " + lives + " lives.");

    if (lives > 1) {
        console.log("You lost a life!");
    } else {
        gameOver();
    }
}

function coffeecupRestart() {
    console.log("Coffee-Cup Restart");

    coffesp.removeEventListener("animationend", coffeecupRestart);
    coffecup.classList.remove("pause");
    coffesp.classList.remove("zoom");
    coffecup.addEventListener("click", coffeecupClicked);
}

function canClicked() {
    console.log("Can Clicked");

    can.removeEventListener("click", canClicked);
    can.classList.add("pause");
    cansp.classList.add("zoom");
    cansp.addEventListener("animationend", canRestart);
    lives--;
    if (!muted) {
        point.play();
    }
    document.querySelector("#life_" + lives).classList.add("lose_life");
    console.log("You have " + lives + " lives.");

    if (lives > 1) {
        console.log("You lost a life!");
    } else {
        gameOver();
    }
}

function canRestart() {
    console.log("Can Restart");

    cansp.removeEventListener("animationend", canRestart);
    can.classList.remove("pause");
    cansp.classList.remove("zoom");
    can.addEventListener("click", canClicked);
}

function peachesClicked() {
    console.log("Peaches Clicked");

    peaches.removeEventListener("click", peachesClicked);
    peaches.classList.add("pause");
    peachessp.classList.add("zoom");
    peachessp.addEventListener("animationend", peachesRestart);
    points++;
    if (!muted) {
        point.play();
    }
    console.log("You have " + points + " points.");
    document.querySelector("#score_count").textContent = points;
}

function peachesRestart() {
    console.log("Peaches Restart");

    peachessp.removeEventListener("animationend", peachesRestart);
    peaches.classList.remove("pause");
    peachessp.classList.remove("zoom");
    peaches.addEventListener("click", peachesClicked);

    if (points <= 9) {
        console.log("You got a point!");
    } else {
        levelComplete();
    }
}

function tulipClicked() {
    console.log("Tulip Clicked");

    tulip.removeEventListener("click", tulipClicked);
    tulip.classList.add("pause");
    tulipsp.classList.add("zoom");
    tulipsp.addEventListener("animationend", tulipRestart);
    points++;
    if (!muted) {
        point.play();
    }
    console.log("You have " + points + " points.");
    document.querySelector("#score_count").textContent = points;
}

function tulipRestart() {
    console.log("Tulip Restart");

    tulipsp.removeEventListener("animationend", tulipRestart);
    tulip.classList.remove("pause");
    tulipsp.classList.remove("zoom");
    tulip.addEventListener("click", tulipClicked);

    if (points <= 9) {
        console.log("You got a point!");
    } else {
        levelComplete();
    }
}

function fishboneClicked() {
    console.log("Fishbone Clicked");

    fishbone.removeEventListener("click", fishboneClicked);
    fishbone.classList.add("pause");
    fishbonesp.classList.add("zoom");
    fishbonesp.addEventListener("animationend", fishboneRestart);
    points++;
    if (!muted) {
        point.play();
    }
    console.log("You have " + points + " points.");
    document.querySelector("#score_count").textContent = points;
}

function fishboneRestart() {
    console.log("Fishbone Restart");

    fishbonesp.removeEventListener("animationend", fishboneRestart);
    fishbone.classList.remove("pause");
    fishbonesp.classList.remove("zoom");
    fishbone.addEventListener("click", fishboneClicked);

    if (points <= 9) {
        console.log("You got a point!");
    } else {
        levelComplete();
    }
}

function timesUp() {
    console.log("Time's Up!");

    if (gameHasEnded == true) {

    } else {
        gameHasEnded = true;
        document.querySelector("#start").classList.add("hide");
        document.querySelector("#game").classList.add("hide");
        document.querySelector("#levelcomplete").classList.add("hide");
        document.querySelector("#gameover").classList.add("hide");
        document.querySelector("#timesup").classList.remove("hide");
        document.querySelector("#startagain").addEventListener("click", restartGame);
        document.querySelector("#windmill_1").classList.add("rotation", "speed4");
        document.querySelector("#windmill_2").classList.add("rotation", "delay1");
        document.querySelector("#windmill_3").classList.add("rotation", "speed5");
        document.querySelector("#windmill_4").classList.add("rotation", "delay2");
        document.querySelector("#startagain").classList.add("move");
        if (!muted) {
            backgroundsound.pause();
            losing.play();
        }
    }
}

function gameOver() {
    console.log("Game Over!");

    if (gameHasEnded == true) {

    } else {
        gameHasEnded = true;
        document.querySelector("#start").classList.add("hide");
        document.querySelector("#game").classList.add("hide");
        document.querySelector("#levelcomplete").classList.add("hide");
        document.querySelector("#timesup").classList.add("hide");
        document.querySelector("#gameover").classList.remove("hide");
        document.querySelector("#tryagain").addEventListener("click", restartGame);
        document.querySelector("#tryagain").classList.add("move");
        if (!muted) {
            backgroundsound.pause();
            losing.play();
        }
    }
}

function levelComplete() {
    console.log("Level Complete!");

    if (gameHasEnded == true) {

    } else {
        gameHasEnded = true;
        document.querySelector("#start").classList.add("hide");
        document.querySelector("#game").classList.add("hide");
        document.querySelector("#gameover").classList.add("hide");
        document.querySelector("#timesup").classList.add("hide");
        document.querySelector("#levelcomplete").classList.remove("hide");
        document.querySelector("#playagain").addEventListener("click", restartGame);
        document.querySelector("#playagain").classList.add("move");
        document.querySelector("#sun").classList.add("move");
        document.querySelector("#windmill_5").classList.add("rotation", "speed4");
        document.querySelector("#windmill_6").classList.add("rotation", "delay1");
        document.querySelector("#windmill_7").classList.add("rotation", "speed5");
        document.querySelector("#windmill_8").classList.add("rotation", "delay2");
        if (!muted) {
            backgroundsound.pause();
            winning.play();

        }
    }
}

function restartGame() {
    console.log("Restart");

    document.querySelector("#playagain").removeEventListener("click", restartGame);
    document.querySelector("#tryagain").removeEventListener("click", restartGame);
    document.querySelector("#tryagain").removeEventListener("click", restartGame);

    gameHasEnded = false;

    lives = 4;
    points = 0;
    timeLeft = 20;

    document.querySelector("#start").classList.add("hide");
    document.querySelector("#timesup").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");

    document.querySelector("#life_1").classList.remove("lose_life");
    document.querySelector("#life_2").classList.remove("lose_life");
    document.querySelector("#life_3").classList.remove("lose_life");

    document.querySelector("#score_count").textContent = points;
    document.querySelector("#time_count").textContent = timeLeft;

    startTimer();

    bottleRestart();
    coffeecupRestart();
    canRestart();
    peachesRestart();
    tulipRestart();
    fishboneRestart();

    losing.pause();
    winning.pause();
    backgroundsound.play();
}
