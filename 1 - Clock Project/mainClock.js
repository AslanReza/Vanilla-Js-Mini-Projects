function clockRender() {
  var date = new Date();
  var Hour = date.getHours();
  var Minute = date.getMinutes();
  var Second = date.getSeconds();
  var timeSet = "AM";
  if (Hour > 12) {
    Hour -= 12;
    timeSet = "PM";
  }
  if (Hour < 10) {
    Hour = "0" + Hour;
  }
  if (Minute < 10) {
    Minute = "0" + Minute;
  }
  if (Second < 10) {
    Second = "0" + Second;
  }
  var Clock = Hour + ":" + Minute + ":" + Second + " " + timeSet;
  document.getElementById("clockDisplay").textContent = Clock;
  setTimeout(clockRender, 1000);
}
clockRender();
