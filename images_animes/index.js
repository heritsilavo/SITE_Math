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
bg[0] = "url(bg0.jpg)"
bg[1] = "url(bg1.jpg)"
bg[2] = "url(bg2.jpg)"
bg[3] = "url(bg3.jpg)"
bg[4] = "url(bg4.jpg)"
bg[5] = "url(bg5.jpg)"
bg[6] = "url(bg6.jpg)"
bg[7] = "url(bg7.jpg)"
bg[8] = "url(bg8.jpg)"
bg[9] = "url(bg9.jpg)"

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

img[0].background = ""

for(var i=0 ;i<bg.length ; i++){
    img[i].style.backgroundColor = bg[i];     
}

//changer les backgrounds
function background(){
 var back = bg[9];
 var image = txt[9];
 bg.pop();
 txt.pop();
 bg.unshift(back);
 txt.unshift(image);

 for(var i=0 ;i<bg.length ; i++){
    img[i].style.background = bg[i];
    img[i].innerHTML = txt[i];     
 }
}

var temps = 2000;

//faire bouger les div mais cela ne change pas son style css
function anim(){
    img[0].animate({
        bottom: [15+"%",30+"%"],
        left: [40+"%",25+"%"]
    },temps);

    img[1].animate({
        bottom: [30+"%",45+"%"],
        left: [25+"%",15+"%"]
    },temps);

    img[2].animate({
        bottom: [45+"%",55+"%"],
        left: [15+"%",20+"%"]
    },temps);

    img[3].animate({
        bottom: [55+"%",65+"%"],
        left: [20+"%",26+"%"]
    },temps);

    img[4].animate({
        bottom: [65+"%",75+"%"],
        left: [26+"%",41+"%"]
    },temps);

    img[5].animate({
        bottom: [75+"%",65+"%"],
        left: [41+"%",55+"%"]
    },temps);

    img[6].animate({
        bottom: [65+"%",55+"%"],
        left: [55+"%",60+"%"]
    },temps)

    img[7].animate({
        bottom: [55+"%",45+"%"],
        left: [60+"%",65+"%"]
    },temps);

    img[8].animate({
        bottom: [45+"%",30+"%"],
        left: [65+"%",56+"%"]
    },temps);

    img[9].animate({
        bottom: [30+"%",15+"%"],
        left: [56+"%",40+"%"]
    },temps);
    
}

anim();//pour executer l'animation au chargement

//executer anim() et background() chaque 2000 millisecondes 
window.setInterval(() => {
    anim();
    background();
}, temps);