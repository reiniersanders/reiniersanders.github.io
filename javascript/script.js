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
	var dataSent = false;
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
	
	questionArray[0] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[1] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[2] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[3] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[4] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[5] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[6] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[7] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[8] = "<p>How old are you?</p><input id='question' type='number'/>";
	questionArray[9] = "<p>How old are you?</p><input id='question' type='number'/>";
	
	// Format and send data to endpoint
	function send_data() {
		// Format clicks
		var clickString = "";
		for(var i = 0; i < clickedArray.length; i++){
			clickString += clickedArray[i] + ' ';
		}
		
		// Format answers
		var answerString = "";
		for(var i = 0; i < answerArray.length; i++) {
			answerString += i + ': ' + answerArray[i] + '<br>';
		}
		
		Email.send({
			Host: "smtp.gmail.com",
			Username: 'sanders.reinier@gmail.com',
			Password: "mbobneybklktavoe",
			To: 'sanders.reinier@gmail.com',
			From: 'sanders.reinier@gmail.com',
			Subject: "THESIS",
			Body: "Clicked messages:<br>" + clickString + "<br><br>Answers:<br>" + answerString
		}).then(alert('Data sent succesfully. You can now close this website.'));
		
		dataSent = true; // prevent data from being sent multiple times
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

	// Registers click on a message and stores the name of that message in an array
	content.onclick = function () {
		if(!start) {   // first message can't be clicked
			if(!end) { // last message and survey questions can't be clicked
				clickedArray[clickedArray.length] = 'm' + messageIndex.toString();
				next_message();
			}
		}
	}
	
	var first = true;
	
	// Button
	button.onclick = function() {
		if(start) { 							// load first message
			next_message();
			start = false;
			button.innerText = 'Next message';
		} else if(sendData) {					// send data
			if(!dataSent) {
				send_data();
			}
		} else if(end) {						// save answer and load next question
			if(first) {
				survey();
				first = false;
			} else {
				answerArray[answerArray.length] = document.getElementById('question').value;
				survey();
			}
		} else { 								// load next message
			next_message();
		}
	}
}