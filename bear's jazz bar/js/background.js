const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

function changeBg() {
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.backgroundImage = `url(img/${chosenImage})`;
bgImage.style.backgroundSize = "cover";
bgImage.style.backgroundPosition = "center";
document.body.appendChild(bgImage);
}
changeBg();