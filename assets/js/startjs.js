const StartWindow = document.querySelector("#StartWindow");
const start1 = document.querySelector(".start1");

window.onload = function () {
    // var AudioContext;
    // var audioContext;
    // navigator.mediaDevices
    //     .getUserMedia({ audio: true })
    //     .then(() => {
    //         AudioContext = window.AudioContext || window.webkitAudioContext;
    //         audioContext = new AudioContext();
    //     })
    //     .catch((e) => {
    //         console.error(`Audio permissions denied: ${e}`);
    //     });
    // 마이크허용여부 묻기

    setTimeout(() => {
        startfunc1();
    }, 1000);
    setTimeout(() => {
        startfunc2();
    }, 5000);
};

function startfunc1() {
    const nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    let nowMonth = nowDate.getMonth() + 1;
    let nowDay = nowDate.getDate();
    switch (nowMonth) {
        case 1:
            nowMonth = "Jan.";
            break;
        case 2:
            nowMonth = "Feb.";
            break;
        case 3:
            nowMonth = "Mar.";
            break;
        case 4:
            nowMonth = "Apr.";
            break;
        case 5:
            nowMonth = "May.";
            break;
        case 6:
            nowMonth = "Jun.";
            break;
        case 7:
            nowMonth = "Jul.";
            break;
        case 8:
            nowMonth = "Aug.";
            break;
        case 9:
            nowMonth = "Sep.";
            break;
        case 10:
            nowMonth = "Oct.";
            break;
        case 11:
            nowMonth = "Nov.";
            break;
        case 12:
            nowMonth = "Dec.";
            break;
    }
    let splitText = `${nowDay}. ${nowMonth} ${nowYear} ...사이트 접근 감지`;
    let splitWrap = splitText.split("").join('</span><span aria-hidden = "true">');
    splitWrap = "<span aria-hidden = 'true'>" + splitWrap + "</span><div class = 'blinkText'></div>";
    start1.innerHTML = splitWrap;
    document.querySelectorAll(".start1 > span").forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add("active");
            StartWindow.querySelector(" .startkeyboard").play();
        }, idx * 80);
    });
    setTimeout(() => {
        StartWindow.querySelector(" .startkeyboard").pause();
        StartWindow.querySelector(" .startkeyboard").currentTime = 0;
    }, StartWindow.querySelectorAll(".start1 > span").length * 85);
    setTimeout(() => {
        StartWindow.querySelector(".start1").classList.add("forwards");
    }, StartWindow.querySelectorAll(".start1 > span").length * 165);
    setTimeout(() => {
        StartWindow.querySelector(".start1").style.display = "none";
    }, StartWindow.querySelectorAll(".start1 > span").length * 185);
    console.log(StartWindow.querySelectorAll(".start1 > span").length * 185);
}

function startfunc2() {
    
}
