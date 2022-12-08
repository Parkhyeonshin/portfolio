// 이퀄변수
let bars = document.querySelectorAll(".bars");
let barHeight = 1.5;
let multiplier = 28;
let musicvolume = 10;

// 시간 출력
function printTime() {
    const clock = document.querySelector(".currentTime > p");
    const now = new Date();
    let nowHour = now.getHours();
    let nowMin = now.getMinutes();
    let nowSec = now.getSeconds();

    if (nowHour < 10) {
        nowHour = `0${nowHour}`;
    }
    if (nowSec < 10) nowSec = `0${nowSec}`;
    if (nowMin < 10) nowMin = `0${nowMin}`;
    const nowTime = ` ${nowHour}:${nowMin}:${nowSec}`;
    clock.innerHTML = nowTime;
    setTimeout(() => {
        printTime();
    }, 1000);
}

// 그래프바 카운트
function countUp(numberElement) {
    let currentCount = 0;
    const total = parseInt(numberElement.textContent);
    const increment = Math.ceil(total / 100);

    function step() {
        currentCount += increment;
        if (currentCount > total) currentCount = total;
        numberElement.textContent = currentCount.toLocaleString();
        currentCount !== total && requestAnimationFrame(step);
    }
    step();
}
function graphCountfunc() {
    document.querySelectorAll(".graphCount").forEach((elem, idx) =>
        setTimeout(() => {
            countUp(elem);
        }, idx * 1000 + 200)
    );
}

// 뮤직리스트클릭
const musicAudio = document.querySelector("#audio");
document.querySelectorAll(".music__list > ul >li").forEach((e, idx) => {
    e.addEventListener("click", () => {
        console.log(idx);
        document.querySelectorAll(".music__list > ul > li").forEach((ei) => {
            ei.classList.remove("active");
        });
        e.classList.add("active");
        switch (idx) {
            case 0:
                document.querySelector(".music__circle").style.transform = "rotate(-390deg)";
                AudioStop();
                AudioPlay(idx);
                break;
            case 1:
                document.querySelector(".music__circle").style.transform = "rotate(-360deg)";
                AudioStop();
                AudioPlay(idx);
                break;
            case 2:
                document.querySelector(".music__circle").style.transform = "rotate(-330deg)";
                AudioStop();
                AudioPlay(idx);
                break;
        }
    });
});
// 뮤직 온오프
document.querySelector(".music__control").addEventListener("click", () => {
    if (document.querySelector(".music__control").classList.contains("active")) {
        document.querySelector(".music__control").classList.remove("active");
        document.querySelector(".music__control > div > p").textContent = "OFF";
        document.querySelector(".music__control > div > p").style.color = "#444";
        // TweenMax.pauseAll(); 지원중단됐대 ;
        document.querySelectorAll(".bars").forEach((element) => {
            element.style.height = "10px";
        });
        musicAudio.pause();
    } else {
        document.querySelector(".music__control").classList.add("active");
        document.querySelector(".music__control > div > p").textContent = "ON";
        document.querySelector(".music__control > div > p").style.color = "var(--font-color3)";
        musicAudio.play();
        barHeight = 1.5;
        for (let i = 0; i < multiplier; i++) {
            equalizer(bars[i], 0);
        }
    }
});

function AudioPlay(i) {
    let audioarray = [
        `./assets/audio/1. BGM01.mp3`,
        `./assets/audio/2. BGM02.mp3`,
        `./assets/audio/3. BGM03.mp3`,
        // `./assets/audio/2. Infraction-Virtual-Reality-pr.mp3`,
        // `./assets/audio/3. Max Brhon - Cyberpunk [NCS Release].mp3`,
    ];
    musicAudio.src = audioarray[i];
    console.log(audioarray[0]);
    musicAudio.play();
    if (!document.querySelector(".music__control").classList.contains("active")) {
        document.querySelector(".music__control").classList.add("active");
        document.querySelector(".music__control > div > p").textContent = "ON";
        document.querySelector(".music__control > div > p").style.color = "var(--font-color3)";
        musicAudio.play();
        barHeight = 1.5;
        for (let i = 0; i < multiplier; i++) {
            equalizer(bars[i], 0);
        }
    }
}
function AudioStop() {
    musicAudio.pause();
    musicAudio.currentTime = 0;
}
// 이퀄라이저
// https://codepen.io/joemidi/pen/vLVrBj

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function equalizer(object, prevHeight) {
    let j = getRandomInt(1, multiplier);
    TweenMax.to(object, 1.5, {
        height: barHeight * (musicvolume / 9) * j,
        ease: SteppedEase.config(j - prevHeight),
        onComplete: equalizer,
        onCompleteParams: [object, j],
    });
}

