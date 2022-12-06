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

// 창 로드시
window.onload = function () {
    printTime(); // 현재시간
};
