const C1 = {
	name:"C1",
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

const A1 = {
	name:"A1",
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

const B2 = {
	name:"B2",
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
	"BigDog": {
		name:"BigDog",
		teacher:"Ms. Smith",
		students:[],
		quizzes:{
			A1
		}
	},
	"SmallSheep": {
		name:"SmallSheep",
		teacher:"Ms. Frizzle",
		students:[],
		quizzes:{
			A1,
			B2
		}
	},
	"HappyDuck": {
		name:"HappyDuck",
		teacher:"Ms. Frizzle",
		students:[],
		quizzes:{
			A1,
			B2
		}
	},
	"FastDog": {
		name:"FastDog",
		teacher:"Ms. Frizzle",
		students:[],
		quizzes:{
			A1,
			B2
		}
	},
	"MadWhale": {
		name:"MadWhale",
		teacher:"Ms. Frizzle",
		students:[],
		quizzes:{
			A1,
			B2,
			C1
		}
	}
}
export default houses;

