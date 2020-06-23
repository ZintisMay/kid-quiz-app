const dummyQuiz = {
	questions:[
		{
			prompt:["What is your favorite color?"],
			answers:["Red","Blue","Green","Black"],
			correctAnswerIndex:3,
			answersByUser:{}
		},
		{
			prompt:["What is your favorite animal?"],
			answers:["Duck","Swan","Mallard","Goose"],
			correctAnswerIndex:3,
			answersByUser:{}
		},
		{
			prompt:["How Tall is Mount Everest?"],
			answers:["4000 Feet","3000 Feet","2000 Feet","5000 Feet"],
			correctAnswerIndex:0,
			answersByUser:{}
		},
		{
			prompt:["What is your favorite food?"],
			answers:["French Fries","Disco Fries","Poutine","Steak Fries"],
			correctAnswerIndex:2,
			answersByUser:{}
		},
		{
			prompt:["What is longest?"],
			answers:["A Year","A Month","A Day","An Hour"],
			correctAnswerIndex:0,
			answersByUser:{}
		}
	]
}

const houses = {
	house: {
		teacher:"",
		students:[],
		quizzes:{
			dummyQuiz
		}
	}
}
export default houses;

