const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); // document에서 찾기
// = const toDoInput = toDoForm.querySelector("input"); // toDoForm에서 찾기
const toDoList = document.getElementById("todo-list");

// array
const toDos = [];

// toDos array 내용을 local Storage에 넣음.
function saveToDos() {
    // ** JSON.stringify(toDOs) => toDos array를 string으로 만들어줌.
    // => local Storage에 string 배열 형식으로 저장됨. 중복도 가능.
    localStorage.setItem("todos", JSON.stringify(toDos));
    // localStorage.setItem("todos", toDos);

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
    // li를 삭제
    li.remove();

    // li를 만들고 X 버튼을 클릭할 때 event를 얻음.
    // event는 target을 주고 그 target은 button이며 그 button은 부모를 갖고있다. 
    // => 부모는 li 따라서 li를 삭제

}

// to do를 그리는 역할
function paintToDo(newToDo) {
    // console.log("i will paint", newToDo);

    // 리스트 만들기
    const li = document.createElement("li");
    // span 만들기
    const span  = document.createElement("span");
    span.innerText = newToDo; // span의 텍스트는 handleToDoSubmit에서 온 newToDo 텍스트
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

function handleToDoSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막음(새로고침)
    const newToDo = toDoInput.value; 
    // input의 현재 value를 새로운 변수에 복사
    // input의 value를 비우기 전의 값
    // 1. input에서 value를 얻어서
    // console.log(toDoInput.value);

    toDoInput.value = ""; // 엔터 치면 input 안을 비우기
    // console.log(newToDo, toDoInput.value);

    // to do가 그려지기 전에 toDos array를 가지고 와서 newTodo를 push (무슨 말이니?)
    toDos.push(newToDo);
    // 2. paintToDo라는 새로운 function에 newToDo 값을 보낸다.
    // 화면에 to do를 그리는 function을 호출
    paintToDo(newToDo);
    // local Storage에 저장하는 function을 호출
    saveToDos();
    
}

// 이건 왜 마지막에 있을까
toDoForm.addEventListener("submit", handleToDoSubmit);