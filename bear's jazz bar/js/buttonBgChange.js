
function changeBg() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}`;
    bgImage.style.backgroundImage = `url(img/${chosenImage})`;
    bgImage.style.backgroundSize = "cover";
    bgImage.style.backgroundPosition = "center";
    document.body.appendChild(bgImage);
    }

const button = document.querySelector("#bgButton");
if(button){
button.addEventListener("click", changeBg);}