// 창 로드시
window.onload = function () {
    printTime(); // 현재시간
    setTimeout(() => {
        graphCountfunc();
    }, 6000);
    // musicAudio.muted = true;
    // musicAudio.play();
    // musicAudio.muted = false;

    // scrollItStart(100, contentframe);
};

// 나는 너무 멀리온거야 ~~~
// // 메인리스트 클릭
// const mainlist = document.querySelectorAll(".mainListUL > li");
// let contentframe = document.querySelector(".currentIframe");
// let contentframeprev = document.querySelector(".prevIframe");
// console.log(contentframe.src);
// mainlist.forEach((e, i) => {
//     e.addEventListener("click", (t) => {
//         mainlist.forEach((e) => {
//             e.classList.remove("active");
//         });
//         e.classList.add("active");
//         if (i == 0) {
//             contentframeprev = contentframe;
//             contentframe.src = `http://sshin4882.dothome.co.kr/javascript/effect/searchEffect01.html`;
//             scrollIt(100, contentframe, contentframeprev);
//         } else if (i == 1) {
//             contentframeprev = contentframe;
//             contentframe.src = `http://sshin4882.dothome.co.kr/javascript/effect/quizEffect01.html`;
//             scrollIt(100, contentframe, contentframeprev);
//         }
//     });
// });

// // 메인창 스와이프 스크립트
// // https://codepen.io/nosurprisethere/pen/xrXjYV
// const contentWrap = document.getElementsByClassName("contentsWrap");
// const contentNext = document.querySelector(".contentNext");
// const contentPrev = document.querySelector(".contentPrev");
// const contentChange = document.querySelector(".contentChange");
// const contentChange2 = document.querySelector(".contentChange2");
// let WrapWidth = contentWrap[0].clientWidth;
// let WrapHeight = contentWrap[0].clientHeight;

// contentNext.addEventListener("click", () => {
//     x = 100;
//     scrollIt(x);
// });
// contentPrev.addEventListener("click", () => {
//     x = 100;
//     scrollIt(x);
// });
// function changeend() {
//     setTimeout(() => {
//         contentChange.style.transition = "none";
//         contentChange.style.top = 0;
//         contentChange.style.opacity = 0;
//         contentChange2.style.transition = "none";
//         contentChange2.style.top = 100 + "%";
//         contentChange2.style.opacity = 0;
//     }, 1000);
// }
// function changestart() {
//     contentChange.style.opacity = 1;
//     contentChange.style.top = 100 + "%";
//     contentChange.style.transition = "top .4s linear";
//     contentChange2.style.opacity = 0.4;
//     contentChange2.style.top = -20 + "%";
//     contentChange2.style.transition = "top .3s linear";
// }
// function scrollIt(x, content, contentprev) {
//     let transform = Math.max(0, Math.min(x, document.querySelector(".contentsWrap").offsetWidth)); //최솟값반환후 그 값과 0하고 max반환인데 굳이 왜?
//     console.log(content);
//     content.style.height = transform + "%";
//     // content.style.backgroundSize = "cover";
//     content.style.transition = "height .4s linear";
//     setTimeout(() => {
//         content.style.transition = "none";
//         // document.querySelector(".sitelist__1").style.backgroundSize = "100% 100%";
//     }, 700);
//     changestart();
//     changeend();
// }
// function scrollItStart(x, content) {
//     console.log(contentWrap);
//     console.log(WrapWidth);
//     console.log(WrapHeight);
//     // document.querySelector(".contentMain").style.height = x + "%";
//     content.style.height = x + "%";
//     content.style.transition = "height .4s linear";
//     changestart();
//     changeend();
// }

// // 사이즈변경시 값 변경
// window.onresize = function () {
//     WrapWidth = contentWrap[0].clientWidth;
//     WrapHeight = contentWrap[0].clientHeight;
//     console.log(WrapWidth);
//     console.log(WrapHeight);
// };
// 나는 너무 멀리온거야 ~~~//////
