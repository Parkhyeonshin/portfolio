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
document.querySelectorAll(".graphCount").forEach((elem, idx) =>
    setTimeout(() => {
        countUp(elem);
    }, idx * 1000 + 200)
);

// 뮤직리스트클릭
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
                break;
            case 1:
                document.querySelector(".music__circle").style.transform = "rotate(-360deg)";
                break;
            case 2:
                document.querySelector(".music__circle").style.transform = "rotate(-330deg)";
                break;
        }
    });
});
// 뮤직 온오프
document.querySelector(".music__control").addEventListener("click", () => {
    if (document.querySelector(".music__control").classList.contains("active")) {
        document.querySelector(".music__control").classList.remove("active");
        document.querySelector(".music__control > div > p").textContent = "OFF";
    } else {
        document.querySelector(".music__control").classList.add("active");
        document.querySelector(".music__control > div > p").textContent = "ON";
    }
});

// 메인리스트 클릭
const mainlist = document.querySelectorAll(".mainListUL > li");
mainlist.forEach((e, i) => {
    e.addEventListener("click", (t) => {
        mainlist.forEach((e) => {
            e.classList.remove("active");
        });
        e.classList.add("active");
    });
});

// 메인창 스와이프 스크립트
// https://codepen.io/nosurprisethere/pen/xrXjYV
const contentWrap = document.getElementsByClassName("contentsWrap");
const contentNext = document.querySelector(".contentNext");
const contentPrev = document.querySelector(".contentPrev");
const contentChange = document.querySelector(".contentChange");
const contentChange2 = document.querySelector(".contentChange2");
let WrapWidth = contentWrap[0].clientWidth;
let WrapHeight = contentWrap[0].clientHeight;

contentNext.addEventListener("click", () => {
    x = 100;
    scrollIt(x);
});
function changeend() {
    setTimeout(() => {
        contentChange.style.transition = "none";
        contentChange.style.top = 0;
        contentChange.style.opacity = 0;
        contentChange2.style.transition = "none";
        contentChange2.style.top = 100 + "%";
        contentChange2.style.opacity = 0;
    }, 1000);
}
function changestart() {
    contentChange.style.opacity = 1;
    contentChange.style.top = 100 + "%";
    contentChange.style.transition = "top 1s linear";
    contentChange2.style.opacity = 0.2;
    contentChange2.style.top = -20 + "%";
    contentChange2.style.transition = "top .7s linear";
}
function scrollIt(x) {
    let transform = Math.max(0, Math.min(x, document.querySelector(".contentsWrap").offsetWidth)); //최솟값반환후 그 값과 0하고 max반환인데 굳이 왜?
    console.log(transform);
    document.querySelector(".sitelist__1").style.height = transform + "%";
    document.querySelector(".sitelist__1").style.backgroundSize = "cover";
    document.querySelector(".sitelist__1").style.transition = "height 1s linear";
    setTimeout(() => {
        document.querySelector(".sitelist__1").style.transition = "none";
        document.querySelector(".sitelist__1").style.backgroundSize = "100% 100%";
    }, 1000);
    changestart();
    changeend();
}
function scrollItStart(x) {
    console.log(contentWrap);
    console.log(WrapWidth);
    console.log(WrapHeight);
    document.querySelector(".contentMain").style.height = x + "%";
    document.querySelector(".contentMain").style.transition = "height 1s linear";
    changestart();
    changeend();
}

// 창 로드시
window.onload = function () {
    printTime(); // 현재시간
    scrollItStart(100);
};

// 사이즈변경시 값 변경
window.onresize = function () {
    WrapWidth = contentWrap[0].clientWidth;
    WrapHeight = contentWrap[0].clientHeight;
    console.log(WrapWidth);
    console.log(WrapHeight);
};
