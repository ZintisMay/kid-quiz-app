export const speak = (phrase) => {
	console.log(phrase)
	if(window.activeSpeechSynthesis){
		if(Array.isArray(phrase)){
			phrase = phrase.join(" ")
		}
		//This splits camelcase into multiple words
		phrase = phrase.split(/(?=[A-Z])/);
		var msg = new SpeechSynthesisUtterance(phrase);
		window.speechSynthesis.speak(msg);
	}
}

export const silence = () => {
	window.speechSynthesis.cancel()
}

