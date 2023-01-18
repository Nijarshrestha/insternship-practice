var mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "main-container");

document.body.appendChild(mainContainer);

var headerContainer = document.createElement("div");
headerContainer.style.textAlign = "center";

mainContainer.appendChild(headerContainer);

var headerTitle = document.createElement("h2");
headerTitle.innerHTML = "Javascript Assignment 2";

headerContainer.appendChild(headerTitle);

var bodyContainer = document.createElement("div");
bodyContainer.style.padding = "40px";
bodyContainer.style.margin = "0px 96px";
bodyContainer.style.textAlign = "center";

mainContainer.appendChild(bodyContainer);

var bodyTitleContainer = document.createElement("div");
bodyTitleContainer.style.textAlign = "center";

bodyContainer.appendChild(bodyTitleContainer);

var bodyTitle = document.createElement("h3");
bodyTitle.innerHTML = "Clock & Stopwatch";
bodyTitle.style.margin = "0px";

bodyTitleContainer.appendChild(bodyTitle);

var paragraphContainer = document.createElement("div");
paragraphContainer.style.display = "inline-block";
paragraphContainer.style.margin = "32px 0px";

bodyContainer.appendChild(paragraphContainer);

var clockBtn = document.createElement("button");
clockBtn.innerText = "Clock";
clockBtn.style.margin = "0px 8px";

paragraphContainer.appendChild(clockBtn);

var stopwatchBtn = document.createElement("button");
stopwatchBtn.innerText = "Stopwatch";
stopwatchBtn.style.margin = "0px 8px";

paragraphContainer.appendChild(stopwatchBtn);

var clock = document.createElement("div");
clock.innerText = "Time";
clock.style.display = "block";
bodyContainer.appendChild(clock);

var stopwatch = document.createElement("div");
stopwatch.innerText = "Stopwatch";
stopwatch.style.display = "none";
bodyContainer.appendChild(stopwatch);

clockBtn.addEventListener("click", () => {
  clock.style.display = "block";
  stopwatch.style.display = "none";
  setInterval(clocker, 1000);
});

stopwatchBtn.addEventListener("click", () => {
  clock.style.display = "none";
  stopwatch.style.display = "block";
  clearInterval(timer);
});

var time = document.createElement("div");
time.setAttribute("id", "clock");
time.style.fontFamily = "Arial";
time.style.fontSize = "24px";
time.style.fontWeight = "600";
time.style.padding = "16px 0px";

clock.appendChild(time);

var timer = setInterval(clocker, 1000);

function clocker() {
  var date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}

// hh:mm:ss

var hh = 00;
var mm = 00;
var ss = 00;
var ms = 000;

var stopwatcher = document.createElement("div");
stopwatcher.setAttribute("id", "stopwatch");
stopwatcher.innerText = hh + ":" + mm + ":" + ss + ":" + ms;
stopwatcher.style.fontFamily = "Arial";
stopwatcher.style.fontSize = "24px";
stopwatcher.style.fontWeight = "600";
stopwatcher.style.padding = "16px 0px";
stopwatch.appendChild(stopwatcher);

var startBtn = document.createElement("button");
startBtn.innerText = "Start";
startBtn.style.display = "inline-block";
startBtn.style.margin = "0px 8px";
stopwatch.appendChild(startBtn);

var stopBtn = document.createElement("button");
stopBtn.innerText = "Stop";
stopBtn.style.display = "inline-block";
stopBtn.style.margin = "0px 8px";
stopwatch.appendChild(stopBtn);

var resetBtn = document.createElement("button");
resetBtn.innerText = "Reset";
resetBtn.style.display = "inline-block";
resetBtn.style.margin = "0px 8px";
stopwatch.appendChild(resetBtn);

var interval;

startBtn.addEventListener("click", () => {
  interval = setInterval(startTimer, 10);
});

function startTimer() {
  ms += 10;
  if (ms === 1000) {
    ms = 000;
    ss++;
  }
  if (ss === 60) {
    ss = 00;
    mm++;
  }
  if (mm === 60) {
    mm = 00;
    hh++;
  }

  stopwatcher.innerHTML = hh + ":" + mm + ":" + ss + ":" + ms;
}

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  hh = 00;
  mm = 00;
  ss = 00;
  ms = 000;
  stopwatcher.innerHTML = hh + ":" + mm + ":" + ss + ":" + ms;
  clearInterval(interval);
});
