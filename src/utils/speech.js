export const speak = (phrase) => {
	if(window.activeSpeechSynthesis){
		//This splits camelcase into multiple words
		phrase = phrase.split(/(?=[A-Z])/);
		var msg = new SpeechSynthesisUtterance(phrase);
		window.speechSynthesis.speak(msg);
	}
}

export const silence = () => {
	window.speechSynthesis.cancel()
}

