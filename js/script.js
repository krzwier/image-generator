
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
const button = document.querySelector("button");

const getImage = async function () {
    const response = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await response.json();
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    imageAddress = randomImage.download_url;
    console.log(imageAddress);
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getImage();
});
