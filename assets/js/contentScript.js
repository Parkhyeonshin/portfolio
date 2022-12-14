const constarray = [
    {
        tit: `MAIN`,
        subtit: `intro`,
        desc: `<span>환영합니다.</span><span> 왼쪽의 '<em>Site List</em>'의 목록을 클릭하시거나,</span><span> <em>하단의 화살표</em>를 클릭하시면 감상이 가능합니다 :)</span><span>진행상태 : '-ing', 반응형 : '-ing'</span><span class='main_desc_intro'>영화 <em>'오블리비언'</em>에 나오는 스크린화면을 컨셉삼아 만들어봤습니다.</span> `,
    },
    {
        tit: `ABOUT ME`,
        subtit: `introduce`,
        // desc: `<span>꾸준함과 견고함의 힘을 믿는 프론트엔드 개발자가 되고 싶은 박현신입니다. 튼튼한 벽돌로 빈틈없이 견고하게 지어진 집은 위기 상황이 와도 무너지지 않으며 굳건히 자신의 자리를 지킵니다. 저 또한 늘 그랬듯이 꾸준히 새로운 기술과 지식을 습득하고 견고하게 쌓아온 기본기를 활용하여 나날이 발전해가는 웹 분야에서 한 부분에 기여하고 싶습니다.</span>`,
        desc: `<span></span>`,
    },
    {
        tit: `site list`,
        subtit: `choice site`,
        desc: `<span> 수강기간동안 만든 사이트들을 몇가지 추려서 모아놓은 INDEX홈페이지입니다. </span><span> SITE LIST에서는 그 중 몇가지를 모아봤습니다.</span><span>스크롤기능 정상 작동합니다</span>`,
        link: `https://parkhyeonshin.github.io/codingclass/index.html`,
    },
    {
        tit: `site list`,
        subtit: `site making`,
        desc: `<span> 가장 처음으로 직접 만들어본 사이트입니다. 모든 기기에 유연하게 대응하는 반응형사이트에 초점을 맞춰 진행했습니다. 슬라이드는 Swiper 플러그인을 적용하여 만들어보았습니다.</span>`,
        link: `https://parkhyeonshin.github.io/codingclass/site/site1/index.html`,
    },
    {
        tit: `site list`,
        subtit: `game effect`,
        desc: `<span> 자바스크립트를 이용하여 제작한 게임모음 및 뮤직플레이어 사이트입니다. 뮤직플레이어, 테트리스게임 이외에도 그간 배웠던 효과들을 활용하여 메모리게임, 검색게임 들을 만들어 추가해 보았습니다. 모던레트로 컨셉으로 하되 각 게임은 레트로풍으로 기획해서 작업해보았습니다.</span>`,
        link: `https://parkhyeonshin.github.io/codingclass/javascript/effect/gameFolder/gameEffect01Copy.html`,
    },
    {
        tit: `site list`,
        subtit: `React site`,
        desc: `<span> REACT를 활용하여 만든 레퍼런스 사이트입니다. unsplash, movie, youtube 등의 데이터들을 api를 이용해서 가져온 후 작업하였습니다.</span>`,
        link: `https://sshin-react02.netlify.app`,
    },
    {
        tit: `site list`,
        subtit: `React site2`,
        desc: `<span> REACT를 활용하여 만든 유튜브 사이트입니다. 유튜버, 구독자 수, 해시 태그, 최신 영상 등 Rapid사이트의 Youtube v3 API를 사용하여 데이터를 가져왔습니다.</span>`,
        link: `https://sshin4882-react-api01.netlify.app/`,
    },
    {
        tit: `site list`,
        subtit: `vue site`,
        desc: `<span> REACT를 이용하여 만들어본 예제 사이트를 VUE로도 만들어 본 사이트입니다. REACT와 마찬가지로 unsplash, movie 등 레퍼런스데이터들은 api를 활용하여 가져와 작업했습니다. </span>`,
        link: `https://vueapi32.web.app/`,
    },
    {
        tit: `site list`,
        subtit: `php site`,
        desc: `<span> 팀 프로젝트로 진행하고, PHP를 활용하여 만든 사이트입니다. 실제 운용하는 사이트처럼 구현하는 것이 주요 목표였으며 목적에 부합한 로그인 기능, 댓글 기능, 글 작성/수정/삭제 기타 등등 다양한 기능들을 구현하여 만들었습니다.</span>`,
        link: `http://bb020440.dothome.co.kr/php/main/main.php`,
    },
    {
        tit: `contact`,
        subtit: `trust me`,
        desc: `<div class='contIconGroup'><div class="phoneIcon">Phone<div></div></div><a target='_blank' href="https://github.com/Parkhyeonshin" class="gitIcon">GitHub<div></div></a><a href="https://sshin4882.tistory.com/" class="blogIcon" target='_blank'>Blog<div></div></a><a href="mailto:sshin4882@naver.com"  target='_blank' class="mailIcon">E-Mail<div></div></a></div>`,
    },
];
const AboutInfo = [
    `안녕하세요 저는 신입 프론트엔드 개발자 박현신 입니다. 흰 화면이 코드를 통해 하나씩 채워지는 것을 직관적으로 확인할 수 있어 프론트엔드 라는 직업이 더 매력적으로 느껴졌고 원하는 것을 직접 이뤘을 때 너무나도 성취감이 있고 흥미롭게 다가왔습니다. 아직은 서툴고 부족하기에 많이 배워야하고 더 많은 노력이 필요하다는 것을 알고 있습니다. 실패에 두려워하지 않고, 항상 노력하며 끊임없이 공부하고 센스있는 프론트엔드 개발자가 되겠습니다.`,
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
const AboutClose = document.querySelectorAll(".AboutMeModal__close");
const SiteLink = document.querySelector(".contentLink");
// const PhoneBtn = document.querySelector(".phoneIcon");
// const GitBtn = document.querySelector(".gitIcon");
// const BlogBtn = document.querySelector(".blogIcon");
// const EmaileBtn = document.querySelector(".mailIcon");
let arrowCount = 0,
    arrowCountMax = mainlist.length + sitelist.length - 1;
// 데이터입력 및 실질적인 동작 메인컨트롤?함수
function contInner(x, y, z) {
    contentDesc.innerHTML = constarray[x].desc;
    contentTit.textContent = constarray[x].tit;
    contentSubtit.textContent = constarray[x].subtit;
    if (x == 0 || x == 2) {
        mainlist.forEach((mainelement) => {
            mainelement.classList.remove("active");
        });
        mainlist[x].classList.add("active");
        sitelist.forEach((siteelement) => {
            siteelement.classList.remove("active");
        });
        contentSwitch(x);
    } else if (x == 1) {
        mainlist.forEach((mainelement) => {
            mainelement.classList.remove("active");
        });
        mainlist[x].classList.add("active");
        sitelist.forEach((siteelement) => {
            siteelement.classList.remove("active");
        });
        document.querySelector(".AboutMeModal").classList.add("active");
        document.querySelector(".AboutMeModal__Cont").classList.add("active");
        contentSwitch(x);
        AboutInfoWrite(0);
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
        contacthover();
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
    if (x >= 2 && x <= arrowCountMax - 1) {
        // document.querySelector(".contentNoise").classList.remove("active");
        document.querySelector(".contentOverlayLine").classList.remove("active");
        document.querySelector(".contentOverlay").classList.remove("active");
        document.querySelectorAll(".sitefunction > span").forEach((e, i) => {
            e.classList.add("active");
        });
        document.querySelectorAll(".contentsWrap > span").forEach((e, i) => {
            e.classList.add("active");
        });
    } else if (x == arrowCountMax) {
        // document.querySelector(".contentOverlayLine").classList.remove("active");
        // document.querySelector(".contentOverlay").classList.remove("active");
        // document.querySelectorAll(".sitefunction > span").forEach((e, i) => {
        //     e.classList.add("active");
        // });
        // document.querySelectorAll(".contentsWrap > span").forEach((e, i) => {
        //     e.classList.add("active");
        // });
    } else {
        // document.querySelector(".contentNoise").classList.add("active");
        document.querySelector(".contentOverlayLine").classList.add("active");
        document.querySelector(".contentOverlay").classList.add("active");
        document.querySelectorAll(".sitefunction > span").forEach((e, i) => {
            e.classList.remove("active");
        });
        document.querySelectorAll(".contentsWrap > span").forEach((e, i) => {
            e.classList.remove("active");
        });
    }
}

contInner(0, 0, 0);

function AboutInfoWrite(count) {
    let splitText = AboutInfo[count];
    let splitWrap = splitText.split("").join('</span><span aria-hidden = "true">');
    splitWrap = "<span aria-hidden = 'true'>" + splitWrap + "</span><div class = 'blinkText'></div>";
    document.querySelector(".AboutMeModal__desc").innerHTML = splitWrap;
    document.querySelectorAll(".AboutMeModal__desc > span").forEach((span, idx) => {
        setTimeout(() => {
            span.classList.add("active");
        }, idx * 30);
    });
}

document.querySelector(".AboutMeModal__close").addEventListener("click", () => {
    document.querySelector(".AboutMeModal").classList.remove("active");
    document.querySelector(".AboutMeModal__Cont").classList.remove("active");
});

document.querySelector(".sitefunction").addEventListener("mouseenter", (e) => {
    console.log("dd");
    if (arrowCount >= 2 && arrowCount < arrowCountMax) {
        SiteLink.classList.add("active");
    }
});
document.querySelector(".sitefunction").addEventListener("mouseleave", (e) => {
    console.log("dd none");
    SiteLink.classList.remove("active");
});

SiteLink.addEventListener("click", (x) => {
    x.preventDefault();
    console.log("되니?");
    console.log(arrowCount);
    window.open(constarray[arrowCount].link);
});
// contact
function contacthover() {
    document.querySelector(".gitIcon").addEventListener("mouseenter", () => {
        document.querySelector(".GitImg").classList.add("active");
    });
    document.querySelector(".gitIcon").addEventListener("mouseleave", () => {
        document.querySelector(".GitImg").classList.remove("active");
    });
    document.querySelector(".blogIcon").addEventListener("mouseenter", () => {
        document.querySelector(".BlogImg").classList.add("active");
    });
    document.querySelector(".blogIcon").addEventListener("mouseleave", () => {
        document.querySelector(".BlogImg").classList.remove("active");
    });
    document.querySelector(".phoneIcon").addEventListener("mouseenter", () => {
        document.querySelector(".phoneNum").classList.add("active");
    });
    document.querySelector(".phoneIcon").addEventListener("mouseleave", () => {
        document.querySelector(".phoneNum").classList.remove("active");
    });
}
// contact__threejs
class Stage {
    constructor() {
        this.renderParam = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        this.cameraParam = {
            fov: 125,
            near: 1,
            far: 20000,
        };
        this.scene = null;
        this.rederer = null;
        this.camera = null;
        this.mesh = null;
        this.init();
    }
    init() {
        this._setScene();
        this._setRender();
        this._setCamera();
        this._setMesh();
        this._setFog();
        this._update();
        this._render();
        onresize = this._resize.bind(this);
    }
    _setScene() {
        this.scene = new THREE.Scene();
    }
    _setRender() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("webgl"),
            antialias: true,
            alpha: true,
        });
        this.renderer.setSize(this.renderParam.width, this.renderParam.height);
        this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    }
    _setCamera() {
        this.camera = new THREE.PerspectiveCamera(
            this.cameraParam.fov,
            this.renderParam.width / this.renderParam.height,
            this.cameraParam.near,
            this.cameraParam.far
        );
        this.camera.position.set(-200, 0, 185);
        this.camera.lookAt(new THREE.Vector3(0, 0, -100));
    }
    _setMesh() {
        // const geometry = new THREE.BoxGeometry(3, 3, 3, 4, 4, 4);
        // const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        // this.mesh = new THREE.Mesh(geometry, material);
        // this.mesh.position.set(0, 0, 0);
        // this.scene.add(this.mesh);

        const vertices = [];
        const size = 2000;
        const length = 7000;
        const geometry = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 1,
        });
        for (let i = 0; i < length; i++) {
            const x = size * (Math.random() - 0.5);
            const y = size * (Math.random() - 0.5);
            const z = size * (Math.random() - 0.5);

            vertices.push(x, y, z);
        }
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
        this.mesh = new THREE.Points(geometry, material);
        this.scene.add(this.mesh);
    }
    _setFog() {
        this.scene.fog = new THREE.Fog(0xffffff, 50, 200);
    }
    _update() {
        // this.mesh.rotation.x += -0.001;
        // this.mesh.rotation.y += 0.00021;
        // this.mesh.rotation.z += 0.0001;
        let rotation = 0;
        const radian = (rotation * Math.PI) / 180;
        rotation += 0.1;
        this.camera.position.x = 3000 * Math.sin(rotation);
        this.camera.position.z = 1000 * Math.cos(rotation);
        // this.camera.position.y = 2200 * Math.cos(rotation);
        this.mesh.rotation.z += 0.001;
        this.mesh.rotation.x += 0.001;
    }
    _render() {
        this._update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this._render.bind(this));
    }
    _resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
(() => {
    const stage = new Stage();
})();
