/* Project_Part2_WEB110-N801_Lor, Kathy */

/* Javascript: Send an alert */
alert("Please note this website is nearing end of life.");

/* Javascript: Countdown Function */
var countDownDate = new Date ("May 30, 2026 23:59:59").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementbyID("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "Website shut down.";
	}
}, 1000);

/* JavaScript: Run at Specific Interval */
const today = new Date();
const dateString = today.toLocaleDateString();
document.getElementById("current").textContent = dateString;
setInterval(updateTime, 1000);
