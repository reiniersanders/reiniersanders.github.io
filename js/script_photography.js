const images = document.querySelectorAll('.img');
const previousImages = [];
let currentImages = [];

function getRandomImage(images) {
  let randomIndex = Math.floor(Math.random() * images.length);
  let randomImage = images[randomIndex];
  if (previousImages.includes(randomImage) || currentImages.includes(randomImage)) {
    return getRandomImage(images);
  }
  return randomImage;
}

function showImages(images) {
  currentImages = [];
  for (let i = 0; i < images.length; i++) {
    let image = images[i];
    let randomImage = getRandomImage(images);
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

function loadImages() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'photography/', true);
  xhr.responseType = 'document';
  xhr.onload = function() {
    if (xhr.status === 200) {
      const files = xhr.response.getElementsByTagName('a');
      const images = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i].href;
        if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif')) {
          images.push('photography/' + file);
        }
      }
      showImages(images);
      setInterval(() => {
        showImages(images);
      }, 9000);
    }
  };
  xhr.send();
}

loadImages();