
pan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const response = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await response.json();
    console.log(images);
};

getImage();