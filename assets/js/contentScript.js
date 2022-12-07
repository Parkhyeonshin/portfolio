const constarray = [
    {
        tit: `MAIN`,
        subtit: `intro`,
        desc: `<span>환영합니다.</span><span> 왼쪽의 '<em>Project List</em>'의 목록을 클릭하시거나,</span><span> <em>하단의 화살표</em>를 클릭하시면 감상이 가능합니다 :)</span><span class='main_desc_intro'>영화 <em>'오블리비언'</em>에 나오는 스크린화면을 컨셉삼아 만들어봤습니다.</span> `,
    },
    {
        tit: `ABOUT ME`,
        subtit: `introduce`,
        desc: `<span>꾸준함과 견고함의 힘을 믿는, 퍼블리셔가 되고 싶은 나원지입니다. 튼튼한 벽돌로 빈틈없이 견고하게 지어진 집은 위기 상황이 와도 무너지지 않으며 굳건히 자신의 자리를 지킵니다. 저 또한 늘 그랬듯이 꾸준히 새로운 기술과 지식을 습득하고 견고하게 쌓아온 기본기를 활용하여 나날이 발전해가는 웹 분야에서 한 부분에 기여하고 싶습니다.</span>`,
    },
    {
        tit: `site list`,
        subtit: `api site`,
        desc: `<span> 웹표준을 준수하며 모든 기기에 유연하게 대응하는 반응형사이트입니다. Swiper 플러그인을 적용하여 배너와 차트 탭, 이미지 슬라이드, 동영상 등 다양하면서도 편리한 기능을 담은 기업형 웹사이트로 작업했습니다.</span>`,
    },
];
const mainlist = document.querySelectorAll(".mainListUL > li");
const sitelist = document.querySelectorAll(".mainListUL2 > li");
const sitelistBack = document.querySelector(".listBack");
const contentDesc = document.querySelector(".content_desc");
const contentTit = document.querySelector(".content_title_big");
const contentSubtit = document.querySelector(".content_title_small");
const contentPrev = document.querySelector(".contentPrev");
const contentNext = document.querySelector(".contentNext");

let arrowCount = 0,
    arrowCountMax = mainlist.length + sitelist.length;

mainlist.forEach((e, i) => {
    e.addEventListener("click", () => {
        // mainlist.forEach((x) => {
        //     x.classList.remove("active");
        // });
        // e.classList.add("active");
        if (i == 3) {
            i = arrowCountMax;
            contInner(i, 0, 0);
        }
        contInner(i, 0, 0);
    });
});
// 화살표 클릭
contentPrev.addEventListener("click", () => {
    if (arrowCount == 0) {
        arrowCount = arrowCountMax;
    } else {
        arrowCount--;
        if (arrowCount == 1) {
            Nositelistactive();
        }
        contInner(arrowCount, 0, 0);
    }
});
contentNext.addEventListener("click", () => {
    if (arrowCount == arrowCountMax) {
        arrowCount = 0;
    } else {
        arrowCount++;
        if (arrowCount == 2) {
            sitelistactive();
        }
        contInner(arrowCount, 0, 0);
    }
});

function contInner(x, y, z) {
    contentDesc.innerHTML = constarray[x].desc;
    contentTit.textContent = constarray[x].tit;
    contentSubtit.textContent = constarray[x].subtit;
    if (x == 0 || x == 1 || x == 2 || x == arrowCountMax) {
        mainlist.forEach((e) => {
            e.classList.remove("active");
        });
        mainlist[x].classList.add("active");
    } else if (x >= 3 || x < arrowCountMax) {
        let siteindex = x - 3;
        sitelist.forEach((e) => {
            e.classList.remove("active");
        });
        sitelist[siteindex].classList.add("active");
    }
}

function sitelistactive() {
    document.querySelector(".mainListUL").classList.toggle("active");
    document.querySelector(".mainListUL2").classList.toggle("active");
    document.querySelector(".mainListUL2control").classList.toggle("active");
    arrowCount = 2;
    contInner(2, 0, 0);
}
mainlist[2].addEventListener("click", () => {
    sitelistactive();
});
function Nositelistactive() {
    document.querySelector(".mainListUL").classList.toggle("active");
    document.querySelector(".mainListUL2").classList.toggle("active");
    document.querySelector(".mainListUL2control").classList.toggle("active");
}

sitelistBack.addEventListener("click", () => {
    Nositelistactive();
});

contInner(0, 0, 0);
