export const speak = (word) => {
	if(window.activeSpeechSynthesis){
		word = word.split(/(?=[A-Z])/);
		var msg = new SpeechSynthesisUtterance(word);
		window.speechSynthesis.speak(msg);
	}
}

export const silence = () => {
	window.speechSynthesis.cancel()
}

