let gameSeq = [];
let userSeq = [];
let highScore = 0;


let btns = ["cyan", "purple", "orange", "lime"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("game start");
        started = true;

        levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highScore) {
            highScore = level;
        }

        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Highest Score: <b>${highScore}</b> <br>Press any key to start.`;

        robberyFlash(); 
        reset();
    }
}


function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function robberyFlash() {
    let times = 0;
    let interval = setInterval(() => {
        // 🔴 Flash background
        document.body.style.backgroundColor = (times % 2 === 0) ? "red" : "white";

        // 🔴 Flash all buttons
        for (let color of btns) {
            let btn = document.querySelector(`.${color}`);
            btn.classList.add("flash");
            setTimeout(() => btn.classList.remove("flash"), 250);
        }

        times++;
        if (times === 6) {   // background will flash 6 times (3 red+3 white)
            clearInterval(interval);
            document.body.style.backgroundColor = "white"; // reset to normal
        }
    }, 400);  // gap between flashes
}



function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
