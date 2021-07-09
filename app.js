document.addEventListener('DOMContentLoaded', init, false);
function init() {
    //   function message () {
    //     alert("Hello!");
    //   }
    document.getElementById("menu").addEventListener("click", menuToggle);
    document.getElementById("handle1").addEventListener("click", goToLink1);
    document.getElementById("handle2").addEventListener("click", goToLink2);
    document.getElementById("handle3").addEventListener("click", goToLink3);
    document.getElementById("handle4").addEventListener("click", goToLink4);
    document.getElementById("hamburger").addEventListener("click", openFloatingNavbar);

}

// document.querySelector(".introduction").classList.add("beforeLoad");



// window.onload = function (){
//     document.querySelector(".introduction").classList.remove("beforeLoad");
// }

window.onscroll = hamburgerVisible;


function menuToggle() {
    const menu = document.getElementById("menu");
    const handle1 = document.getElementById('handle1');
    const handle2 = document.getElementById('handle2');
    const handle3 = document.getElementById('handle3');
    const handle4 = document.getElementById('handle4');
    let menuButtonDisplay = handle1.currentStyle ? handle1.currentStyle.display : getComputedStyle(handle1, null).display;
    // console.log(menuButtonDisplay);
    if (menuButtonDisplay == "none")
        menuOpen();
    else {
        menuClose();
    }

    function menuOpen() {
        let id = null;
        let pos = 0;
        let op = 0;
        clearInterval(id);
        handle1.style.display = "block";
        handle2.style.display = "block";
        handle3.style.display = "block";
        handle4.style.display = "block";
        document.getElementById("click-me").style.visibility="hidden";
        // handle1.style.cursor = "pointer";
        // handle1.style.pointerEvents = "all";

        id = setInterval(frame, 5);
        function frame() {
            if (pos > 26.0) {
                handle1.style.zIndex = 2;
                handle2.style.zIndex = 2;
                handle3.style.zIndex = 2;
                handle4.style.zIndex = 2;
                clearInterval(id);
            } else {
                pos = pos + 0.1;
                handle3.style.bottom = pos + "vw";
                handle4.style.top = pos + "vw";
            }
            if (pos < 15.5) {
                handle1.style.bottom = pos + "vw";
                handle2.style.top = pos + "vw";
            }
            if (op < 1.00) {
                op = op + 0.01;
                handle1.style.opacity = op;
                handle2.style.opacity = op;
                handle3.style.opacity = op;
                handle4.style.opacity = op;
            }
        }
    }

    function menuClose() {
        let pos3 = 26.0;
        let pos1 = 15.5;
        let op = 1.00
        let id = null;
        clearInterval(id);
        handle1.style.zIndex = -1;
        handle2.style.zIndex = -1;
        handle3.style.zIndex = -2;
        handle4.style.zIndex = -2;

        id = setInterval(frame, 5);
        function frame() {
            if (pos3 > 0.0) {
                pos3 = pos3 - 0.1;
                handle3.style.bottom = pos3 + "vw";
                handle4.style.top = pos3 + "vw";
            }
            if (pos1 > 0.0) {
                pos1 = pos1 - 0.1;
                handle1.style.bottom = pos1 + "vw";
                handle2.style.top = pos1 + "vw";
            }
            if (op > 0.00) {
                op = op - 0.02;
                handle1.style.opacity = op;
                handle2.style.opacity = op;
                handle3.style.opacity = op;
                handle4.style.opacity = op;
            }
            else {
                handle1.style.display = "none";
                handle2.style.display = "none";
                handle3.style.display = "none";
                handle4.style.display = "none";
                clearInterval(id);
            }
        }

    }

}

function goToLink1() {
    window.open('https://www.codechef.com/users/purpleberry314', '_blank');
    // location.href='https://www.codechef.com/users/purpleberry314';
    //Change this!!!
}

function goToLink2() {
    window.open('https://codeforces.com/profile/purpleberry3.14', '_blank');
}

function goToLink3() {
    window.open('https://leetcode.com/purpleberry314/', '_blank');
}

function goToLink4() {
    window.open('https://atcoder.jp/users/purpleberry314', '_blank');
}


function openFloatingNavbar() {
    // console.log("hello!")
    const floatingNavbar = document.querySelector(".floating-navbar");
    // let floatingNavbarOpacity = floatingNavbar.currentStyle ? floatingNavbar.currentStyle.opacity : getComputedStyle(floatingNavbar, null).opacity;
    // if (floatingNavbarOpacity<1.0){  
    //     floatingNavbar.style.zIndex = 5;
    //     floatingNavbar.style.opacity = 1.0;
    // }
    // else{
    //     floatingNavbar.style.zIndex = -5;
    //     floatingNavbar.style.opacity = 0.0;
    // }
    floatingNavbar.style.zIndex = 5;
    floatingNavbar.style.opacity = 1.0;
    floatingNavbar.style.transition = "all 1.5s ease-out";
    floatingNavbar.classList.toggle('open');

}


function hamburgerVisible() {
    var y = window.scrollY;
    const hamburger = document.getElementById("hamburger");
    const floatingNavbar = document.querySelector(".floating-navbar");
    if (y > 60) {
        hamburger.style.opacity = 1.0;
        hamburger.style.pointerEvents = "all";
    }
    else {
        hamburger.style.opacity = 0.0;
        hamburger.style.pointerEvents = "none"; 
        floatingNavbar.style.zIndex = -5;
        floatingNavbar.style.opacity = 0.0;
    }
}


