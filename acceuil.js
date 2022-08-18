var sec = document.querySelectorAll("section");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var list = document.querySelectorAll("li");

document.querySelectorAll(".title").forEach(element =>{
    var txt = element.innerHTML;
    element.innerHTML = "";
    for(var i=0 ; i<txt.length ; i++){
        element.innerHTML += `<span style="transition-delay: ${0.02 * i}s">${txt.charAt(i)}</span>`
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
