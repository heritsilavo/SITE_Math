var img = new Array();
img[0] = document.getElementById("img0");
img[1] = document.getElementById("img1");
img[2] = document.getElementById("img2");
img[3] = document.getElementById("img3");
img[4] = document.getElementById("img4");
img[5] = document.getElementById("img5");
img[6] = document.getElementById("img6");
img[7] = document.getElementById("img7");
img[8] = document.getElementById("img8");
img[9] = document.getElementById("img9");

//les backgrounds
var bg = new Array()
bg[0] = " rgb(0, 255, 255)"
bg[1] = "rgb(58, 58, 58)"
bg[2] = "rgb(255, 0, 0)"
bg[3] = "rgb(89, 0, 255)"
bg[4] = "rgb(0, 0, 0)"
bg[5] = "rgb(72, 66, 124)"
bg[6] = "rgb(0, 255, 42)"
bg[7] = "rgb(0, 4, 255)"
bg[8] = "rgb(112, 172, 85)"
bg[9] = "rgb(132, 0, 255)"

//les textes entre les div
var txt = new Array();
txt[0] = "img0";
txt[1] = "img1";
txt[2] = "img2";
txt[3] = "img3";
txt[4] = "img4";
txt[5] = "img5";
txt[6] = "img6";
txt[7] = "img7";
txt[8] = "img8";
txt[9] = "img9";

for(var i=0 ;i<bg.length ; i++){
    img[i].style.backgroundColor = bg[i];     
}

//changer les backgrounds
function background(){
 var back = bg[9],image = txt[9];
 bg.pop();txt.pop();
 bg.unshift(back);txt.unshift(image);

 for(var i=0 ;i<bg.length ; i++){
    img[i].style.backgroundColor = bg[i];
    img[i].innerHTML = txt[i];     
 }
}

var temps = 2000;

//faire bouger les div mais cela ne change pas son style css
function anim(){
    img[0].animate({
        bottom: [5+"%",20+"%"],
        left: [40+"%",25+"%"]
    },temps);

    img[1].animate({
        bottom: [20+"%",35+"%"],
        left: [25+"%",15+"%"]
    },temps);

    img[2].animate({
        bottom: [35+"%",45+"%"],
        left: [15+"%",20+"%"]
    },temps);

    img[3].animate({
        bottom: [45+"%",55+"%"],
        left: [20+"%",26+"%"]
    },temps);

    img[4].animate({
        bottom: [55+"%",65+"%"],
        left: [26+"%",41+"%"]
    },temps);

    img[5].animate({
        bottom: [65+"%",55+"%"],
        left: [41+"%",55+"%"]
    },temps);

    img[6].animate({
        bottom: [55+"%",45+"%"],
        left: [55+"%",60+"%"]
    },temps)

    img[7].animate({
        bottom: [45+"%",35+"%"],
        left: [60+"%",65+"%"]
    },temps);

    img[8].animate({
        bottom: [35+"%",20+"%"],
        left: [65+"%",56+"%"]
    },temps);

    img[9].animate({
        bottom: [20+"%",5+"%"],
        left: [56+"%",40+"%"]
    },temps);
    
}

anim();//pour executer l'animation au chargement

//executer anim() et background() chaque 2000 millisecondes 
window.setInterval(() => {
    anim();
    background();
}, temps);