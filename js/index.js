function test1(){
    if (document.documentElement.scrollTop>100) {
        document.querySelector(".screen-scroller").style.backgroundcolor="red";
    }
    else{
        document.querySelector(".screen-scroller").style.backgroundcolor="transparent";
    }
}
window.addEventListener("scroll",test1);
