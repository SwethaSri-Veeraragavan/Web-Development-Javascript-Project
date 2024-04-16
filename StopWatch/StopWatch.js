const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const stop = document.getElementById("stop-btn");
const start = document.getElementById("start-btn");
const reset = document.getElementById("reset-btn");

let hr = 0;
let min = 0;
let sec = 0;
let timer;
start.addEventListener("click", () => {
  timer = setInterval(stopWatch, 1000); //setTimeOut - single execution.
});

function stopWatch() {
  sec++;
  secs.textContent = sec < 10 ? "0" + sec : sec;

  if (sec == 60) {
    sec = 0;
    min++;
    // secs.textContent = "00";
    mins.textContent = min < 10 ? "0" + min : min;
  }
  if (min == 60) {
    min = 0;
    hr++;
    // mins.textContent = "00";
    hrs.textContent = hr < 10 ? "0" + hr : hr;
  }
}

stop.addEventListener("click", () => {
  clearInterval(timer);
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  hr = min = sec = 0;
  hrs.textContent = "00";
  mins.textContent = "00";
  secs.textContent = "00";
});
