let imageArray = [];
const image = document.getElementById("image-frame");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
let currentIndex = 0;
let intervalId;

const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/200";
const image3 = "https://picsum.photos/200/250";
imageArray.push(image1);
imageArray.push(image2);
imageArray.push(image3);
startBtn.addEventListener("click", () => {
  intervalId = setInterval(startSlideshow, 2000);
});

function startSlideshow() {
  if (currentIndex >= imageArray.length) {
    currentIndex = 0;
  }

  const currentImage = imageArray[currentIndex];
  console.log(currentImage);
  image.innerHTML = `<img src="${currentImage}" alt="slide-${
    currentIndex + 1
  }">`;
  currentIndex++;
}

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  console.log("clicked");
});
