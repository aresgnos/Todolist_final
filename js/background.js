// array
const images = ["1.jpg", "2.jpg", "3.jpg"];

// random으로 한가지 element 골라내기
chosenImage = images[Math.floor(Math.random() * images.length)];
// 랜덤한 숫자를 가져오려면 그 숫자를 곱한다. (배열이 길이를 곱함)
console.log(chosenImage);
const bgImage = document.createElement("img");

// 아래 세 줄은 html에서의 <img src = ""/>와 같음.
bgImage.src = `img/${chosenImage}`;
// src = source
// 여기서 img는 폴더 img를 말함.

console.log(bgImage);

// body에 html을 추가
document.body.appendChild(bgImage);
// prepend를 사용하면 이미지가 가장 상단으로 감.
// append : 가장 뒤에, prepend : 가장 위에
