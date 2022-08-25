const content = 'javascript Typing 가지고 놀기!'
const txt = document.querySelector('.txt');
let n = 0;

const typing = function() {
    txt.innerHTML += content[n++]; //.txt엘리먼트에 위에 content의 변수에 저장한 문자를 순차적으로 뿌리겠다.
    if(n > content.length) { // content의의 변수 길이가 넘으면 제안을 설정한다.
        txt.innerHTML = ''; // .txt엘리먼트에 위에 빈문자를 뿌리겠다.
        n = 0;              // n번째를 0으로 초기화 하겠다.
    }
};

setInterval(typing, 200);