const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const charactersTyped = document.querySelector("#ammount-of-chars");
//const centisecondsSoFar =  document.querySelector("#centisecs");
const charactersPerSecond = document.querySelector("#speed-per-second");
const wpmValue = document.querySelector("#wpm-value");
const wpmButton = document.querySelector("#wpmcalc");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;
var centiseconds = 0;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
	if (time <= 9) {
		time = "0" + time;
	}
	return time;
}


// Run a standard minute/second/hundredths timer:
function runTimer(){
	let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]); //+ ":" + timer[3];
	theTimer.innerHTML = currentTime;
	//centisecondsSoFar.innerHTML = centiseconds;
	timer[3]++;
	centiseconds++;

	timer[0] = Math.floor((timer[3]/100)/60);
	timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
	timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}


// Match the text entered with the provided text on the page:
function spellCheck(){
	let textEntered = testArea.value;
	let originTextMatch = originText.substring(0, textEntered.length);

	if (textEntered == originText) {
	
		clearInterval(interval);
		testWrapper.style.borderColor = "green";
		charactersPerSecond.innerHTML = Math.floor(testArea.value.length/(centiseconds/100));
	
	} else {
	
		if (textEntered == originTextMatch) {
			
			testWrapper.style.borderColor = "blue";
		
		} else {

			testWrapper.style.borderColor = "orange";
		
		}
	}

	//console.log("The text has length: " + textEntered);
}


// Start the timer:
function start(){
	let textEnteredLength = testArea.value.length;

	if(textEnteredLength === 0 && !timerRunning){
		timerRunning = true;
		interval = setInterval(runTimer, 10);
	}

	//console.log("Length of the string by the time of the keystroke event: " + textEnteredLength);
}


// Reset everything:
function reset(){
	//console.log("reset button has been pressed!");
	clearInterval(interval);
	interval = null;
	timer = [0,0,0,0];
	timerRunning = false;

	testArea.value = "";
	theTimer.innerHTML = "00:00:00";
	testWrapper.style.borderColor = "grey";
}

//to count the characters that have been typed
function countChar(){
	charactersTyped.innerHTML = testArea.value.length;
}

//function to count the words typed
function WordCount(str) { 
  return str.split(" ").length;
}

//function that rounds the value of WPM to 2  decimal places 
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

//shows the characters that words that have been counted
function showWpm(){
	let wpMinute = (WordCount(testArea.value))/(centiseconds/6000);
	wpmValue.innerHTML = roundToTwo(wpMinute);
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
testArea.addEventListener("keyup", countChar, false);
resetButton.addEventListener("click", reset, false);
wpmButton.addEventListener("click", showWpm, false);