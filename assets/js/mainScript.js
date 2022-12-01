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
// console.log(document.querySelectorAll(".graphCount")[1]);
document.querySelectorAll(".graphCount").forEach((elem, idx) =>
    setTimeout(() => {
        countUp(elem);
    }, idx * 1000 + 200)
);

// 창 로드시
window.onload = function () {
    printTime();
};

// camera
const constraints = {
    video: true,
};

const container = document.querySelector("#container");
const img = document.querySelector("#container img");
const video = document.querySelector("#container video");
var imgData;
const canvas = document.querySelector("#videoCanvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", function () {
    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess);
    document.body.classList.add("loaded");
});

setInterval(function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.filter = "blur(1px) grayscale(100%) brightness(140%) contrast(90)";
    ctx.drawImage(video, 0, 0);
    document.querySelector("#light").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", canvas.toDataURL("image/jpg"));
    ctx.filter = "blur(6px) grayscale(100%) brightness(140%) contrast(90)";
    ctx.drawImage(video, 0, 0);
    document.querySelector("#mid").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", canvas.toDataURL("image/jpg"));
    ctx.filter = "blur(4px) grayscale(100%) brightness(190%) contrast(120)";
    ctx.drawImage(video, 0, 0);
    document.querySelector("#dark").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", canvas.toDataURL("image/jpg"));
}, 200);

function handleSuccess(stream) {
    video.srcObject = stream;
}

var takeOnMe = document.getElementById("aha");
var playing = 1;
var button = document.getElementById("button");
function takeMeOn() {
    button.classList.toggle("playing");
    if (playing == 1) {
        takeOnMe.play();
        playing = 0;
    } else {
        takeOnMe.pause();
        playing = 1;
    }
}
