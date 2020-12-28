window.onload = function () {

	var content = document.getElementById('content');
	var message = document.getElementById('message');
	var button = document.getElementById('expbutton');
	var counter = document.getElementById('counter');
	var sender = document.getElementById('sender');
	
	var start = true;
	var messagesDone = 0;
	var messageIndex = 0;
	var clickedArray = new Array();
	var messageArray = new Array();
	var senderArray = new Array();
	
	// Dataset
	senderArray[0] = "Unknown Number";
	messageArray[0] = "<img src='./images/Duck.jpg' style='width: 100%'/><br><br><p2>http://notducks.org/</p2>";

	// Shows next message in div 'content'
	function next_message() {
		sender.innerHTML = senderArray[messageIndex];
		message.innerHTML = messageArray[messageIndex];
		messageIndex++;
	}

	// Registers click on a message and stores the index of that message in an array
	content.onclick = function () {
		if(!start) {
			clickedArray[clickedArray.length] = 'm' + messageIndex.toString();
		}
	}
	
	// Next message button
	button.onclick = function() {
		if(start) { 							   // load first message
			start = false;
			next_message();
			button.innerText = 'Next message';
		} else { 								   // load next message
			next_message();
			messagesDone++;
			counter.innerHTML = messagesDone;
			if(messagesDone == 30) {
				button.innerText = 'Go to survey'; // go to survey
			}
		}
	}
}