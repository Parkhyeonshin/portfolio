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
        subtit: `choice site`,
        desc: `<span> 수강기간동안 만든 사이트들을 몇가지 추려서 모아놓은 INDEX홈페이지입니다. 각 카드들은 앞면은 3D뒤집기 효과, 뒷면은 일반 뒤집기 효과를 주어 구성해보았습니다. </span><span> SITE LIST에서는 그 중 몇가지를 모아봤습니다.</span>`,
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
        tit: `site list`,
        subtit: `search game`,
        desc: `<span> 자바스크립트를 이용하여 제작한 검색효과입니다. 특히, 이 검색효과를 이용하여 CSS속성 값 맞추기 게임을 만들어 보았습니다.</span>`,
    },
    {
        tit: `contact`,
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
