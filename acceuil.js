var sec = document.querySelectorAll("section");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var list = document.querySelectorAll("li");
var long = document.querySelector("strong").innerText.length-3;//longueur de la chaine pour les transitions

var k=0;

document.querySelectorAll("strong span").forEach(element =>{
    var txt = element.innerText.split("");
    element.innerHTML = "";
    for(var i=0 ; i<txt.length ; i++){
        element.innerHTML += `<span style='transition:all ${k*0.08}s'> ${txt[i]}</span>`;
        k++;
        if(k==long){
            k=0;
        }
    }
})

prev.addEventListener("click",prevSec);
function prevSec(){
    for(var j=0 ; j<sec.length ; j++){
        if(sec[j].offsetLeft == 0){
            if(j == (sec.length-1)){
                sec[j].style.animation = "toLeft 2s forwards";
                sec[0].style.animation = "fromRight 2s forwards";    
            }else{
                sec[j].style.animation = "toLeft 2s forwards";
                sec[j+1].style.animation = "fromRight 2s forwards";
            }
            
        }
    }
}

next.addEventListener("click",nextSec);
function nextSec(){
    for(var j=0 ; j<sec.length ; j++){
        if(sec[j].offsetLeft == 0){
            if(j == 0){
                sec[j].style.animation = "toRight 2s forwards";
                sec[sec.length-1].style.animation = "fromLeft 2s forwards";    
            }else{
                sec[j].style.animation = "toRight 2s forwards";
                sec[j-1].style.animation = "fromLeft 2s forwards";
            }
            
        }
    }
}


list[0].onclick = function() {
    sec[0].style.animation = "toLeft 2s forwards";
    sec[1].style.animation = "fromRight 2s forwards";
}
list[1].onclick = function() {
    sec[0].style.animation = "toLeft 2s forwards";
    sec[2].style.animation = "fromRight 2s forwards";
}
list[2].onclick = function() {
    sec[0].style.animation = "toLeft 2s forwards";
    sec[3].style.animation = "fromRight 2s forwards";
}
list[3].onclick = function() {
    sec[0].style.animation = "toLeft 2s forwards";
    sec[4].style.animation = "fromRight 2s forwards";
}
list[4].onclick = function() {
    sec[0].style.animation = "toLeft 2s forwards";
    sec[5].style.animation = "fromRight 2s forwards";
}

//le boutons retourner a l'acceuil
for(var j=0 ; j<5 ; j++){
    document.querySelectorAll("#divs p")[j].addEventListener("click",toAcc);
}
function toAcc(){
    vers_cote();
    this.parentNode.style.animation = "toRight 2s forwards";
    sec[0].style.animation = "fromLeft 2s forwards"; 
}

//pour cacher tous les divs en dehors de l'ecran
setTimeout(() => {
    for(var k=0 ; k<sec.length ; k++){
        if(sec[k].offsetLeft==0){
            continue;
        }else{
            sec[k].style.right = "-100%";
        }
    }
}, 2000);

//navigation
var centre = false;
var temps = 1500;
var cote = document.querySelectorAll(".cote");
function centrer(){
    cote[0].animate({
        top: [25+"%",40+"%"],
        left: [10+"%",42+"%"]
    },temps);

    cote[1].animate({
        top: [3+"%",40+"%"],
        left: [42+"%",42+"%"]
    },temps);

    cote[2].animate({
        top: [70+"%",40+"%"],
        left: [23+"%",42+"%"]
    },temps);

    cote[3].animate({
        top: [70+"%",40+"%"],
        left: [60+"%",42+"%"]
    },temps);

    cote[4].animate({
        top: [27+"%",40+"%"],
        left: [75+"%",42+"%"]
    },temps);

    for(var j=0 ; j<cote.length ; j++){
        cote[j].style.top = "40%";
        cote[j].style.left = "42%";
    }

    centre = true;
}
function vers_cote(){
    cote[0].animate({
        top: [40+"%",25+"%"],
        left: [42+"%",10+"%"]
    },temps);

    cote[1].animate({
        top: [40+"%",3+"%"],
        left: [42+"%",42+"%"]
    },temps);

    cote[2].animate({
        top: [40+"%",70+"%"],
        left: [42+"%",23+"%"]
    },temps);

    cote[3].animate({
        top: [40+"%",70+"%"],
        left: [42+"%",60+"%"]
    },temps);

    cote[4].animate({
        top: [40+"%",27+"%"],
        left: [43+"%",75+"%"]
    },temps);

    cote[0].style.top = "25%";
    cote[0].style.left = "10%";
    
    cote[1].style.top = "3%";
    cote[1].style.left = "42%";
    
    cote[2].style.top = "70%";
    cote[2].style.left = "23%";
    
    cote[3].style.top = "70%";
    cote[3].style.left = "60%";
    
    cote[4].style.top = "27%";
    cote[4].style.left = "75%";

    centre = false;
}
function choisir(){
    if(centre == false){
        centrer();
    }else{
        vers_cote();
    }
    
}
choisir();
cote[0].onclick = function() {
    centrer();
    sec[0].style.animation = "toLeft 2s forwards";
    sec[1].style.animation = "fromRight 2s forwards";
}
cote[1].onclick = function() {
    centrer();
    sec[0].style.animation = "toLeft 2s forwards";
    sec[2].style.animation = "fromRight 2s forwards";
}
cote[2].onclick = function() {
    centrer();
    sec[0].style.animation = "toLeft 2s forwards";
    sec[3].style.animation = "fromRight 2s forwards";
}
cote[3].onclick = function() {
    centrer();
    sec[0].style.animation = "toLeft 2s forwards";
    sec[4].style.animation = "fromRight 2s forwards";
}
cote[4].onclick = function() {
    centrer();
    sec[0].style.animation = "toLeft 2s forwards";
    sec[5].style.animation = "fromRight 2s forwards";

}


document.querySelector(".bas").addEventListener("click",versFooter);
function versFooter(){
    window.scrollTo(0,1000)
}