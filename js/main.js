// ===========BTN MENU===========
var i = 0;
document.querySelectorAll('header nav .btn-menu .show')[0].addEventListener('click', function showBtn() {
        document.querySelectorAll('header nav .btn-menu .show')[0].classList.toggle('active2');
        i++;
        if(i%2!=0){
            document.querySelectorAll('header nav .menu')[0].style.height = "390px";
        } else {
            document.querySelectorAll('header nav .menu')[0].style.height = "0";
            document.querySelectorAll('header nav .menu .home')[0].classList.remove('active1');
            document.querySelectorAll('header nav .menu .home')[0].style.marginBottom = 0;
            document.querySelectorAll('.menu_c2')[0].style.height = 0;
        }
    }
    
);
function showC2(x) {
    x.classList.toggle('active1');
    let countItem = document.querySelectorAll('.active1 .menu_c2 li').length;

    x.style.marginBottom = countItem*55 + "px";
    document.querySelectorAll('header nav .menu')[0].style.height = 395 + countItem*55 + "px";
    document.querySelectorAll('.menu_c2')[0].style.height = countItem*55 + "px";
}

// ========== CHOOSE US ==========

var statistical = document.querySelectorAll('.choose-us .statistical li');

let statistical1 = 1300;
let statistical2 = 0;
let statistical3 = 0;

let countSta1 = setInterval(() =>{
    if(statistical1 > 1595) {
        clearInterval(countSta1);
    }
    document.querySelectorAll('.choose-us .statistical li a')[0].innerHTML = statistical1;
    statistical1++;
}, 0.2);
let countSta2 = setInterval(() =>{
    if(statistical2 > 159) {
        clearInterval(countSta2);
    }
    document.querySelectorAll('.choose-us .statistical li a')[1].innerHTML = statistical2;
    statistical2++;
}, 0.2);
let countSta3 = setInterval(() =>{
    if(statistical3 > 135) {
        clearInterval(countSta3);
    }
    document.querySelectorAll('.choose-us .statistical li a')[2].innerHTML = statistical3;
    statistical3++;
}, 0.2);

//============ HAPPY TEAM============

var listIconHappy =  document.querySelectorAll('.happy-team .happy-team-list-name .item .list-icon');

function showList(x){
    listIconHappy[x].style.animation = "amt-listicon-happy-show .5s";
    listIconHappy[x].style.transform = "translateX(0)";
}
function hideList(x){
    listIconHappy[x].style.animation = "amt-listicon-happy-hide .5s";
    listIconHappy[x].style.transform = "translateX(70px)";
}

document.querySelectorAll('.type-services > a')[0].addEventListener('click', function services() {
    if(window.getComputedStyle(document.getElementsByClassName('services-ul')[0]).display === "none"){
        document.getElementsByClassName('services-ul')[0].style.display = "block";
        document.querySelectorAll('.type-services > a')[0].classList.toggle('active1');
    } else {
        document.getElementsByClassName('services-ul')[0].style.display = "none";
        document.querySelectorAll('.type-services > a')[0].classList.toggle('active1');
    }
});