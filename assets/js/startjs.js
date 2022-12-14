const StartWindow = document.querySelector("#StartWindow");
const start1 = document.querySelector(".start1");
const start3 = document.querySelector(".start3");

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
    }, 5500);
    setTimeout(() => {
        startfunc3();
    }, 9000);
    setTimeout(() => {
        startfunc3_2();
    }, 15000);
    setTimeout(() => {
        startfunc3_3();
    }, 15000 + 1075);
    setTimeout(() => {
        startfunc3_4();
    }, 18075 + 3000);
    setTimeout(() => {
        startfuncMain();
    }, 22000);
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
    let splitText = `${nowDay}. ${nowMonth} ${nowYear} ...접근 요청`;
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
    }, StartWindow.querySelectorAll(".start1 > span").length * 225);
}

function startfunc2() {
    StartWindow.querySelector(".start2").classList.add("active");
    setTimeout(() => {
        StartWindow.querySelector(".start2").style.display = "none";
    }, 2500);
}
function startfunc3() {
    start3.classList.add("active"); // 디플블락만
    setTimeout(() => {
        let introAudio = new Audio();
        introAudio.src = "https://parkhyeonshin.github.io/portfolio/assets/audio/Laser1.mp3";
        introAudio.volume = 0.8;
        introAudio.play();
    }, 4200);
}

function startfunc3_2() {
    let splitText = `WEB DEV. PORTFOLIO`;
    let splitWrap = splitText.split("").join('</span><span aria-hidden = "true">');
    splitWrap = "<span aria-hidden = 'true'>" + splitWrap + "</span><div class = 'blinkText'></div>";
    start3.querySelector(".start3__name").innerHTML = splitWrap;
    document.querySelectorAll(".start3 > .start3__name > span").forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add("active");
        }, idx * 80);
    });
}
function startfunc3_3() {
    let splitText = `Made By. Hyeon Shin`;
    let splitWrap = splitText.split("").join('</span><span aria-hidden = "true">');
    splitWrap = "<span aria-hidden = 'true'>" + splitWrap + "</span><div class = 'blinkText'></div>";
    start3.querySelector(".start3__desc").innerHTML = splitWrap;
    document.querySelectorAll(".start3 > .start3__desc > span").forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add("active");
        }, idx * 80);
    });
    console.log(StartWindow.querySelectorAll(".start3 > .start3__desc > span").length * 225);
}
function startfunc3_4() {
    start3.classList.add("passive");
    // setTimeout(() => {
    //     let introAudio = new Audio();
    //     introAudio.src = "https://parkhyeonshin.github.io/portfolio/assets/audio/Laser14.mp3";
    //     introAudio.volume = 0.2;
    //     introAudio.play();
    // }, 3200);
    setTimeout(() => {
        StartWindow.style.display = "none";
        document.querySelector(".pswp__preloader__icn").style.animation = "none";
    }, 7500);
}

function startfuncMain() {}
