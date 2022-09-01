const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // document에서 찾기
// = const toDoInput = toDoForm.querySelector("input"); // toDoForm에서 찾기
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// array
// toDos가 빈 값으로 시작하기 때문에 아래에서 복원해줌.
// 업데이트가 가능하게
let toDos = [];

// toDos array 내용을 local Storage에 넣음.
function saveToDos() {
    // ** JSON.stringify(toDOs) => toDos array를 string으로 만들어줌.
    // => local Storage에 string 배열 형식으로 저장됨. 중복도 가능.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
    // console에서 localStorage.getItem("todos")를 했을 때 ["a", "b", "c"]
    
    // localStorage.setItem("todos", toDos); 
    // console에서 localStorage.getItem("todos")를 했을 때 a,b,c 
    
}

// to do를 삭제
function deleteToDo(event) {
    // console.log(event.target); 
    // event property 중 target은 어떤 버튼을 눌렀는지 알 수 있음.
    // target : 클릭된 HTML element

    console.dir(event.target.parentElement.innerText); 
    // 여기서 parentelement에서 버튼의 parent를 알 수 있음. (li)
    // parentElement : 클릭된 element의 부모
    // console.log(event.target.parentElement); => li

    // 상단을 저장
    const li = event.target.parentElement;
    // console.log(li.id); // 삭제할 아이디 확인하기
    console.log(typeof li.id) // 삭제할 아이디 타입 확인하기
    // li를 삭제
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // false를 제외
    // = 삭제하려고 클릭한 li.id와 다른 toDo.id는 남기고 싶다.
    // 여기서 toDo는 데이터베이스에 있는 요소 중 하나
    // toDo.id는 number이고 li.id는 string이기 때문에 타입을 number로 맞춰준다.
    // parseInt는 string을 number로 바꿔줌.
    // 여기서 toDos DB에서 todo를 지우고
    saveToDos();
    // 이걸 불러줘서 저장

    // li를 만들고 X 버튼을 클릭할 때 event를 얻음.
    // event는 target을 주고 그 target은 button이며 그 button은 부모를 갖고있다. 
    // => 부모는 li 따라서 li를 삭제

}

// to do를 그리는 역할
function paintToDo(newToDo) {
    // console.log("i will paint", newToDo);

    // 리스트 만들기
    const li = document.createElement("li");
    li.id = newToDo.id;
    // span 만들기
    const span  = document.createElement("span");
    span.innerText = newToDo.text; // span의 텍스트는 handleToDoSubmit에서 온 newToDo 텍스트
    // newToDoObj에서 text를 받아옴.
    // button 만들기
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo); // button이 눌러졌다는 것을 알 수 있음.
    
    // append는 맨 마지막에 놓여져야 함.
    // li 안에 span 넣기
    li.appendChild(span);
    // li 안에 button 넣기
    li.appendChild(button);
    // html에 li 추가하기
    toDoList.appendChild(li);
    // console.log(li);
}

// toDo를 저장
function handleToDoSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막음(새로고침)
    const newToDo = toDoInput.value; 
    // input의 현재 value를 새로운 변수에 복사
    // input의 value를 비우기 전의 값
    // 1. input에서 value를 얻어서
    // console.log(toDoInput.value);

    toDoInput.value = ""; // 엔터 치면 input 안을 비우기
    // console.log(newToDo, toDoInput.value);
    const newToDoObj = {
        text : newToDo, // 상단의 newTodo를 받음
        id : Date.now(), // 랜덤한 숫자 id를 만들어줌
    };
    // to do가 그려지기 전에 toDos array를 가지고 와서 newTodo를 push (무슨 말이니?)
    // array에 item 추가
    toDos.push(newToDoObj);

    // 2. paintToDo라는 새로운 function에 newToDo 값을 보낸다.
    // 화면에 to do를 그리는 function을 호출
    paintToDo(newToDoObj);
    // local Storage에 저장하는 function을 호출
    saveToDos();
}

// 이건 왜 마지막에 있을까
toDoForm.addEventListener("submit", handleToDoSubmit);

/*
// sayHello(""); sayhello를 n번 실행하는게 아님. 각각의 item에 function을 실행
function sayHello(item) {
    // 어느 아이템을 사용하고 있는지 확인
    console.log("this is the turn of", item);
} */

// todos 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // 이건 그냥 string
if(savedToDos !== null) { // null이 아니라면
    // localStorage에서 가져온 string을 사용할 수 있는 자바스크립트 오브젝트로 만들어줌
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; // 이전의 toDos 복원 근데 왜 parsedToDos인가?

    // array에 있는 각각의 item들을 화면에 출력
    parsedToDos.forEach(paintToDo);
    // paintToDo는 텍스트를 받는데 자바스크립트는 그 텍스트를 paintToDo에게 전달해줌.
    // array에 있는 각각의 item을 paintToDo에 넣어줌.
    // forEach는 paintToDo를 parsedToDos 배열의 요소마다 실행
    


    // console.log(parsedToDos); // array, 사용할 수 있는 자바스크립트 오브젝트
    
    // parsedToDos.forEach(sayHello); 
    // forEach는 array안의 각각의 item에 대해 function을 실행
    // 여기서는 각각의 item에 대해 sayHello를 실행

    // 상단의 function의 간단한 코드 = 화살표 함수
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    

}