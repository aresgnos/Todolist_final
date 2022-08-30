// array
const quotes = [
    {
        quote : "꿈은 없고요, 그냥 놀고싶습니다.",
        author : "박명수",
    },
    {
        quote : "늦었다고 생각할 때가 진짜 너무 늦었다.",
        author : "박명수",
    },
    {
        quote : "뭘 무서워 그냥 하는거지",
        author : "박명수",
    },
    {
        quote : "잠을 자도 피로가 안 풀리냐",
        author : "박명수",
    },
    {
        quote : "내 명분, 내 이익이나 찾으면 될 것 같아요.",
        author : "박명수",
    },
    {
        quote : "열심히는 하지만 노력은 안한다.",
        author : "박명수",
    },
    {
        quote : "조금만 더 돈 벌고 뜬다 이 바닥",
        author : "박명수",
    },
    {
        quote : "사람을 피곤하게 만들어 그렇지 않아도 피곤한데",
        author : "박명수",
    },
    {
        quote : "엉망으로 살아야 해! 인생은 한 번이야.",
        author : "박명수",
    },
    {
        quote : "사람이 배고플 때 뭐가 나온다.",
        author : "박명수",
    },
];

// 첫번째 span 불러오기
const quote = document.querySelector("#quote span:first-child");
// 두번째 span 불러오기
const author = document.querySelector("#quote span:last-child");

// 배열
// console.log(quotes[0]);

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// 배열의 길이를 일일히 셀 수 없으니 quotes.length
// console.log(quotes[Math.floor(Math.random() * 10)]);

// 명언 랜덤으로 골라내기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// floor() : 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;