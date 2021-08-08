const imgs = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

const todayImage = imgs[Math.floor(Math.random() * imgs.length)];

console.log(todayImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${todayImage}`;
console.dir(bgImage);

document.body.appendChild(bgImage);
