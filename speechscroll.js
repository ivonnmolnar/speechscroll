var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList

var updown = [ 'up' , 'down'];
var grammar = '#JSGF V1.0; grammar updown; public <updown> = ' + updown.join(' | ') + ' ;'

for (var i = 0; i < 1000; i++) {
    var div = document.getElementById("uwu");
    var content = document.createTextNode("hehehehehe");
    var breakme = document.createElement("br");
    div.appendChild(content);
    div.appendChild(breakme);
}

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
recognition.continuous = true;
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.start();
recognition.onresult = function(event) {
    var result = event.results[event.results.length-1][event.results.item.length-1].transcript.trim();
    if(result == "down"){
        console.log("down");
        window.scrollBy(0, 200, 'smooth');
    }

    else if(result == "up"){
        console.log("up");
        window.scrollBy(0, -200, 'smooth');

    }
}
recognition.onspeech = function(event){
    console.log("hey");
}
