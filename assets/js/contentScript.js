const constarray = [
    {
        tit: `MAIN`,
        subtit: `intro`,
        desc: `<span>환영합니다.</span><span> 왼쪽의 '<em>Project List</em>'의 목록을 클릭하시거나,</span><span> <em>하단의 화살표</em>를 클릭하시면 감상이 가능합니다 :)</span><span class='main_desc_intro'>영화 <em>'오블리비언'</em>에 나오는 스크린화면을 컨셉삼아 만들어봤습니다.</span> `,
    },
    {
        tit: `ABOUT ME`,
        subtit: `introduce`,
        desc: `<span>꾸준함과 견고함의 힘을 믿는 프론트엔드 개발자가 되고 싶은 박현신입니다. 튼튼한 벽돌로 빈틈없이 견고하게 지어진 집은 위기 상황이 와도 무너지지 않으며 굳건히 자신의 자리를 지킵니다. 저 또한 늘 그랬듯이 꾸준히 새로운 기술과 지식을 습득하고 견고하게 쌓아온 기본기를 활용하여 나날이 발전해가는 웹 분야에서 한 부분에 기여하고 싶습니다.</span>`,
    },
    {
        tit: `site list`,
        subtit: `choice site`,
        desc: `<span> 수강기간동안 만든 사이트들을 몇가지 추려서 모아놓은 INDEX홈페이지입니다. </span><span> SITE LIST에서는 그 중 몇가지를 모아봤습니다.</span><span>스크롤바는 숨겼으나 스크롤기능을 통해 사이트목록을 보실 수 있습니다</span>`,
    },
    {
        tit: `site list`,
        subtit: `site making`,
        desc: `<span> 가장 처음으로 직접 만들어본 사이트입니다. 모든 기기에 유연하게 대응하는 반응형사이트에 초점을 맞춰 진행했습니다. 슬라이드는 Swiper 플러그인을 적용하여 만들어보았습니다.</span>`,
    },
    {
        tit: `site list`,
        subtit: `game effect`,
        desc: `<span> 자바스크립트를 이용하여 제작한 게임모음 및 뮤직플레이어 사이트입니다. 뮤직플레이어, 테트리스게임 이외에도 그간 배웠던 효과들을 활용하여 메모리게임, 검색게임 들을 만들어 추가해 보았습니다. 모던레트로 컨셉으로 하되 각 게임은 레트로풍으로 기획해서 작업해보았습니다.</span>`,
    },
    {
        tit: `site list`,
        subtit: `React site`,
        desc: `<span> REACT를 활용하여 만든 레퍼런스 사이트입니다. unsplash, movie, youtube 등의 데이터들을 api를 이용해서 가져온 후 작업하였습니다.</span>`,
    },
    {
        tit: `site list`,
        subtit: `React site2`,
        desc: `<span> REACT를 활용하여 만든 유튜브 사이트입니다. 유튜버, 구독자 수, 해시 태그, 최신 영상 등 Rapid사이트의 Youtube v3 API를 사용하여 데이터를 가져왔습니다.</span>`,
    },
    {
        tit: `site list`,
        subtit: `vue site`,
        desc: `<span> REACT를 이용하여 만들어본 예제 사이트를 VUE로도 만들어 본 사이트입니다. REACT와 마찬가지로 unsplash, movie 등 레퍼런스데이터들은 api를 활용하여 가져와 작업했습니다. </span>`,
    },
    {
        tit: `site list`,
        subtit: `php site`,
        desc: `<span> 팀 프로젝트로 진행하고, PHP를 활용하여 만든 사이트입니다. 실제 운용하는 사이트처럼 구현하는 것이 주요 목표였으며 목적에 부합한 로그인 기능, 댓글 기능, 글 작성/수정/삭제 기타 등등 다양한 기능들을 구현하여 만들었습니다.</span>`,
    },
    {
        tit: `contact`,
        subtit: `trust me`,
        desc: `<span> 이래도 안넘어와? 곤란한데...</span>`,
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
const contentShow = document.querySelectorAll(".contentWindow");
let arrowCount = 0,
    arrowCountMax = mainlist.length + sitelist.length - 1;
// 데이터입력 및 실질적인 동작 메인컨트롤?함수
function contInner(x, y, z) {
    contentDesc.innerHTML = constarray[x].desc;
    contentTit.textContent = constarray[x].tit;
    contentSubtit.textContent = constarray[x].subtit;
    if (x == 0 || x == 1 || x == 2) {
        mainlist.forEach((mainelement) => {
            mainelement.classList.remove("active");
        });
        mainlist[x].classList.add("active");
        sitelist.forEach((siteelement) => {
            siteelement.classList.remove("active");
        });
        contentSwitch(x);
    } else if (x >= 3 && x < arrowCountMax) {
        let siteindex = x - 3;
        sitelist.forEach((siteelement) => {
            siteelement.classList.remove("active");
        });
        sitelist[siteindex].classList.add("active");
        contentSwitch(x);
    } else if (x == arrowCountMax) {
        mainlist.forEach((mainelement) => {
            mainelement.classList.remove("active");
        });
        mainlist[arrowCountMax - sitelist.length].classList.add("active");
        sitelist.forEach((siteelement) => {
            siteelement.classList.remove("active");
        });
        contentSwitch(x);
    }
}

mainlist.forEach((e, i) => {
    e.addEventListener("click", () => {
        // mainlist.forEach((x) => {
        //     x.classList.remove("active");
        // });
        // e.classList.add("active");
        if (i == 3) {
            arrowCount = arrowCountMax;
            contInner(arrowCount, 0, 0);
        } else if (i == 2) {
            sitelistactive();
            arrowCount = i;
            contInner(arrowCount, 0, 0);
        } else {
            arrowCount = i;
            contInner(arrowCount, 0, 0);
        }
    });
});
sitelist.forEach((e, i) => {
    e.addEventListener("click", () => {
        arrowCount = i + 3;
        contInner(arrowCount, 0, 0);
    });
});

// 화살표 클릭
contentPrev.addEventListener("click", () => {
    if (arrowCount == 0) {
        arrowCount = arrowCountMax;
    } else {
        console.log("감소실행전" + arrowCount);
        arrowCount--;
        console.log("감소실행 후" + arrowCount);
        if (arrowCount == 2) {
            console.log("카운트가2일때" + arrowCount);
            Nositelistactive();
        } else if (arrowCount == arrowCountMax - 1) {
            sitelistactive();
        }
    }
    contInner(arrowCount, 0, 0);
});
contentNext.addEventListener("click", () => {
    if (arrowCount == arrowCountMax) {
        arrowCount = 0;
    } else {
        arrowCount++;
        if (arrowCount == 2 || arrowCount == 3) {
            sitelistactive();
        } else if (arrowCount == arrowCountMax) {
            Nositelistactive();
        }
    }
    contInner(arrowCount, 0, 0);
});

// 리스트 컨트롤
function sitelistactive() {
    document.querySelector(".mainListUL").classList.remove("active");
    document.querySelector(".mainListUL2").classList.add("active");
    document.querySelector(".mainListUL2control").classList.add("active");
}

function Nositelistactive() {
    document.querySelector(".mainListUL").classList.add("active");
    document.querySelector(".mainListUL2").classList.remove("active");
    document.querySelector(".mainListUL2control").classList.remove("active");
}

// 사이트리스트-back버튼 누르기
sitelistBack.addEventListener("click", () => {
    Nositelistactive();
});

// 사이트전환 함수
function contentSwitch(x) {
    contentShow.forEach((e) => {
        e.classList.remove("active");
    });
    contentShow[x].classList.add("active");
}

contInner(0, 0, 0);
