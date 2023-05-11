const images = document.querySelectorAll('.img');
const imageSources = ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg', 'img/image4.jpg', 'img/image5.jpg', 'img/image6.jpg', 'img/image7.jpg', 'img/image8.jpg', 'img/image9.jpg', 'img/image10.jpg', 'img/image11.jpg', 'img/image12.jpg'];
const previousImages = [];
let currentImages = [];

let imageIndex = -1;
function getRandomImage() {
  imageIndex++;
  if (imageIndex >= imageSources.length) {
    imageIndex = 0;
  }
  let randomImage = imageSources[imageIndex];
  if (previousImages.includes(randomImage) || currentImages.includes(randomImage)) {
    return getRandomImage();
  }
  return randomImage;
}

function showImages() {
  currentImages = [];
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    let randomImage = getRandomImage();
    currentImages.push(randomImage);
    previousImages.push(randomImage);
    if (previousImages.length > 9) {
      previousImages.shift();
    }
    image.style.opacity = 0;
    setTimeout(() => {
      image.src = randomImage;
      image.style.opacity = 1;
    }, 0);
    setTimeout(() => {
      image.style.opacity = 0;
    }, Math.floor(Math.random() * 8000) + 2000);
  }
}

showImages();
setInterval(() => {
  showImages();
}, 9000);