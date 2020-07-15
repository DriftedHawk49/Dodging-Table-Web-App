var questionArray = [];
var level;
var questionNumber = 0;
var max;
var min;
var limit;
const basicScore = 1;
var score = 0;

var fiveSecondsClock = ['assets/5s_clock/zero.png','assets/5s_clock/one.png','assets/5s_clock/two.png','assets/5s_clock/three.png','assets/5s_clock/four.png','assets/5s_clock/five.png'];
var sevenSecondsClock = ['assets/7s_clock/zero.png','assets/7s_clock/one.png','assets/7s_clock/two.png','assets/7s_clock/three.png','assets/7s_clock/four.png','assets/7s_clock/five.png','assets/7s_clock/six.png','assets/7s_clock/seven.png'];
var tenSecondsClock = ['assets/10s_clock/zero.png','assets/10s_clock/one.png','assets/10s_clock/two.png','assets/10s_clock/three.png','assets/10s_clock/four.png','assets/10s_clock/five.png','assets/10s_clock/six.png','assets/10s_clock/seven.png','assets/10s_clock/eight.png','assets/10s_clock/nine.png','assets/10s_clock/ten.png'];

//  TO GENERATE RANDOM NUMBERS AND RETURN AN ARRAY

function randomGenerator(max, min){
	var n1 = Math.random()*(max+1-min)+min;
	var n2 = Math.random()*(8)+2;
	n1 = Math.trunc(n1);
	n2 = Math.trunc(n2);
	return [n1,n2];
};

// FUNCTION TO CALL RANDOM GENERATOR AND PUSH ARRAYS INTO MAIN ARRAY TO DISPLAY OVER UI

function pushQuestion(max,min,current,limit){
	if(current<=limit){
		questionArray.push(randomGenerator(max,min));
	}
}

// TO FILL QUESTION ARRAY ACCORDING TO LEVEL -

// LVL - EASY

