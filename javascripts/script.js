var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var number4 = document.getElementById("number4");
var number5 = document.getElementById("number5");
var number6 = document.getElementById("number6");
var number7 = document.getElementById("number7");
var number8 = document.getElementById("number8");
var number9 = document.getElementById("number9");
var number0 = document.getElementById("zero");

var reset = document.getElementById("reset");
var division = document.getElementById("division");
var multiply = document.getElementById("multiply");
var sum = document.getElementById("sum");
var subtract = document.getElementById("subtract");
var showResult = document.getElementById("show-result");
var comma = document.getElementById("comma");

function putToText(text) {
	var expression = document.getElementById("expression");
	expression.innerHTML += text;
}

function cleanExpression() {
	var expression = document.getElementById("expression");
	var result = document.getElementById("result");
	expression.innerHTML = "";
	result.innerHTML = "";
}

function evalExpression() {
	var expression = document.getElementById("expression");
	var expressionText = expression.innerHTML;
	var expressionArray = expressionText.split("");

	for (var i = 0; i < expressionArray.length; i++) {
		if (expressionArray[i] === "x") {
			expressionArray[i] = "*";
		} else if (expressionArray[i] === ",") {
			expressionArray[i] = ".";
		}
	}

	expressionText = expressionArray.join("");
	var total = eval(expressionText);
	return total;
}

number1.addEventListener("click", function() {
	putToText("1");
});

number2.addEventListener("click", function() {
	putToText("2");
});

number3.addEventListener("click", function() {
	putToText("3");
});

number4.addEventListener("click", function() {
	putToText("4");
});

number5.addEventListener("click", function() {
	putToText("5");
});

number6.addEventListener("click", function() {
	putToText("6");
});

number7.addEventListener("click", function() {
	putToText("7");
});

number8.addEventListener("click", function() {
	putToText("8");
});

number9.addEventListener("click", function() {
	putToText("9");
});

number0.addEventListener("click", function() {
	putToText("0");
});

division.addEventListener("click", function() {
	putToText("/");
});

multiply.addEventListener("click", function() {
	putToText("x");
});

sum.addEventListener("click", function() {
	putToText("+");
});

subtract.addEventListener("click", function() {
	putToText("-");
});

comma.addEventListener("click", function() {
	putToText(",");
});

reset.addEventListener("click", function() {
	cleanExpression();
});

showResult.addEventListener("click", function() {
	var result = document.getElementById("result");
	expressionTotal = evalExpression();
	result.innerHTML = expressionTotal;
})