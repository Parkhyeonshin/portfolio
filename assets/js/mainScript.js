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

// 창 로드시
window.onload = function () {
    printTime();
};
