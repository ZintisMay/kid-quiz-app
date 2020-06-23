export const speak = (word) => {
	if(window.activeSpeechSynthesis){
		var msg = new SpeechSynthesisUtterance(word);
		window.speechSynthesis.speak(msg);
	}
}

export const silence = () => {
	window.speechSynthesis.cancel()
}

