const goalMade = document.querySelector("#goal");
const goalMiss = document.querySelector("#miss");
//const teamOneHit = document.querySelector("#teamone-hit");
//const teamOneMiss = document.querySelector("#teamone-miss");
//const teamTwoHit = document.querySelector("#teamtwo-hit");
//const teamTwoMiss = document.querySelector("#teamtwo-miss");
let shotChance = 0;
let countdownNumber = 3;
let timeStamp = new Date().getTime();
let teamOneHit = document.querySelector("#teamone-hit");
teamOneHit.src = "Target_Hit.gif?t=" + timeStamp;
let teamOneMiss = document.querySelector("#teamone-miss");
teamOneMiss.src = "Target_Miss.gif?t=" + timeStamp;
let teamTwoHit = document.querySelector("#teamtwo-hit");
teamTwoHit.src = "Target_Hit.gif?t=" + timeStamp;
let teamTwoMiss = document.querySelector("#teamtwo-miss");
teamTwoMiss.src = "Target_Miss.gif?t=" + timeStamp;

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

    //teamOneHit.style.visibility = "hidden";
    //teamOneMiss.style.visibility = "hidden";
    //teamTwoHit.style.visibility = "hidden";
    //teamTwoMiss.style.visibility = "hidden";
})

// JS for team ONE
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneGoals = document.querySelector("#teamone-numgoals");
const teamOneShots = document.querySelector("#teamone-numshots");
let teamOneNumShots = 0;
let teamOneNumGoals = 0;
teamOneShootButton.addEventListener("click", function () {

    teamOneHit.style.visibility = "hidden";
    teamOneMiss.style.visibility = "hidden";
    teamTwoHit.style.visibility = "hidden";
    teamTwoMiss.style.visibility = "hidden";
    
    if(countdownNumber >= 3) {

        countdownNumber = 0;

        teamOneShots.innerHTML = teamOneNumShots += 1;
        
        shotChance = Math.random();
        console.log(shotChance);
        
        if(shotChance>0.5) {
            teamOneGoals.innerHTML = teamOneNumGoals += 1;
            goalMade.play();
            teamOneHit.style.visibility = "visible";
        }
        else {
            teamOneGoals.innerHTML = teamOneNumGoals;
            goalMiss.play();
            countdownNumber = 1;
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

    teamOneHit.style.visibility = "hidden";
    teamOneMiss.style.visibility = "hidden";
    teamTwoHit.style.visibility = "hidden";
    teamTwoMiss.style.visibility = "hidden";
    
    if(countdownNumber >= 3) {

        countdownNumber = 0;

        teamTwoShots.innerHTML = teamTwoNumShots += 1;
        
        shotChance = Math.random();
        console.log(shotChance);
        
        if(shotChance>0.5) {
            teamTwoGoals.innerHTML = teamTwoNumGoals += 1;
            goalMade.play();
            teamTwoHit.style.visibility = "visible";
        }
        else {
            teamTwoGoals.innerHTML = teamTwoNumGoals;
            goalMiss.play();
            countdownNumber = 1;
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