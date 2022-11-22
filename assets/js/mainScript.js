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
// 그래프바 카운트(레이아웃 이후 예정)
// js로만 -> https://gurtn.tistory.com/163
{
    // const counter = ($counter, max) => {
    //     let now = max;
    //     const handle = setInterval(() => {
    //         $counter.innerHTML = Math.ceil(max - now);
    //         // 목표수치에 도달하면 정지
    //         if (now < 1) {
    //             clearInterval(handle);
    //         }
    //         // 증가되는 값이 계속하여 작아짐
    //         const step = now / 10;
    //         // 값을 적용시키면서 다음 차례에 영향을 끼침
    //         now -= step;
    //     }, 50);
    // };
    // window.onload = () => {
    //     // 카운트를 적용시킬 요소
    //     const $counter = document.querySelector(".count");
    //     // 목표 수치
    //     const max = 17249;
    //     setTimeout(() => counter($counter, max), 2000);
    // };
}

// 창 로드시
window.onload = function () {
    printTime();
};
