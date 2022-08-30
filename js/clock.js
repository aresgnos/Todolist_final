// h2 태그의 id가 clock인 것을 불러오기
const clock = document.querySelector("h2#clock");

/*
function sayHello() {
    console.log("hello");
}

// Interval
// 한 함수를 호출 주기마다 실행
setInterval(sayHello, 5000);
// (내가 실행하고자 하는 function, 호출 주기ms=5초)

// Timeout
setTimeout(sayHello, 5000);
// (실행하고자 하는 functione, 호출 기다릴 시간)

*/


// 매 시간 가져오기 (시계 만들기)
// 매 초마다 새로운 Date object 만들기
function getClock() {
    // 날짜(시간) 가져오기
    const date = new Date();

    // date는 숫자로 나오므로 String으로 바꿔줌, 두자리 만들기
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// 웹사이트가 load되자마자 getClock()을 실행
// 1. getClock을 즉시 호출
getClock();

// 매 초마다 시간 가져오기 (실시간으로)
// 2. 매 초마다 getClock을 다시 실행
setInterval(getClock, 1000);