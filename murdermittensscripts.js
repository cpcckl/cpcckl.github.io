/* Project_Part2_WEB110-N801_Lor, Kathy */

/* Javascript: Send an alert */
alert("Please note this website is no longer being maintained.");

/* JavaScript: Run at Specific Interval */
const today = new Date();
const dateString = today.toLocaleDateString();
document.getElementById("current").textContent = dateString;
setInterval(updateTime, 1000);
