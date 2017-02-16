// Create Our variables

var trivia = [
	{
	question: "Who was the first President of Zimbabwe?",
	options: ["President Banana", "President Camacho", "President Ka-blam-o", "President Burrito"],
	correctAnswer: 0,
	media: "assets/images/banana.jpg",
	},
	{
	question: "What is the national animal of Scotland?",
	options: ["Beaver", "Mountain Goat", "Black Adder", "Unicorn"],
	correctAnswer: 3,
	media: "assets/images/unicorn.gif",
	},
	{
	question: "Before Nirvana was 'Nirvana', they went by several other band names. Which band name is NOT one of those precursory names?",
	options: ["Dead Freds", "Skid Row", "Bliss", "Fecal Matter"],
	correctAnswer: 0,
	media: "assets/images/nirvana.jpg",
	},
	{
	question: "Who is the only U.S. President to ever be granted a patent?",
	options: ["Thomas Jefferson", "Abraham Lincoln", "Franklin D. Roosevelt", "Benjamin Harrison"],
	correctAnswer: 1,
	media: "assets/images/abe.gif",
	},
	{
	question: "Which country boasts the oldest, continually used national flag (which is still in use today)?",
	options: ["Russia", "Turkey", "Cambodia", "Denmark"],
	correctAnswer: 3,
	media: "assets/images/denmark.gif",
	funFact: "The current design of a white Scandinavian cross on a red back ground was adopted in 1625 and its square shape in 1748."
	},
	{
	question: "What was the first product to ever have a barcode?",
	options: ["Heinz Ketchup", "Kellog's Corn Flakes", "Wrigley Chewing Gum", "Ritz Crackers"],
	correctAnswer: 2,
	media: "assets/images/wrigley.jpg",
	},
	{
	question: "What popular American food brand accidentally translated their popular slogan into 'eat your fingers off' when first starting business in China?",
	options: ["Campbell's Soup", "Lay's Potato Chips", "Kentucky Fried Chicken", "Applebee's"],
	correctAnswer: 2,
	media: "assets/images/kfc.gif",
	},
	{
	question: "From 1859 - 1994, what sport was the official 'National Game of Canada', before hockey was added as a co-sport in 1994?",
	options: ["Rugby", "Ice Fishing", "Beaver Trapping", "Lacrosse"],
	correctAnswer: 3,
	media: "assets/images/lax.gif",
	},	
	{
	question: "Which current Major League Baseball manager and former star player is credited with inventing the high-five, along with Dodgers teammate Glenn Burke?",
	options: ["Bud Black", "Dusty Baker", "Joe Maddon", "Don Mattingly"],
	correctAnswer: 1,
	media: "assets/images/h5.gif",
	},
	{
	question: "A'Death Spiral' is created when THIS creature accidentally misinterprets chemical trails left by its own species and starts walking in circles. If too many join in, it can kill all involved.",
	options: ["Lemmings", "Chinchillas", "Ants", "Termites"],
	correctAnswer: 2,
	media: "assets/images/ants.gif",
	},

]

var round = 0;

var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

var seconds = 30;
var roundTimer;
var userChoice;

// PLAY THE GAME!

function displayStart() {
	$("#start-btn").html("<img src='assets/images/door.jpg'>");
}

//... Countdown Timer...
function tickDown () {

	// console.log("Start timer at:" + seconds);
	seconds--;
	
	if (seconds > 9) {
		$("#game-section-1").html("Timer: 00:" + seconds);
	} else if (seconds < 10) {
		$("#game-section-1").html("Timer: 00:0" + seconds);
	}
	
	if (seconds === 0) {
		clearInterval(roundTimer);
		$("#game-section-2").html("TIME'S UP!");
		$("#game-section-3").html("The correct answer is: " 
			+ trivia[round].options[trivia[round].correctAnswer] +
			"<br><br><img src=" + trivia[round].media + " height='375px'>");
		unansweredCount++;

		setTimeout(nextRound,5000);
	}
};	


