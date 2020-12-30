window.onload = function () {

	var content = document.getElementById('content');
	var message = document.getElementById('message');
	var button = document.getElementById('expbutton');
	var counter = document.getElementById('counter');
	var counterText = document.getElementById('done');
	var sender = document.getElementById('sender');
	
	var start = true;
	var end = false;
	var sendData = false;
	var messagesDone = 0;
	var messageIndex = 0;
	var questionsDone = 0;
	var questionsIndex = 0;
	var messageArray = new Array();
	var senderArray = new Array();
	var clickedArray = new Array();
	var questionArray = new Array();
	var answerArray = new Array();
	
	// Dataset
	for(var i = 0; i < 30; i++) {
		senderArray[i] = "Sender " + (i + 1).toString();
		messageArray[i] = "Message " + (i + 1).toString();
	}
	
	for(var i = 0; i < 10; i++) {
		questionArray[i] = "Question";
	}
	
	// Send data to endpoint
	function send_data() {
		var data = new FormData();
		data.append("data", "something_test");
		var xhr = new XMLHttpRequest();
		xhr.open('post', './php/receive.php', true);
		xhr.send(data);
		alert("Your data has been sent to the server. Thank you for participating. You can now close this website.");
	}
	
	// Survey
	function survey() {
		sender.innerHTML = "Question " + (questionsIndex + 1).toString();
		counter.innerHTML = questionsDone;
		done.innerHTML = "/10 questions done.";
		button.innerText = "Next question";
		message.innerHTML = questionArray[questionsIndex];
		if(questionsDone == 10) {
			sender.innerHTML = "Done!";
			message.innerHTML = "This concludes the survey. Click 'Send data' to end the experiment.";
			button.innerText = 'Send data';
			counter.innerHTML = questionsDone;
			sendData = true;
		}
		questionsIndex++;
		questionsDone++;
	}
	
	// Shows next message in div 'content'
	function next_message() {
		if(!start) {
			messagesDone++;
			counter.innerHTML = messagesDone;
		}
		sender.innerHTML = senderArray[messageIndex];
		message.innerHTML = messageArray[messageIndex];
		messageIndex++;
		if(messagesDone == 30) {
			sender.innerHTML = "Done!";
			message.innerHTML = "This concludes the experiment. Click 'Go to survey' to continue.";
			end = true;
			button.innerText = 'Go to survey';
		}
	}

	// Registers click on a message and stores the index of that message in an array
	content.onclick = function () {
		if(!start) {   // first message can't be clicked
			if(!end) { // last message and survey questions can't be clicked
				clickedArray[clickedArray.length] = 'm' + messageIndex.toString();
				next_message();
			}
		}
	}
	
	// Next message button
	button.onclick = function() {
		if(start) { 							   // load first message
			next_message();
			start = false;
			button.innerText = 'Next message';
		} else if(sendData) {
			send_data();
		} else if(end) {
			survey();
		} else { 								   // load next message
			next_message();
		}
	}
}