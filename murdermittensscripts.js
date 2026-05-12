/* JavaScript: Run at Specific Interval */
const today = new Date();
const dateString = today.toLocaleDateString();
document.getElementById("current").textContent = dateString;
setInterval(updateTime, 1000);