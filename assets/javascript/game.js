const fanfare = document.querySelector("#fanfare");
const goalMade = document.querySelector("#goal");
const goalMiss = document.querySelector("#miss");
const teamOneHit = document.querySelector("#teamone-hit");
const teamOneMiss = document.querySelector("#teamone-miss");
const teamTwoHit = document.querySelector("#teamtwo-hit");
const teamTwoMiss = document.querySelector("#teamtwo-miss");
const startButton = document.querySelector(".start-button");
const GUI = document.querySelector("#game-interface");
let shotChance = 0;
let countdownNumber = 3;

// Start Button
startButton.addEventListener("click", function() {
    fanfare.play();
    GUI.style.visibility = "visible";
    startButton.style.visibility = "hidden";

})

// JS for the reset button and counter
let resetCount = 0;
const numResets = document.querySelector("#num-resets");
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function() {
    
    if (teamOneNumGoals>teamTwoNumGoals) {
        alert("Team One Wins!");
    }
    else if (teamTwoNumGoals>teamOneNumGoals) {
        alert("Team Two Wins!");
    }
    else {
        alert("There is no winner :(");
    }

    teamOneNumShots = 0;
    teamOneNumGoals = 0;
    teamTwoNumShots = 0;
    teamTwoNumGoals = 0;

    numResets.innerHTML = resetCount += 1;

    teamOneShots.innerHTML = teamOneNumShots;
    teamOneGoals.innerHTML = teamOneNumGoals;
    teamTwoShots.innerHTML = teamTwoNumShots;
    teamTwoGoals.innerHTML = teamTwoNumGoals;

    teamOneHit.style.visibility = "hidden";
    teamOneMiss.style.visibility = "hidden";
    teamTwoHit.style.visibility = "hidden";
    teamTwoMiss.style.visibility = "hidden";

    fanfare.play();
})

// JS for team ONE
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneGoals = document.querySelector("#teamone-numgoals");
const teamOneShots = document.querySelector("#teamone-numshots");
let teamOneNumShots = 0;
let teamOneNumGoals = 0;
teamOneShootButton.addEventListener("click", function () {

    teamOneHit.src = "";
    teamOneHit.src = "Target_Hit.gif";
    teamOneMiss.src = "";
    teamOneMiss.src = "Target_Miss.gif";

    teamOneHit.style.visibility = "hidden";
    teamOneMiss.style.visibility = "hidden";
    teamTwoHit.style.visibility = "hidden";
    teamTwoMiss.style.visibility = "hidden";

    
    if(countdownNumber >= 3) {

        countdownNumber = 0;

        teamOneShots.innerHTML = teamOneNumShots += 1;

        shotChance = Math.random();
        console.log(shotChance);
        
        if(shotChance>0.42) {
            teamOneGoals.innerHTML = teamOneNumGoals += 1;
            goalMade.play();
            teamOneHit.style.order = "0";
            teamOneMiss.style.order = "1";
            teamOneHit.style.visibility = "visible";
        }
        else {
            teamOneGoals.innerHTML = teamOneNumGoals;
            goalMiss.play();
            countdownNumber = 1;
            teamOneHit.style.order = "1";
            teamOneMiss.style.order = "0";
            teamOneMiss.style.visibility = "visible";
        }
        teamOneShootButton.className = 'inactive';
        teamTwoShootButton.className = 'inactive';
    }
})

// JS for team TWO
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamTwoGoals = document.querySelector("#teamtwo-numgoals");
const teamTwoShots = document.querySelector("#teamtwo-numshots");
let teamTwoNumShots = 0;
let teamTwoNumGoals = 0;
teamTwoShootButton.addEventListener("click", function () {

    teamTwoHit.src = "";
    teamTwoHit.src = "Target_Hit.gif";
    teamTwoMiss.src = "";
    teamTwoMiss.src = "Target_Miss.gif";

    teamOneHit.style.visibility = "hidden";
    teamOneMiss.style.visibility = "hidden";
    teamTwoHit.style.visibility = "hidden";
    teamTwoMiss.style.visibility = "hidden";
    
    if(countdownNumber >= 3) {

        countdownNumber = 0;

        teamTwoShots.innerHTML = teamTwoNumShots += 1;
        
        shotChance = Math.random();
        console.log(shotChance);
        
        if(shotChance>0.42) {
            teamTwoGoals.innerHTML = teamTwoNumGoals += 1;
            goalMade.play();
            teamTwoHit.style.order = "1";
            teamTwoMiss.style.order = "0";
            teamTwoHit.style.visibility = "visible";
        }
        else {
            teamTwoGoals.innerHTML = teamTwoNumGoals;
            goalMiss.play();
            countdownNumber = 1;
            teamTwoHit.style.order = "0";
            teamTwoMiss.style.order = "1";
            teamTwoMiss.style.visibility = "visible";
        }
        teamOneShootButton.className = 'inactive';
        teamTwoShootButton.className = 'inactive';
    }
})

// JS for countdown timer - can only shoot every 3 seconds
countdownNumber = setInterval(increment, 1000)
function increment() {
    countdownNumber += 1;   
    if(countdownNumber >= 3) {
        teamOneShootButton.className = 'active';
        teamTwoShootButton.className = 'active';
    }
}