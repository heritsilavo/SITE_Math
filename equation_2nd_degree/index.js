var coeff = [1,1,1];

function valid(){
    var complet = false;
    for(var j=0 ; j<3; j++){
        if(document.getElementsByTagName("input")[j].value == ""){
            complet = true;
        }
    }
    if(complet==true){
        alert("ERREUR!! Veullez remplir tous les coefficients !");
    }
}

function refresh(){
    for (let i=0; i<3; i++) {
        coeff[i]=Number(document.querySelectorAll("input")[i].value); 
    }
}

function calcul(){
    var delta = Math.pow(coeff[1], 2) - (4*coeff[0]*coeff[2])
    if(delta > 0){//si delta > O
        document.querySelectorAll("input")[6].value= (-coeff[1]+Math.sqrt(delta))/(2*coeff[0]);
        document.querySelectorAll("input")[7].value= (-coeff[1]-Math.sqrt(delta))/(2*coeff[0]);
    }else if(delta==0){//si delta = 0
        document.querySelectorAll("input")[6].value= (-coeff[1])/(2*coeff[0]);
        document.querySelector(".x2").style.display = "none";
        document.querySelector(".d_0").style.visibility = "visible";
    }else{//si delta < 0
        document.querySelector(".x1").style.display = "none";
        document.querySelector(".x2").style.display = "none";
        document.querySelector(".d_neg").style.visibility = "visible";
    }
}

document.querySelectorAll("input")[5].addEventListener("click", reset);
function reset(){
    for(var j=0 ; j<8; j++){
        switch(j){
            case 3:
            case 4:
            case 5:
                continue;
            default:
        }
        document.querySelectorAll("input")[j].value = null;       
    }
    document.querySelectorAll("input")[0].focus();
    document.querySelector(".x1").style.display = "inline-block";
    document.querySelector(".x2").style.display = "inline-block";
    document.querySelector(".d_neg").style.visibility = "hidden";
    document.querySelector(".d_0").style.visibility = "hidden";
}