var wave1_easy = function(){
	max = 5;
	min = 2;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave2_easy = function(){
	max = 10;
	min = 2;
	limit = 50;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

// LVL - INTERMEDIATE

var wave1_int = function(){
	max = 10;
	min = 2;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave2_int = function(){
	max = 15;
	min = 11;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave3_int = function(){
	max = 20;
	min = 16;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave4_int = function(){
	max = 20;
	min = 2;
	limit = 50;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

// LVL - HARD

var wave1_hard = function(){
	max = 20;
	min = 12;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave2_hard = function(){
	max = 25;
	min = 21;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave3_hard = function(){
	max = 25;
	min = 12;
	limit = 50;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

// LVL - GOD

var wave1_god = function(){
	max = 35;
	min = 25;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave2_god = function(){
	max = 50;
	min = 36;
	limit = 25;
	var start = 0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}

var wave3_god = function(){
	max = 50;
	min = 25;
	limit = 50;
	var start =0;
	questionArray = [];
	for(var i=0;i<limit;i++){
		pushQuestion(max,min,start,limit);
		start+=1;
	}
}


// Level Finished.

// UI Updation Functions

// To update Question Number
function updateQuestionNumber(qn){
	$(".question-number")[0].innerText = qn;
}
// To update Score
var updateScore = function(){
	$('.score_tile')[0].innerText = score;
}
// To update Question Number
var updateQuestion = function(num1,num2){
	$('.num1')[0].innerText = num1;
	$('.num2')[0].innerText = num2;
}
// To update Clock Timer Number & graphic
var updateClock = function(route,clockTime){
	$($(".graphic_timer")[0])[0].attributes.src.nodeValue = route;
	$("#timer_js")[0].innerText = clockTime;
}
// To empty the answer box after every question
var emptyAnswerBox = function(){
	$('.answer_box')[0].firstChild.value = "";
}


// Function to End the game
var endGame = function(status){
	if(status=="win"){
		$(".score")[1].innerText = score.toString();
		$(".level")[1].innerText = level;
		$("#actual_game").addClass("hidden");
		$(".scoreboard").removeClass("hidden");
	}
	else{
			$(".score")[0].innerText = score.toString();
			$(".level")[0].innerText = level;
			$("#actual_game").addClass("hidden");
			$(".lose-game").removeClass("hidden");
		if(status=="timeup"){
			$(".status")[0].innerText = "You didn't answer in time.";
		}
		else{
			$(".status")[0].innerText = "You gave 3 Wrong Answers.";
		}
	}
}

// Timer Functions

internalTimerTen = function(){
	var a = 9;
	var b = a;
	var internalTime = setInterval(()=>{
		updateClock(tenSecondsClock[b],b);
		b-=1;
		if(b==-1){
			clearInterval(internalTime);
		}
	},1000);
}

internalTimerSeven = function(){
	var a = 6;
	var b = a;
	var internalTime = setInterval(()=>{
		updateClock(sevenSecondsClock[b],b);
		b-=1;
		if(b==-1){
			clearInterval(internalTime);
		}
	},1000);
}


internalTimerFive = function(){
	var a = 4;
	var b = a;
	var internalTime = setInterval(()=>{
		updateClock(fiveSecondsClock[b],b);
		b-=1;
		if(b==-1){
			clearInterval(internalTime);
		}
	},1000);
}



//Easy Game Mode
function easyWave1Game(){
		var timer = 10000;
		wave1_easy(); //Set Questions

		ansWrong = 0; // Variable to count wrong answers
		questionNumber = 1; // Current Question Number
		var answer = 0;	// Current Answer (Computed by Machine)

		updateClock(tenSecondsClock[10],10);
		internalTimerTen();
		updateScore();
		updateQuestion(1);
		updateQuestion(questionArray[0][0],questionArray[0][1]);
		answer = questionArray[0][0]*questionArray[0][1];

		var timer0 = setInterval(()=>{

			var userAns = $('.answer_box')[0].firstChild.value;
			if(userAns==""){
				console.log("You did not enter anything. You lose");
				clearInterval(timer0);
				endGame("timeup");
			}
			else if(answer!=parseInt(userAns)){
				ansWrong+=1;
				console.log("That was wrong answer.");
				if(ansWrong>3){
					clearInterval(timer0);
					endGame("w");
				}
				else{
					$(".wrong-left")[0].innerText = (3-ansWrong).toString();
					emptyAnswerBox();
					updateClock(tenSecondsClock[10],10);
					internalTimerTen();
					answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
					updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
					questionNumber+=1;
					updateQuestionNumber(questionNumber);
				}
			}
			else if(questionNumber>24){
				console.log("Done with Wave 1");
				clearInterval(timer0);
				easyWave2Game();
			}
			else if(answer==parseInt(userAns)){
				emptyAnswerBox();
				updateClock(tenSecondsClock[10],10);
				internalTimerTen();
				score+=1;
				console.log("Right Answer");
				updateScore();
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}



		},timer);
}

function easyWave2Game(){
	var timer = 10000;
		wave2_easy(); //Set Questions

		ansWrong = 0; // Variable to count wrong answers
		questionNumber = 1; // Current Question Number
		var answer = 0;	// Current Answer (Computed by Machine)

		updateClock(tenSecondsClock[10],10);
		internalTimerTen();
		updateScore();
		updateQuestion(1);
		updateQuestion(questionArray[0][0],questionArray[0][1]);
		answer = questionArray[0][0]*questionArray[0][1];

		var timer0 = setInterval(()=>{

			var userAns = $('.answer_box')[0].firstChild.value;
			if(userAns==""){
				console.log("You did not enter anything. You lose");
				clearInterval(timer0);
				endGame("timeup");
			}
			else if(answer!=parseInt(userAns)){
				ansWrong+=1;
				console.log("That was wrong answer.")
				if(ansWrong>3){
					clearInterval(timer0);
					endGame("w");
				}
				else{
					$(".wrong-left")[0].innerText = (3-ansWrong).toString();
					emptyAnswerBox();
					updateClock(tenSecondsClock[10],10);
					internalTimerTen();
					answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
					updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
					questionNumber+=1;
					updateQuestionNumber(questionNumber);
				}
			}
			else if(questionNumber>49){
				console.log("Done with Wave 2");
				clearInterval(timer0);
				endGame("win");
			}
			else if(answer==parseInt(userAns)){
				emptyAnswerBox();
				updateClock(tenSecondsClock[10],10);
				internalTimerTen();
				score+=1;
				console.log("Right Answer");
				updateScore();
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}



		},timer);
}



//Intermediate Game Mode
function intWave1Game(){
	var timer = 8000;
	wave1_int(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(sevenSecondsClock[7],7);
	internalTimerSeven();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(sevenSecondsClock[7],7);
				internalTimerSeven();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>24){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			intWave2Game();
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(sevenSecondsClock[7],7);
			internalTimerSeven();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}

function intWave2Game(){
	var timer = 8000;
	wave2_int(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(sevenSecondsClock[7],7);
	internalTimerSeven();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(sevenSecondsClock[7],7);
				internalTimerSeven();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>24){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			intWave3Game();
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(sevenSecondsClock[7],7);
			internalTimerSeven();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}

function intWave3Game(){
	var timer = 8000;
	wave3_int(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(sevenSecondsClock[7],7);
	internalTimerSeven();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(sevenSecondsClock[7],7);
				internalTimerSeven();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>24){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			intWave4Game();
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(sevenSecondsClock[7],7);
			internalTimerSeven();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}

function intWave4Game(){
	var timer = 8000;
	wave4_int(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(sevenSecondsClock[7],7);
	internalTimerSeven();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(sevenSecondsClock[7],7);
				internalTimerSeven();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>49){
			console.log("Done with Wave 4");
			clearInterval(timer0);
			endGame("win");
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(sevenSecondsClock[7],7);
			internalTimerSeven();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}



//Hard Game Mode
function hardWave1Game(){
	var timer = 6000;
	wave1_hard(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(fiveSecondsClock[5],5);
	internalTimerFive();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(fiveSecondsClock[5],5);
				internalTimerFive();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>24){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			hardWave2Game();
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(fiveSecondsClock[5],5);
			internalTimerFive();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}

function hardWave2Game(){
	var timer = 6000;
	wave2_hard(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(fiveSecondsClock[5],5);
	internalTimerFive();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(fiveSecondsClock[5],5);
				internalTimerFive();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>24){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			hardWave3Game();
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(fiveSecondsClock[5],5);
			internalTimerFive();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}

function hardWave3Game(){
	var timer = 6000;
	wave3_hard(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(fiveSecondsClock[5],5);
	internalTimerFive();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(fiveSecondsClock[5],5);
				internalTimerFive();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>49){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			endGame("win");
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(fiveSecondsClock[5],5);
			internalTimerFive();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}



//God Game Mode

function godWave1Game(){
	var timer = 6000;
	wave1_god(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(fiveSecondsClock[5],5);
	internalTimerFive();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(fiveSecondsClock[5],5);
				internalTimerFive();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>24){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			godWave2Game();
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(fiveSecondsClock[5],5);
			internalTimerFive();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}

function godWave2Game(){
	var timer = 6000;
	wave2_god(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(fiveSecondsClock[5],5);
	internalTimerFive();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(fiveSecondsClock[5],5);
				internalTimerFive();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>24){
			console.log("Done with Wave 1");
			clearInterval(timer0);
			// Insert Next Wave Function
			godWave3Game();
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(fiveSecondsClock[5],5);
			internalTimerFive();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}

function godWave3Game(){
	var timer = 6000;
	wave3_god(); //Set Questions

	ansWrong = 0; // Variable to count wrong answers
	questionNumber = 1; // Current Question Number
	var answer = 0;	// Current Answer (Computed by Machine)

	updateClock(fiveSecondsClock[5],5);
	internalTimerFive();
	console.log("Timer Started");
	updateScore();
	updateQuestion(1);
	updateQuestion(questionArray[0][0],questionArray[0][1]);
	answer = questionArray[0][0]*questionArray[0][1];

	var timer0 = setInterval(()=>{
		var userAns = $('.answer_box')[0].firstChild.value;
		if(userAns==""){
			console.log("You did not enter anything. You lose");
			clearInterval(timer0);
			endGame("timeup");
		}
		else if(answer!=parseInt(userAns)){
			ansWrong+=1;
			console.log("That was wrong answer.")
			if(ansWrong>3){
				clearInterval(timer0);
				endGame("w");
			}
			else{
				$(".wrong-left")[0].innerText = (3-ansWrong).toString();
				emptyAnswerBox();
				updateClock(fiveSecondsClock[5],5);
				internalTimerFive();
				console.log("timer inside one started");
				answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
				updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
				questionNumber+=1;
				updateQuestionNumber(questionNumber);
			}
		}
		else if(questionNumber>49){
			console.log("Done with Wave 3");
			clearInterval(timer0);
			// Insert Next Wave Function
			endGame("win");
		}
		else if(answer==parseInt(userAns)){
			emptyAnswerBox();
			updateClock(fiveSecondsClock[5],5);
			internalTimerFive();
			console.log("Right Answer Timer Started");
			score+=1;
			console.log("Right Answer");
			updateScore();
			answer = questionArray[questionNumber][0]*questionArray[questionNumber][1];
			updateQuestion(questionArray[questionNumber][0],questionArray[questionNumber][1]);
			questionNumber+=1;
			updateQuestionNumber(questionNumber);
		}
	},timer);
}


function howToPlay(){

	if(!($(".main_game").hasClass("hidden"))){
		$(".main_game").addClass("hidden");
	}
	if(!($(".actual_game").hasClass("hidden"))){
		$(".actual_game").addClass("hidden")
	}
	if(!($(".lose-game").hasClass("hidden"))){
		$(".lose-game").addClass("hidden")
	}
	if(!($(".scoreboard").hasClass("hidden"))){
		$(".scoreboard").addClass("hidden")
	}
	$(".how_to_play").removeClass("hidden");
}


$('.level-btn').on('click',function(obj){
	level = obj.currentTarget.innerText;
	$('#actual_game').removeClass('hidden');
	$('.main_game').addClass('hidden');
	$('.score_tile')[0].innerText = 0;
	$('.level_indicator')[0].innerText = level;

	if(level=='Easy'){
		$('.level_indicator').addClass('easy_badge');
		easyWave1Game();
	}
	else if(level=='Intermediate'){
		var timer = 7000;
		$('.level_indicator').addClass('int_badge');
		intWave1Game();
	}
	else if(level=='Hard'){
		var timer = 5000;
		$('.level_indicator').addClass('hard_badge');
		hardWave1Game();
	}
	else{
		var timer = 5000;
		$('.level_indicator').addClass('god_badge');
		godWave1Game();
	}
});