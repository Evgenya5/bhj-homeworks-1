let count = document.getElementById("timer");
function subtractCounter() {
  count.textContent--;
  if (count.textContent < 0) {
  	alert("Вы победили в конкурсе!");
  	count.textContent = 59;
  }
}
setInterval(subtractCounter, 1000);
