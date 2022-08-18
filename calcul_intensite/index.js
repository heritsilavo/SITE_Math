var r1=0,r2=0,r3=0,r4=0,U=0,req=0;
var i = [1,1,1,1];
var u = [1,1,1,1];

document.getElementById("r1").focus();
document.getElementById("calculer").style.display = "inline";
document.getElementById("reinitialiser").style.display = "none";
 
function valid(){
    var complet = true;
    for(var j=2; j<7 ; j++){
        if(document.getElementsByTagName("input")[j].value == ""){
            complet = false;
        }
    }
    
    if(complet==false){
        document.getElementById("calculer").style.display = "inline";
        document.getElementById("reinitialiser").style.display = "none";        
    }else{
        document.getElementById("calculer").style.display = "none";
        document.getElementById("reinitialiser").style.display = "inline";
    }
    return complet;
}

function refresh(){
    if(!valid()){
        alert("Veuillez remplir tous les données requis!!")
    }
    if(valid){
        r1 = Number(document.getElementById("r1").value);
        r2 = Number(document.getElementById("r2").value);
        r3 = Number(document.getElementById("r3").value);
        r4 = Number(document.getElementById("r4").value);
        U = Number(document.getElementById("U").value);
    }
}

function calcul(){
    req = r1 + r3 + ((r2*r4)/(r2+r4));
    /*i1*/i[0]=U/req;
    /*i2*/i[1]=(r4*i[0])/(r4+r2);
    /*i3*/i[2]=i[0]-i[1];
    /*i4*/i[3]=i[0];
        
    /*u1*/u[0]=i[0]/r1;
    /*u2*/u[1]=i[1]/r2;
    /*u3*/u[2]=i[2]/r3;
    /*u4*/u[3]=i[3]/r4;
}

function afficherResultat(){
    document.getElementById("i1").value = i[0];
    document.getElementById("i2").value = i[1];
    document.getElementById("i3").value = i[2];
    document.getElementById("i4").value = i[3];
    document.getElementById("u1").value = u[0];
    document.getElementById("u2").value = u[1];
    document.getElementById("u3").value = u[2];
    document.getElementById("u4").value = u[3];
}

document.getElementById("reinitialiser").addEventListener("click",reinitialiser);

function reinitialiser(){
    for(var j=2 ; j<15 ; j++){
        document.querySelectorAll("input")[j].value = "";
    }
    document.getElementById("calculer").style.display = "inline";
    document.getElementById("reinitialiser").style.display = "none";
}
