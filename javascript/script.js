window.onload = function () {

	var content = document.getElementById('content');
	var button = document.getElementById('button');
	var counter = document.getElementById('counter');
	
	var start = true;
	var clicked = 0;
	var messagesDone = 0;

	content.onclick = function () {
		if(!start) {
			// TODO: register which message is clicked
			// TODO: make sure each message can only be clicked once
			clicked++;
			alert('you have clicked ' + clicked + ' times');
		}
	}
	
	button.onclick = function() {
		if(start) { 							   // load first message
			start = false;
			button.innerText = 'Next message';
		} else { 								   // load next message
			messagesDone++;
			counter.innerHTML = messagesDone;
			if(messagesDone == 30) {
				button.innerText = 'Go to survey'; // go to survey
			}
		}
	}
}