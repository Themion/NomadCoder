// HTML 안의 여러 item들
const clock = document.querySelector("h1");
const form = document.querySelector("form")
const input = form.querySelector("input")
const helloName = document.querySelector("h4")

// localStorage에서 사용자 이름을 저장할 공간
const USERNAME = 'username'

// 페이지에 현재 시간을 초 단위로 표시
function timeHandler () {
    // 현재 시간을 가져와서
    const time = new Date()
    // 시/분/초를 두 자리 문자열로 맞춘 뒤
    const hr = (time.getHours() < 10 ? '0' : '') + time.getHours()
    const min = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
    const sec = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds()
    // 페이지에 출력
    clock.innerHTML = `${hr}:${min}:${sec}`
}

// 사용자 이름을 페이지에 표시
function showName () {
    // form을 숨긴 뒤 이름 출력 공간을 공개
    form.classList.add('hide')
    helloName.classList.remove('hide')

    // 이름 출력 공간에 이름을 출력
    helloName.innerHTML = `Hello, ${localStorage.getItem(USERNAME)}!`
}

// 사용자 이름을 입력받아 localStorage에 저장
function submitHandler (event) {
    // form의 기존 이벤트인 새로고침을 막은 뒤
    event.preventDefault()
    // localStorage에 사용자 이름을 저장
    localStorage.setItem(USERNAME, input.value)
    // 이름을 입력받았으므로 사용자 이름을 출력한다
    showName()
}

// 사용자 이름을 입력받아 페이지에 표시
function nameHandler () {
    if (localStorage.getItem(USERNAME)) { // 사용자 이름이 localStorage에 있다면
        // 사용자 이름을 출력
        showName()
    
    } else {                              // 　　　 　　　             　 없다면
        //사용자 이름을 form으로 입력받는다
        form.addEventListener("submit", submitHandler)
    }
}

// 페이지 실행 시 가장 먼저 해야 할 작업들
function init () {
    // 현재 시간과 사용자 이름을 표시
    timeHandler()
    nameHandler()
    // setInterval을 이용해 timeHandler를 1밀리초마다 실행
    setInterval(getTime, 100);
}

init();
