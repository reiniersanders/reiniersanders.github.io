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
	
	//a 10x een goede bekende, afbeelding hoort bij link, 'normale link'
	//b 10x een goede bekende, afbeelding hoort niet bij de link, 'normale link'
	//c 5x  een goede bekende, afbeelding hoort bij link, link gebruikt http://
	//d 5x  een goede bekende, afbeelding hoort bij link, link bevat veel karakters
	//e 5x  kennis, afbeelding hoort bij link, 'normale link'
	//f 5x  onbekend, afbeelding hoort bij link, 'normale link'
	
	// order: aebcdabaabecdeebaceabdeceebacbddababbaee
	// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39
	// a e b c d a b a a b f  c  d  f  e  b  a  c  f  a  b  d  f  c  e  e  b  a  c  b  d  d  a  b  a  b  b  a  f  e
	
	// Messages
	senderArray[0] = "Afzender: een goede bekende";
	messageArray[0] = "<img src='./images/0.jpg' style='max-width:100%'><br><p2>https://www.online-lessen.com</p2><hr><p>Hoi, is dit niet iets voor jou?</p>";
	
	senderArray[1] = "Afzender: een kennis";
	messageArray[1] = "<img src='./images/1.jpg' style='max-width:100%'><br><p2>https://www.honden.com</p2><hr><p>Iets voor de echte hondenliefhebber!</p>";
	
	senderArray[2] = "Afzender: een goede bekende";
	messageArray[2] = "<img src='./images/2.jpg' style='max-width:100%'><br><p2>https://www.computeronderdelen.com</p2><hr><p>Ik heb hier laatst een nieuwe PC gekocht, goeie service.</p>";
	
	senderArray[3] = "Afzender: een goede bekende";
	messageArray[3] = "<img src='./images/3.jpg' style='max-width:100%'><br><p2>http://www.vliegtickets.com</p2><hr><p>Hier vond ik de goedkoopste.</p>";

	senderArray[4] = "Afzender: een goede bekende";
	messageArray[4] = "<img src='./images/4.jpg' style='max-width:100%'><br><p2>https://www.provider.com/?ref=82hd_d2d2h&utm_source=social&id=If2h8WHI82oQ</p2><hr><p>Ik ben overgestapt, veel betere prijzen!</p>";
	
	senderArray[5] = "Afzender: een goede bekende";
	messageArray[5] = "<img src='./images/5.jpg' style='max-width:100%'><br><p2>https://www.pretpark.com</p2><hr><p>Laten we hier heen gaan!</p>";
	
	senderArray[6] = "Afzender: een goede bekende";
	messageArray[6] = "<img src='./images/6.jpg' style='max-width:100%'><br><p2>https://www.kledingwinkel.com</p2><hr><p>Binnenkort maar even shoppen :)</p>";
	
	senderArray[7] = "Afzender: een goede bekende";
	messageArray[7] = "<img src='./images/7.jpg' style='max-width:100%'><br><p2>https://www.boodschappen.com</p2><hr><p>Er is korting deze week</p>";
	
	senderArray[8] = "Afzender: een goede bekende";
	messageArray[8] = "<img src='./images/8.jpg' style='max-width:100%'><br><p2>https://www.belasting.com</p2><hr><p>Vergeet niet je aangifte te doen!</p>";
	
	senderArray[9] = "Afzender: een goede bekende";
	messageArray[9] = "<img src='./images/9.jpg' style='max-width:100%'><br><p2>https://www.recepten.com</p2><hr><p>Hier staan lekkere recepten zeg...</p>";
	
	senderArray[10] = "Afzender: onbekend";
	messageArray[10] = "<img src='./images/10.jpg' style='max-width:100%'><br><p2>https://www.cv-ketel.com</p2><hr><p>Een nieuwe cv ketel is goed voor het milieu</p>";
	
	senderArray[11] = "Afzender: een goede bekende";
	messageArray[11] = "<img src='./images/11.jpg' style='max-width:100%'><br><p2>http://www.autos.com</p2><hr><p>Welke zal ik kopen?</p>";
	
	senderArray[12] = "Afzender: een goede bekende";
	messageArray[12] = "<img src='./images/12.png' style='max-width:100%'><br><p2>https://www.sociaalplatform.com/?origin=8209JDDH8289&appid=4278ShuIU&ln=EN</p2><hr><p>Hey wil je mij volgen?</p>";

	senderArray[13] = "Afzender: onbekend";
	messageArray[13] = "<img src='./images/13.jpeg' style='max-width:100%'><br><p2>https://www.dierentuin.com</p2><hr><p>Er is een nieuwe panda geboren! :D</p>";
	
	senderArray[14] = "Afzender: een kennis";
	messageArray[14] = "<img src='./images/14.jpg' style='max-width:100%'><br><p2>https://www.nieuws.com</p2><hr><p>Wow, kijk dit!</p>";
	
	senderArray[15] = "Afzender: een goede bekende";
	messageArray[15] = "<img src='./images/15.jpg' style='max-width:100%'><br><p2>https://www.filmshuren.com</p2><hr><p>Laatst deze gekeken, erg goed!</p>";
	
	senderArray[16] = "Afzender: een goede bekende";
	messageArray[16] = "<img src='./images/16.jpg' style='max-width:100%'><br><p2>https://www.meeting.com</p2><hr><p>Wil je morgen bellen?</p>";
	
	senderArray[17] = "Afzender: een goede bekende";
	messageArray[17] = "<img src='./images/17.jpg' style='max-width:100%'><br><p2>http://www.fotografie.com</p2><hr><p>Misschien een workshop voor jou?</p>";
	
	senderArray[18] = "Afzender: onbekend";
	messageArray[18] = "<img src='./images/18.jpg' style='max-width:100%'><br><p2>https://www.etenbestellen.com</p2><hr><p>Eet gezellig mee.</p>";
	
	senderArray[19] = "Afzender: een goede bekende";
	messageArray[19] = "<img src='./images/19.jpg' style='max-width:100%'><br><p2>https://www.grappen.com</p2><hr><p>Hahaha ik ga stuk!</p>";
	
	senderArray[20] = "Afzender: een goede bekende";
	messageArray[20] = "<img src='./images/20.jpg' style='max-width:100%'><br><p2>https://www.koffie.com</p2><hr><p>Hier hebben ze de lekkerste bonen.</p>";
	
	senderArray[21] = "Afzender: een goede bekende";
	messageArray[21] = "<img src='./images/21.jpg' style='max-width:100%'><br><p2>https://www.videos.com/?v=a2IWh28987H&lang=NL&ref=XNpc972HC&id=h22DHUI8yNc</p2><hr><p>Kijk nou eens wat ik hier zag...</p>";
	
	senderArray[22] = "Afzender: onbekend";
	messageArray[22] = "<img src='./images/22.jpg' style='max-width:100%'><br><p2>https://www.interieur.com</p2><hr><p>Wat een design!</p>";
	
	senderArray[23] = "Afzender: een goede bekende";
	messageArray[23] = "<img src='./images/23.jpg' style='max-width:100%'><br><p2>http://www.strand.com</p2><hr><p>Echt behoefte aan vakantie...</p>";

	senderArray[24] = "Afzender: een kennis";
	messageArray[24] = "<img src='./images/24.jpg' style='max-width:100%'><br><p2>https://www.sporten.com</p2><hr><p>Ik voel me zo fit!</p>";
	
	senderArray[25] = "Afzender: een kennis";
	messageArray[25] = "<img src='./images/25.jpg' style='max-width:100%'><br><p2>https://www.politiek.com</p2><hr><p>Wat vind jij hier nou van?</p>";
	
	senderArray[26] = "Afzender: een goede bekende";
	messageArray[26] = "<img src='./images/26.jpg' style='max-width:100%'><br><p2>https://www.cadeaus.com</p2><hr><p>De leukste cadeau's hebben ze hier.</p>";
	
	senderArray[27] = "Afzender: een goede bekende";
	messageArray[27] = "<img src='./images/27.jpg' style='max-width:100%'><br><p2>https://www.tuinieren.com</p2><hr><p>Zo onderhoud ik mijn achtertuin.</p>";
	
	senderArray[28] = "Afzender: een goede bekende";
	messageArray[28] = "<img src='./images/28.jpg' style='max-width:100%'><br><p2>http://www.vogels.com</p2><hr><p>Wat een veren zeg!</p>";
	
	senderArray[29] = "Afzender: een goede bekende";
	messageArray[29] = "<img src='./images/29.jpg' style='max-width:100%'><br><p2>https://www.architectuur.com</p2><hr><p>Een goede bron van inspiratie.</p>";
	
	senderArray[30] = "Afzender: een goede bekende";
	messageArray[30] = "<img src='./images/30.jpg' style='max-width:100%'><br><p2>https://www.technologie.com/?cookie=Ckjh2789AhX&ln=NL&soc=FB&i=DHc2Z&hx=w2</p2><hr><p>Hier hebben ze de nieuwste gadgets.</p>";
	
	senderArray[31] = "Afzender: een goede bekende";
	messageArray[31] = "<img src='./images/31.jpg' style='max-width:100%'><br><p2>https://www.vacatures.com/?src=inet&q=HwuCQ5xpZ2&br=g_chrome&app_net=https</p2><hr><p>Hier heb ik een nieuwe baan gevonden.</p>";
	
	senderArray[32] = "Afzender: een goede bekende";
	messageArray[32] = "<img src='./images/32.jpg' style='max-width:100%'><br><p2>https://www.evenementen.com</p2><hr><p>Hopelijk kunnen we binnenkort hier heen!</p>";
	
	senderArray[33] = "Afzender: een goede bekende";
	messageArray[33] = "<img src='./images/33.jpg' style='max-width:100%'><br><p2>https://www.skireis.com</p2><hr><p>Ik kijk hier zo naar uit!</p>";
	
	senderArray[34] = "Afzender: een goede bekende";
	messageArray[34] = "<img src='./images/34.jpeg' style='max-width:100%'><br><p2>https://www.bosbeheer.com</p2><hr><p>Ik heb gedoneerd.</p>";
	
	senderArray[35] = "Afzender: een goede bekende";
	messageArray[35] = "<img src='./images/35.jpg' style='max-width:100%'><br><p2>https://www.bibliotheek.com</p2><hr><p>Ze hebben daar alle boeken die je maar wilt.</p>";
	
	senderArray[36] = "Afzender: een goede bekende";
	messageArray[36] = "<img src='./images/36.jpg' style='max-width:100%'><br><p2>https://www.camping.com</p2><hr><p>De beste outdoor spullen!</p>";
	
	senderArray[37] = "Afzender: een goede bekende";
	messageArray[37] = "<img src='./images/37.jpg' style='max-width:100%'><br><p2>https://www.kunst.com</p2><hr><p>Erg indrukwekkend.</p>";
	
	senderArray[38] = "Afzender: onbekend";
	messageArray[38] = "<img src='./images/38.jpg' style='max-width:100%'><br><p2>https://www.televisie.com</p2><hr><p>De allerscherpste.</p>";
	
	senderArray[39] = "Afzender: een kennis";
	messageArray[39] = "<img src='./images/39.jpg' style='max-width:100%'><br><p2>https://www.bank.com</p2><hr><p>Ik doe alles online tegenwoordig.</p>";

	// Survey questions
	questionArray[0] = "<p>Hoe oud bent u?</p><input id='question' type='number'/>";

	questionArray[1] = "<p>Ongeveer hoe veel uur per dag gebruikt u het internet gewoonlijk?</p><input id='question' type='number'/>";

	questionArray[2] = "<p>Ongeveer hoe veel uur per dag gebruikt u instant messaging apps (zoals WhatsApp) gewoonlijk?</p><input id='question' type='number'/>";

	questionArray[3] = "<p>Bij het maken van de keuze om op een bericht te klikken of niet, wat is volgens u de belangrijkste factor?</p><input id='question' type='text'/>";

	questionArray[4] = "<p>Bent u wel eens het slachtoffer geweest van een phishing aanval?</p><input id='question' type='text'/>";

	questionArray[5] = "<p>Op een schaal van 1 tot en met 5, waarbij 1 'heel slecht' en 5 'heel goed' is, hoe goed schat u te zijn in het herkennen van phishing berichten?</p><input id='question' type='number'/>";
	
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
		
		// Unique ID
		var id = Math.random().toString(36).substr(2, 5);
		
		Email.send({
			Host: "smtp.gmail.com",
			Username: '',
			Password: "",
			To: '',
			From: '',
			Subject: "[THESIS] " + id,
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
		if(questionsDone == totalQuestions - 1)
			button.innerText = "Ga door";
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
		if(messagesDone == totalMessages) {
			sender.innerHTML = "Klaar!";
			message.innerHTML = "Het eerste deel is klaar. Klik op 'Ga naar vragenlijst' om verder te gaan.";
			end = true;
			button.innerText = 'Ga naar vragenlijst';
		}
	}

	// Changes color of message and cursor when hovering mouse over
	content.onmouseover = function() {
		if(!start && !end) { // only change color when messages are actually clickable
			this.style.backgroundColor = "lightgrey";
			this.style.cursor = "pointer";
		}
	}

	// Revert color and cursor on mouse out
	content.onmouseout = function() {
		this.style.backgroundColor = "white";
		this.style.cursor = "default";
	}

	// Registers click on a message and stores the name of that message in an array
	content.onclick = function () {
		if(!start && !end) {   // first, last and survey messages can't be clicked
			clickedArray[clickedArray.length] = 'm' + messageIndex.toString();
			this.style.backgroundColor = "white"; // set content background color back to white
			this.style.cursor = "default"; // reset cursor
			next_message();
		}
	}
	
	var first = true;
	
	// Button
	button.onclick = function() {
		if(start) { 							// load first message
			next_message();
			start = false;
			button.innerText = 'Negeer bericht';
		} else if(sendData) {					// send data
			if(!dataSent) {
				//send_data();
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