function startTrivia () {
	//... Countdown Timer, Trivia Question #1 & 4 Answer Options
	seconds = 30;

	correctCount = 0;
	incorrectCount = 0;
	unansweredCount = 0;
	round = 0;
	$("#start-btn").hide();
	$("#game-section-1").html("Timer: 00:30");
	$("#game-section-2").html(trivia[round].question);
	$("#game-section-3").empty();
	for (var i = 0; i < 4; i++) {	
        var choiceDiv = $("<div>");  
      // Add class='choices' for styling
        choiceDiv.addClass("choices");
      // Give each <div> a data-attribute for ID'ing
        choiceDiv.attr("data-option", i);
      // Populate each <div> with text
        choiceDiv.text(trivia[round].options[i]);
      // Append text to "game-section-3" <div>
        $("#game-section-3").append(choiceDiv);
    }

	roundTimer = setInterval(tickDown,1000);

    $(".choices").on("click", function() {
	console.log(parseInt($(this).data("option")));
	userChoice = parseInt($(this).data("option"));

		if (userChoice === trivia[round].correctAnswer) {
			correctCount++;
			clearInterval(roundTimer);
			$("#game-section-2").html("CORRECT!");
			$("#game-section-3").html("The correct answer is: " 
			+ trivia[round].options[trivia[round].correctAnswer] +
			"<br><br><img src=" + trivia[round].media + " height='375px'>");

			setTimeout(nextRound,5000);

		} else if (userChoice !== trivia[round].correctAnswer) {   
			incorrectCount++;
			clearInterval(roundTimer);
			$("#game-section-2").html("INCORRECT!");
			$("#game-section-3").html("The correct answer is: " 
			+ trivia[round].options[trivia[round].correctAnswer] +
			"<br><br><img src=" + trivia[round].media + " height='375px'>");

		setTimeout(nextRound,5000);		
		}
	});

};

function nextRound () {
	// console.log("Round # just before increase: " + round);
	round++;
	// console.log("Round # just after increase: " + round);

	if (round < trivia.length) {
		seconds = 30;
		$("#game-section-1").html("Timer: 00:30");
		$("#game-section-2").html(trivia[round].question);
		$("#game-section-3").empty();
		// Create <div> containers for each of the 4 choices
		for (var i = 0; i < 4; i++) {
	        var choiceDiv = $("<div>");  
	      // Add class='choices' for styling
	        choiceDiv.addClass("choices");
	      // Give each <div> a data-attribute for ID'ing
	        choiceDiv.attr("data-option", i);

	      // Populate each <div> with text
	        choiceDiv.text(trivia[round].options[i]);
	      // Append text to "game-section-3" <div>
	        $("#game-section-3").append(choiceDiv);	
	    }

	    roundTimer = setInterval(tickDown,1000);

	    $(".choices").on("click", function() {
			console.log(parseInt($(this).data("option")));
			userChoice = parseInt($(this).data("option"));

			if (userChoice === trivia[round].correctAnswer) {
				correctCount++;
				clearInterval(roundTimer);
				$("#game-section-2").html("Correct!");
				$("#game-section-3").html("The correct answer is: " 
				+ trivia[round].options[trivia[round].correctAnswer] +
				"<br><br><img src=" + trivia[round].media + " height='375px'>");

				setTimeout(nextRound,5000);

			} else if (userChoice !== trivia[round].correctAnswer) {   
				incorrectCount++;
				clearInterval(roundTimer);
				$("#game-section-2").html("INCORRECT!");
				$("#game-section-3").html("The correct answer is: " 
				+ trivia[round].options[trivia[round].correctAnswer] +
				"<br><br><img src=" + trivia[round].media + " height='375px'>");

			setTimeout(nextRound,5000);		
			}

		}); 	

	} else if (round >= trivia.length) {

		$("#game-section-2").html("All Done! Here's how you did...");
		$("#game-section-3").html("<p>Correct Answers: " + correctCount + "</p>"
			+ "<p>Incorrect Answers: " + incorrectCount + "</p>"
			+ "<p>Unanswered: " + unansweredCount + "</p>");
		$("#start-btn").show()
		$("#start-btn").html("<div>Click the door to play again!</div> <img src='assets/images/door.jpg'>");
	}



};

displayStart();

// Initialize game when user clicks 'Start' Button
$("#start-btn").click(startTrivia);


///---my notes--//



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