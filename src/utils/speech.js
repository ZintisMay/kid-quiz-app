export const speak = (phrase) => {
	if(!phrase || phrase.length == 0){
		console.log("SPEAK EMPTY PHRASE")
		return null
	}
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

