// Create Our variables

var trivia = [
	{
	question: "Who was the first <br>President of Zimbabwe?",
	options: ["President Banana", "President Camacho", "President Ka-blam-o", "President Burrito"],
	correctAnswer: 0,
	},
	{
	question: "What is the national animal of Scotland?",
	options: ["Beaver", "Mountain Goat", "Black Adder", "Unicorn"],
	correctAnswer: 3,
	},
	{
	question: "Before Nirvana was 'Nirvana', they went by several other band names.<br>Which band name is NOT one of those precursory names?",
	options: ["Dead Freds", "Skid Row", "Bliss", "Fecal Matter"],
	correctAnswer: 0,
	},
	{
	question: "This current Major League Baseball manager & former star player is credited with inventing the high-five, along with Dodgers teammate Glenn Burke, on October 2, 1977.",
	options: ["Bud Black", "Dusty Baker", "Joe Maddon", "Don Mattingly"],
	correctAnswer: 1,
	},
	{
	question: "A 'Death Spiral' is created when THIS creature accidentally misinterprets chemical trails left by its own species & starts walking in circles. If too many join in, it can kill all involved.",
	options: ["Lemmings", "Chinchillas", "Ants", "Termites"],
	correctAnswer: 2,
	},

]

var round = 0;

var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

var seconds = 5;
var roundTimer;

// PLAY THE GAME!

function displayStart() {
	$("#start-btn").html("START");
	$("#replay-btn").empty();
}

//... Countdown Timer...
function tickDown () {

	console.log("Start timer at:" + seconds);
	seconds--;
	
	if (seconds > 9) {
		$("#game-section-1").html("Timer: 00:" + seconds);
	} else if (seconds < 10) {
		$("#game-section-1").html("Timer: 00:0" + seconds);
	}
	
	if (seconds === 0) {
		clearInterval(roundTimer);
		$("#game-section-2").html("Time's Up!");
		$("#game-section-3").html("The correct answer is: " 
			+ trivia[round].options[trivia[round].correctAnswer] +
			"<br>(IMG PLACEHOLDER)");
		unansweredCount++;

		setTimeout(nextRound,5000);
	}
};	


function startTrivia () {
	//... Countdown Timer, Trivia Question #1 & 4 Answer Options
	seconds = 5;

	correctCount = 0;
	incorrectCount = 0;
	unansweredCount = 0;
	round = 0;
	$("#replay-btn").empty();
	$("#game-section-1").html("Timer: 00:11");
	$("#game-section-2").html(trivia[round].question);

	$("#choice-1").html(trivia[round].options[0]);
	$("#choice-2").html(trivia[round].options[1]);
	$("#choice-3").html(trivia[round].options[2]);
	$("#choice-4").html(trivia[round].options[3]);
    

	roundTimer = setInterval(tickDown,1000);

};

function nextRound () {
	console.log("Round # just before increase: " + round);
	round++;
	console.log("Round # just after increase: " + round);

	if (round < trivia.length) {
		seconds = 5;
		$("#game-section-1").html("Timer: 00:30");
		$("#game-section-2").html(trivia[round].question);

		// Create <div> containers for each of the 4 choices
		$("#choice-1").html(trivia[round].options[0]);
		$("#choice-2").html(trivia[round].options[1]);
		$("#choice-3").html(trivia[round].options[2]);
		$("#choice-4").html(trivia[round].options[3]);

		roundTimer = setInterval(tickDown,1000);

	} else if (round >= trivia.length) {

		$("#game-section-2").html("All Done! Here's how you did...");
		$("#game-section-3").html("<p>Correct Answers: " + correctCount + "</p>"
			+ "<p>Incorrect Answers: " + incorrectCount + "</p>"
			+ "<p>Unanswered: " + unansweredCount + "</p>");
		$("#replay-btn").html("Play Again!");
	}
};


	// If timer reaches 0, do the following for 5 seconds...

		// ... Freeze timer (at 0)

		// ... Replace Q/A section with...

			// ... message = "Time's Up"

			// ... message = "The Correct Answer Is: ___"

			// ... (optional) image/gif assoc with correct answer

	// If timer does not reach 0...

		// ...when user selects corret answer, do the following for 5 sec...

			// ... freeze timer

			// ... replace Q/A section with...

				// ... message = "Correct!"

				// ... (optional) image/gif assoc with correct answer

		// ...when user selects incorret answer, do the following for 5 sec...

			// ... freeze timer

			// ... replace Q/A section with...

				// ... message = "Incorrect!"

				// ... (optional) image/gif assoc with correct answer

	// Display next question & reset timer 
	// Repeat Lines 7 -> HERE 9 more times

	// After 10th question cycle...

		// Display Summary Page

		// and provide option to restart the game upon clicking "Replay"

//----------

// Start with 'Start' Button displayed
displayStart();

// Initialize game when user clicks 'Start' Button
$("#start-btn").click(startTrivia);

// Record Click on Answer Choice


// Replay game
$("#replay-btn").click(startTrivia);

