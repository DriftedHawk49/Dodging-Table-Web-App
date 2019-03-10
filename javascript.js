

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

// To update
var updateScore = function(){
	$('.score_tile')[0].innerText = score;
}

var updateQuestion = function(num1,num2){
	$('.num1')[0].innerText = num1;
	$('.num2')[0].innerText = num2;
}

var updateClock = function(route,clockTime){
	$($(".graphic_timer")[0])[0].attributes.src.nodeValue = route;
	$("#timer_js")[0].innerText = clockTime;
}

var emptyAnswerBox = function(){
	$('.answer_box')[0].firstChild.value = "";
}

var endGame = function(){

}

internalTimerTen = function(){
	var a = 9;
	var b = a;
	var internalTime = setInterval(()=>{
		updateClock(tenSecondsClock[b],b);
		b-=1;
		if(b==0){
			clearInterval(internalTime);
		}
	},1000);
}

internalTimerSeven = function(){
	var a = 7;
	var b = a;
	var internalTime = setInterval(()=>{
		updateClock(tenSecondsClock[b],b);
		b-=1;
		if(b==0){
			clearInterval(internalTime);
		}
	},1000);
}


internalTimerFive = function(){
	var a = 5;
	var b = a;
	var internalTime = setInterval(()=>{
		updateClock(tenSecondsClock[b],b);
		b-=1;
		if(b==0){
			clearInterval(internalTime);
		}
	},1000);
}




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
				endGame();
			}	
			else if(answer!=parseInt(userAns)){
				ansWrong+=1;
				console.log("That was wrong answer.")
				if(ansWrong>3){
					clearInterval(timer0);
					alert("You have answered wrong 3 times. You lose.")
					endGame();
				}
				else{
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
				endGame();
			}	
			else if(answer!=parseInt(userAns)){
				ansWrong+=1;
				console.log("That was wrong answer.")
				if(ansWrong>3){
					clearInterval(timer0);
					alert("You have answered wrong 3 times. You lose.")
					endGame();
				}
				else{
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
				//Enter Game winning Here.
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


$('.level-btn').on('click',function(obj){
	level = obj.currentTarget.innerText;
	$('.actual_game').removeClass('hidden');
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
	}
	else if(level=='Hard'){
		var timer = 5000;
		$('.level_indicator').addClass('hard_badge');
	}
	else{
		var timer = 5000;
		$('.level_indicator').addClass('god_badge');
	}


});