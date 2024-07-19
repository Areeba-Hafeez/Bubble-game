var bubbles = "";
var score = 0;
var hitrn = 0;

// Function to generate bubbles
const bubbleFunc = () => {
    for (let i = 0; i <= 179; i++) {
        var randNum = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubbles">${randNum}</div>`;
    }
    document.querySelector('.lower-content').innerHTML = bubbles;
};

// Timer functionality
var timer = 60;
var runTimerFunc = () => {
    var timeFunc = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerValue').textContent = timer;
        } else {
            clearInterval(timeFunc);
            document.querySelector(".lower-content").innerHTML  = `<h1 style ="font-size :6rem">Game is Over</h1>`        }
    }, 1000);
};

// Score functionality
const increasescoreFunc = () => {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
};

// Function to generate a random hit value
const getHitValue = () => {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitValue').textContent = hitrn;
};

document.querySelector('.lower-content').addEventListener("click", function(detail) {
    let clickNumber = Number(detail.target.textContent);
    if (clickNumber === hitrn) {
        increasescoreFunc();
        bubbleFunc();
       getHitValue();

    }
});

// Run the functions
runTimerFunc();
bubbleFunc();
getHitValue();
