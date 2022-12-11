// cursor
const cursor = document.querySelector("#cursor");
const cursordesc = document.querySelector(".cursordesc > div");
const cursorInfo = {
    music: "오류 있슴다...누르면 겁나게 버벅일지도?",
    sitelist: "스크롤바는 감쳐놓았지만 기능은 잘 됩니다.",
};
let spanTimmer = 70;
let setTimeoutCtrl = 0;

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { duration: 0, left: e.pageX - 5, top: e.pageY - 5 });
});
// 커서이벤트발생할것
document.querySelector(".headerLastWrap").addEventListener("mouseenter", () => {
    let x = cursorInfo.music;
    cursorInfoactive(x);
});
document.querySelector(".headerLastWrap").addEventListener("mouseleave", () => {
    cursorInfoLeave();
});

// 커서이벤트발생함수
function cursorInfoactive(name) {
    let splitText = name;
    let splitWrap = splitText.split("").join('</span><span aria-hidden = "true">');
    splitWrap = "<span aria-hidden = 'true'>" + splitWrap + "</span>";
    cursordesc.innerHTML = splitWrap;
    spanSplit();
}

// 쪼개기 출력함수
function spanSplit() {
    // document.querySelectorAll(".cursordesc > div > span").forEach((span, idx) => {
    //     setTimeoutCtrl = setTimeout(() => {
    //         span.classList.add("active");
    //         console.log("set");
    //     }, spanTimmer);
    // });
    document.querySelectorAll(".cursordesc > div > span").forEach((span, idx) => {
        console.log(span);
        setTimeoutCtrl = setTimeout(() => {
            span.classList.add("active");
            // document.querySelector(".cursordesc > div").style.width = 15 * idx + "px";
            document.querySelector(".cursordesc > div").style.width = "fit-content";
            document.querySelector(".cursordesc > div").style.display = "flex";
        }, idx * spanTimmer);
    });
}
function spanSplit2(span, idx) {}
// 커서떠났을대 함수
function cursorInfoLeave() {
    console.log("?");
    cursordesc.innerHTML = "";
    clearTimeout(setTimeoutCtrl);
    setTimeout(() => {
        document.querySelector(".cursordesc > div").style.display = "none";
        document.querySelector(".cursordesc > div").style.width = 0 + "px";
    }, 500);
}
