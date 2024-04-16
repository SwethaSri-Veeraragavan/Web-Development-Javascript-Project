let count = 0;
let update = document.getElementById("updateNumber");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const resetbtn = document.getElementById("reset");
update.textContent = count;

increment.addEventListener("click", () => {
  if (count < 25) {
    count++;
    update.textContent = count;
  }
});

decrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    update.textContent = count;
  }
});

resetbtn.addEventListener("click", () => {
  count = 0;
  update.textContent = count;
});
