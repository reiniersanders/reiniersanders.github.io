var messagesDone = 0;
var timeLeft = 10;
var clicked = 0;

var timer = setInterval(function() {
	if(timeLeft < 0){
		timeLeft = 10;
		messagesDone++;
		if(messagesDone > 30) {
			alert("You are done with part one of the experiment. Click 'OK' to continue to the survey.");
			window.location.replace("survey.html");
		}
	}
	document.getElementById("timeBar").value = timeLeft;
	document.getElementById("timeText").textContent = timeLeft;
	document.getElementById("messages").textContent = messagesDone;
	timeLeft--;
}, 1000);

function click() {
	clicked++;
	alert('you have clicked ' + clicked + ' messages so far.');
}