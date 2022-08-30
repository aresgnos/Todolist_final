// id로 login form 가져오기
const loginForm = document.getElementById("login-form");
// = const loginForm - document.querySelector("#login-form");


// 그 안의 input과 button 찾기
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// 상단과 같음
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// 링크 찾기
const link = document.querySelector("a");

// greeting이라는 아이디 찾기
const greeting = document.querySelector("#greeting");

// class 이름이 두 번 이상 쓰이고 있으니까 변수로 정의
// 여러개인데 오타날 경우를 위해
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 string이 포함된 변수는 대문자로 표기, string을 저장하고 싶을 때 사용
// 또한 중요한 정보를 담은게 아니라서 대문자로 표기

/*
function handleLogin() {
    // console.dir(loginInput); // loginInput 내부를 보여준다.
    // console.log(loginInput.value);  // loginInput의 value 보기
    const username = loginInput.value; // 변수로 만들어주기
    console.log(username);
    
   // 유효성 검사
    if (username === "") {
        alert("Please write your name");
    } else if(username.length > 15) { // 이름의 길이 제한 (length :길이)
        alert("Your name is too long.");
    }
}

// 로그인 버튼에 eventListener 연결
loginButton.addEventListener("click", handleLogin);
*/

// 2에서 null이면
function handleSubmit(event) {
    event.preventDefault(); 
    // = ** 어떤 event의 기본 행동이든 발생되지 않도록 막음.
    // 브라우저의 기본 동작을 막음.
    // 더이상 새로고침 되지 않음.
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // = loginForm.classList.add("hidden");
    console.log(loginForm.classList);
    // const username = loginInput.value; // input으로부터 유저 정보 받기 (아래에서 두 번 행해지고 있으므로 필요X)

    // 저장하기
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // "username" : 저장될 아이템의 이름, username : 변수명
    
    paintGreetings();
    // = paintGreetings(username);
    /* = 상단과 같음
    greeting.innerText = `Hello ${username}`;
     `` : 백틱 기호
     = greeting.innerText = "Hello " + username;
     greeting.classList.remove(HIDDEN_CLASSNAME);
     =greeting.classList.remove("hidden"); 
     */

    // console.log(username);
    //console.log(loginInput.value);
}

/*
function handleLink(event) {
    // (event) 이 자리에서
    // 일어난 event에 대한 정보를 받을 수 있는 인수의 자리를 만들어줌.

    event.preventDefault(); // 브라우저의 기본 동작을 막음, 링크로 넘어가지 않음.
    // console.dir(event);
    alert("clicked!"); // 모든 동작들을 막을 수 있음.
}
*/

// submit에 eventListener 연결
// submit은 엔터를 누르거나 버튼을 클릭할 때 발생
// loginForm.addEventListener("submit", handleSubmit);

// 같은 작업이 두 번 반복되므로 함수로 만들어준다.
function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY); // 유저 정보 찾기
    greeting.innerText = `Hello ${username}`; // h1에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 1. 자바스크립트가 local Storage를 확인한다.
const savedUsername = localStorage.getItem(USERNAME_KEY); // 유저 정보 찾기
console.log(savedUsername);
// 2. null이면, null이 아니면
if (savedUsername === null) { // local Storage에 savedUsername이 없을 때
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleSubmit);
} else {
    // show the greetings
    paintGreetings();
    // local storage에서 username을 받음.
    // = paintGreetings(savedUsername); // 유저 정보가 있다면 받아서 인자로 넣어줌.
}

// eventListener 연결
// link.addEventListener("click", handleLink);

// link.addEventListener("click", handleLink()); => X
// EventListener 안에 있는 함수는  내가 직접 실행시키지 않음.
// 여기서 handleLink();로 내가 직접 실행시키지 않음.
// 이것을 추가하면 이 함수는 한 번만 실행되고 끝남.
// EventListener을 만들고 거기에 함수를 줬다는걸 JS에서 알고 
// 누군가가 링크를 클릭할 때 함수를 실행시키게 함.
