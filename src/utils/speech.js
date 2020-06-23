export const speak = (word) => {
	var msg = new SpeechSynthesisUtterance(word);
	window.speechSynthesis.speak(msg);
}

export const silence = () => {
	window.speechSynthesis.cancel()
}

