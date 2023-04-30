

// 로컬 스토리지를 사용한 투두리스트
// 랜덤 배경 이미지

// 여러분의 CSS 실력을 뽐내주세요💖





const images = ["1.jpg","2.jpg","3.jpg"];


const chosenImage = images[Math.floor( Math.random() * images.length )];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;


document.body.appendChild(bgImage) 


