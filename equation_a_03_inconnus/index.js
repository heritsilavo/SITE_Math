var a = [1,1,1];
var b = [1,1,1];
var c = [1,1,1];
var r = [1,1,1];
var sol = [1,1,1];

document.querySelectorAll("input")[0].focus();
document.querySelectorAll("input")[12].style.display = "inline";
document.querySelectorAll("input")[13].style.display = "none";

function valid(){
    var complet = true;
    for(var i=0; i<12 ; i++){
        if(document.querySelectorAll('input')[i].value == ""){
            complet = false;
        }
    }
    if(complet == false){
        document.querySelectorAll("input")[12].style.display = "inline";
        document.querySelectorAll("input")[13].style.display = "none";
    }else{
        document.querySelectorAll("input")[13].style.display = "inline";
        document.querySelectorAll("input")[12].style.display = "none";
    }
    return complet;
}

function refresh(){
    if(!valid()){
        alert("veuillez remplir tous les coefficients!!");
    }
    a[0]=Number(document.getElementsByTagName("input")[0].value);
    a[1]=Number(document.getElementsByTagName("input")[1].value);
    a[2]=Number(document.getElementsByTagName("input")[2].value);
    
    r[0]=Number(document.getElementsByTagName("input")[3].value);

    b[0]=Number(document.getElementsByTagName("input")[4].value);
    b[1]=Number(document.getElementsByTagName("input")[5].value);
    b[2]=Number(document.getElementsByTagName("input")[6].value);
    
    r[1]=Number(document.getElementsByTagName("input")[7].value);

    c[0]=Number(document.getElementsByTagName("input")[8].value);
    c[1]=Number(document.getElementsByTagName("input")[9].value);
    c[2]=Number(document.getElementsByTagName("input")[10].value);
    
    r[2]=Number(document.getElementsByTagName("input")[11].value)
}

function calculer(){
    var d = [1,1];
    var e = [1,1];
    var s = [1,1];
    
    if(valid()){
        //tranformation en 2 inconuus par elimination
        d[0]=(a[1]*b[0])-(a[0]*b[1]);
        d[1]=(a[2]*b[0])-(a[0]*b[2]);

        s[0]=(r[0]*b[0])-(a[0]*r[0])

        e[0]=(b[1]*c[0])-(b[0]*c[1]);
        e[1]=(b[2]*c[0])-(b[0]*c[2]);

        s[1]=(r[1]*c[0])-(r[2]*b[0]);

        //calcul des resultats
        /*z*/sol[0]=((s[0]*e[0])-(d[0]*s[0]))/((d[1]*e[0])-(d[0]*e[1]));
        /*y*/sol[1]=(s[0]-(d[1]*sol[0]))/d[0];
        /*x*/sol[2]=(r[0]-(a[1]*sol[1])-(a[2]*sol[0]));    
    };
    //tranformation en 2 inconuus par elimination
    d[0]=(a[1]*b[0])-(a[0]*b[1]);
    d[1]=(a[2]*b[0])-(a[0]*b[2]);

    s[0]=(r[0]*b[0])-(a[0]*r[0])

    e[0]=(b[1]*c[0])-(b[0]*c[1]);
    e[1]=(b[2]*c[0])-(b[0]*c[2]);

    s[1]=(r[1]*c[0])-(r[2]*b[0]);

    //calcul des resultats
    /*z*/sol[0]=((s[0]*e[0])-(d[0]*s[0]))/((d[1]*e[0])-(d[0]*e[1]));
    /*y*/sol[1]=(s[0]-(d[1]*sol[0]))/d[0];
    /*x*/sol[2]=(r[0]-(a[1]*sol[1])-(a[2]*sol[0]));
}

function afficheResltat(){
    document.getElementById("x").value = sol[0];
    document.getElementById("y").value = sol[1];
    document.getElementById("z").value = sol[2];
}

var rei = document.querySelectorAll('input')[13];
rei.addEventListener("click", reinitialiser);

function reinitialiser(){
    for(var i=0 ; i<17 ; i++){
        if(i==12 || i==13){
            continue;
        }
        document.querySelectorAll("input")[i].value = "";
    }
    document.querySelectorAll("input")[0].focus();
    document.querySelectorAll("input")[12].style.display = "inline";
    document.querySelectorAll("input")[13].style.display = "none";
}