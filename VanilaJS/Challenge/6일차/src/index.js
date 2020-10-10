// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");
const COUNTRY = "country";

// localStorage에서 get하는 코드가 너무 길어 만든 함수
function getItem() {
  return localStorage.getItem(COUNTRY);
}

// select에서 선택한 값이 바뀔 때 호출되는 handler
function changeHandler(event) {
  //선택된 항목의 value를 localStorage에 저장
  localStorage.setItem(COUNTRY, event.target.value);
}

//localStorage에서 값을 가져온 뒤
//해당 값이 유효한 값이라면 그 값을 select에서 선택한다
function selecteItem() {
  const item = select.querySelector(`option[value=${getItem()}]`);
  if (item) item.selected = true;
}

function init() {
  //select에서 값이 바뀔 때의 handler를 설정하고
  select.addEventListener("change", changeHandler);
  //select의 초기값을 바꾼다
  selecteItem();
}

init();
