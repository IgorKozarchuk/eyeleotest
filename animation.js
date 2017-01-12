// Animation

var selector = ".steps img";
var elements = document.querySelectorAll(selector);

function clearSteps() {
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}
}

var count = 0;

function showSteps() {
	//elements[count++].style.display = "inline"; // pure JS
	$(elements[count++]).fadeIn(); // jQuery effect
	if (count === elements.length) {
		count = 0;
		clearInterval(timer); // loop repeats once

		//setTimeout(clearSteps, 300); // infinite loop
		/* Or add a dummy last image in HTML to make equal intervals
		between clearSteps() and a new loop and uncoment the following line */
		//clearSteps();
	}
}

clearSteps();
var timer = setInterval(showSteps, 500);