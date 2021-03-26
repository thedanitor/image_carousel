const right = document.getElementById("right");
const left = document.getElementById("left");
const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

// start with index of 0
let idx = 0;
// call run function every 2s
let interval = setInterval(run, 2000);
// increase index by 1, call changeImage
function run() {
  idx++;
  changeImage();
}

function changeImage() {
  // if index is greater than 3, set index back to 0
  if (idx > img.length - 1) {
    idx = 0;
    // if index is less than 0, set to 3
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  // change translateX property on imgs to 500px * -index
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}
// clear current interval, then set interval again
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
// listen for click on right button, increase index by 1, call change image and reset interval
right.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});
// listen for click on right button, decrease index by 1, call change image and reset interval
left.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
