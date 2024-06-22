
function getGreeting() {
  var now = new Date();
  var time = now.getHours();
  var greeting;

  if(time < 12) {
    greeting = "Good Morning!";
  }
  else if (time < 18) {
    greeting = "Good Afternoon!";
  }
  else {
      greeting = "Good Evening!";
  }

  document.getElementById('greeting').innerText = greeting;
}
window.onload = getGreeting;
