// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h = document.querySelector("h2");

let i = 0,
  isResize = false,
  item = h;

const superEventHandler = {
  //마우스를 item 위에 올렸을 때
  mouseover: function () {
    //resize 이벤트가 아님
    isResize = false;
    //h의 색을 바꿔줌
    h.style.color = colors[i++];
    i %= colors.length;
    //h의 텍스트를 변경함
    h.innerHTML = "The mouse is here!";
  },
  //마우스를 item 위에서 제거했을 때
  mouseout: function () {
    //resize 이벤트가 아님
    isResize = false;
    //h의 색을 바꿔줌
    h.style.color = colors[i++];
    i %= colors.length;
    //h의 텍스트를 변경함
    h.innerHTML = "The mouse is gone!";
  },
  resize: function () {
    //resize 이벤트가 호출되지 않았다면
    if (isResize === false) {
      //resize 이벤트임
      isResize = true;
      //h의 색을 바꿔줌
      h.style.color = colors[i++];
      i %= colors.length;
      //h의 텍스트를 변경함
      h.innerHTML = "You juse resized!";
    }
  },
  contextmenu: function () {
    //resize 이벤트가 아님
    isResize = false;
    //h의 색을 바꿔줌
    h.style.color = colors[i++];
    i %= colors.length;
    //h의 텍스트를 변경함
    h.innerHTML = "That was a right click!";
  }
};

for (let key in superEventHandler) {
  //key가 resize가 되기 전, 즉 mouseover와 mouseout일 때는
  //h에 이벤트를 설정하고, 그렇지 않을 때는 window에 이벤트를 설정
  if (key === "resize") item = window;
  item.addEventListener(key, superEventHandler[key]);
}
