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
	var totalMessages = 40;
	var totalQuestions = 6;
	var messagesDone = 0;
	var messageIndex = 0;
	var questionsDone = 0;
	var questionsIndex = 0;
	var messageArray = new Array();
	var senderArray = new Array();
	var clickedArray = new Array();
	var questionArray = new Array();
	var answerArray = new Array();
	
	//a 10x bekende zender, afbeelding hoort bij link, 'normale link'
	//b 10x bekende zender, afbeelding hoort niet bij de link, 'normale link'
	//c 5x  bekende zender, afbeelding hoort bij link, link gebruikt http://
	//d 5x  bekende zender, afbeelding hoort bij link, link bevat veel niet-letter karakters
	//e 5x  medium onbekende zender, afbeelding hoort bij link, 'normale link'
	//f 5x  onbekende zender, afbeelding hoort bij link, 'normale link'
	
	// order: aebcdabaabecdeebaceabdeceebacbddababbaee
	// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39
	// a e b c d a b a a b f  c  d  f  e  b  a  c  f  a  b  d  f  c  e  e  b  a  c  b  d  d  a  b  a  b  b  a  f  e
	
	// Messages
	senderArray[0] = "Afzender: een goede bekende";
	messageArray[0] = "<img src='./images/0.jpg' style='max-width:100%'><br><p2>https://www.online-lessen.com</p2><p>Hoi, is dit niet iets voor jou?</p>";
	
	senderArray[1] = "Afzender: onbekend nummer";
	messageArray[1] = "<img src='./images/1.jpg' style='max-width:100%'><br><p2>https://www.honden.com</p2><p>Iets voor de echte hondenliefhebber!</p>";
	
	senderArray[2] = "Afzender: een goede bekende";
	messageArray[2] = "<img src='./images/2.jpg' style='max-width:100%'><br><p2>https://www.computeronderdelen.com</p2><p>Ik heb hier laatst een nieuwe PC gekocht, goeie service.</p>";
	
	senderArray[3] = "Afzender: een goede bekende";
	messageArray[3] = "<img src='./images/3.jpg' style='max-width:100%'><br><p2>http://www.vliegtickets.com</p2><p>Hier vond ik de goedkoopste.</p>";
	
	// Survey questions
	questionArray[0] = "<p>Hoe oud bent u?</p><input id='question' type='number'/>";
	
	questionArray[1] = "<p>Ongeveer hoe veel uur per dag gebruikt u het internet gewoonlijk?</p><input id='question' type='number'/>";
	
	questionArray[2] = "<p>Ongeveer hoe veel uur per dag gebruikt u instant messaging apps (zoals WhatsApp) gewoonlijk?</p><input id='question' type='number'/>";
	
	questionArray[3] = "<p>Bij het maken van de keuze om op een bericht te klikken of niet, wat is volgens u de belangrijkste factor?</p><p>Kies uit: de afzender, het plaatje, de link zelf.</p><input id='question' type='text'/>";
	
	questionArray[4] = "<p>Bent u wel eens het slachtoffer geweest van een phishing aanval?</p><input id='question' type='text'/>";
	
	questionArray[5] = "<p>Op een schaal van 1 tot 5, waarbij 1 'heel slecht' en 5 'heel goed' voorstelt, hoe goed bent u in het herkennen van phishing berichten?</p><input id='question' type='number'/>";
	
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
			answerString += 'Vraag ' + (i+1) + ': ' + answerArray[i] + '<br>';
		}
		
		Email.send({
			Host: "smtp.gmail.com",
			Username: 'sanders.reinier@gmail.com',
			Password: "mbobneybklktavoe",
			To: 'sanders.reinier@gmail.com',
			From: 'sanders.reinier@gmail.com',
			Subject: "THESIS",
			Body: "Clicked messages:<br>" + clickString + "<br><br>Answers:<br>" + answerString
		}).then(alert('Data is succesvol verstuurd. Bedankt voor uw deelname. U kunt de website nu afsluiten.'));
		
		dataSent = true; // prevent data from being sent multiple times
	}
	
	// Survey
	function survey() {
		sender.innerHTML = "Vraag " + (questionsIndex + 1).toString();
		counter.innerHTML = questionsDone;
		done.innerHTML = "/" + totalQuestions + " vragen gedaan.";
		button.innerText = "Volgende vraag";
		message.innerHTML = questionArray[questionsIndex];
		if(questionsDone == totalQuestions) {
			sender.innerHTML = "Klaar!";
			message.innerHTML = "De vragenlijst is nu klaar. Druk op 'Verstuur data' om het experiment af te ronden.";
			button.innerText = 'Verstuur data';
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
		content.onmouseover = function() {
			if(!end)
				this.style.backgroundColor = "lightgrey";
		}
		content.onmouseout = function() {
			this.style.backgroundColor = "white";
		}
		if(messagesDone == totalMessages) {
			sender.innerHTML = "Klaar!";
			message.innerHTML = "Het eerste deel is klaar. Klik op 'Ga naar vragenlijst' om verder te gaan.";
			end = true;
			button.innerText = 'Ga naar vragenlijst';
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
			button.innerText = 'Ik vertrouw het niet';
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