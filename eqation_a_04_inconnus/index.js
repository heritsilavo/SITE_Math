var a = [1,1,1,1];
var b = [1,1,1,1];
var c = [1,1,1,1];
var d = [1,1,1,1];
var r = [1,1,1,1];
var sol = [1,1,1,1];

function valid(){
    var complet = false;
    for(var j=0 ; j<20; j++){
        if(document.getElementsByTagName("input")[j].value == ""){
            complet = true;
        }
    }
    if(complet==true){
        alert("ERREUR!! Veullez remplir tous les coefficients !");
        document.querySelectorAll("input")[20].style.display = "none";
    }else{
        document.querySelectorAll("input")[20].style.display = "inline";
    }
}

function refresh(){
    a[0]=Number(document.getElementsByTagName("input")[0].value);
    a[1]=Number(document.getElementsByTagName("input")[1].value);
    a[2]=Number(document.getElementsByTagName("input")[2].value);
    a[3]=Number(document.getElementsByTagName("input")[3].value);
    
    r[0]=Number(document.getElementsByTagName("input")[4].value);

    b[0]=Number(document.getElementsByTagName("input")[5].value);
    b[1]=Number(document.getElementsByTagName("input")[6].value);
    b[2]=Number(document.getElementsByTagName("input")[7].value);
    b[3]=Number(document.getElementsByTagName("input")[8].value);
    
    r[1]=Number(document.getElementsByTagName("input")[9].value);

    c[0]=Number(document.getElementsByTagName("input")[10].value);
    c[1]=Number(document.getElementsByTagName("input")[11].value);
    c[2]=Number(document.getElementsByTagName("input")[12].value);
    c[3]=Number(document.getElementsByTagName("input")[13].value);
    
    r[2]=Number(document.getElementsByTagName("input")[14].value);

    d[0]=Number(document.getElementsByTagName("input")[15].value);
    d[1]=Number(document.getElementsByTagName("input")[16].value);
    d[2]=Number(document.getElementsByTagName("input")[17].value);
    d[3]=Number(document.getElementsByTagName("input")[18].value);
    
    r[3]=Number(document.getElementsByTagName("input")[19].value);
}

function calculer(){
    var e = [1,1,1];
    var f = [1,1,1];
    var g = [1,1,1];
    var s = [1,1,1];
    var h = [1,1];
    var i = [1,1];
    var t = [1,1];

    //3 inconnus
    e[0]=((a[1]*b[0])-(b[1]*a[0]));
    e[1]=((a[2]*b[0])-(b[2]*a[0]));
    e[2]=((a[3]*b[0])-(b[3]*a[0]));
        
    f[0]=((c[1]*d[0])-(d[1]*c[0]));
    f[1]=((c[2]*d[0])-(d[2]*c[0]));
    f[2]=((c[3]*d[0])-(d[3]*c[0]));

    g[0]=((a[1]*c[0])-(c[1]*a[0]));
    g[1]=((a[2]*c[0])-(c[2]*a[0]));
    g[2]=((a[3]*c[0])-(c[3]*a[0]));

    s[0]=((r[0]*b[0])-(r[1]*a[0]));
    s[1]=((r[2]*d[0])-(r[3]*c[0]));
    s[2]=((r[0]*c[0])-(r[2]*a[0]));

    //2 inconnus
    h[0]=((e[1]*f[0])-(f[1]*e[0]));
    h[1]=((e[2]*f[0])-(f[2]*e[0]));

    var n = ((f[1]*g[0])-(g[1]*f[0]));
    var n1 = ((f[2]*g[0])-(g[2]*f[0]));
    i[0] = ((f[1]*g[0])-(g[1]*f[0]));
    i[1] = ((f[1]*g[0])-(g[1]*f[0]));

    t[0]=((s[0]*f[0])-(e[0]*s[1]));
    t[1]=((s[1]*g[0])-(s[2]*f[0]));
    
    //les solutions
    /*y*/sol[2]=((t[0]*i[0])-(h[0]*t[1]))/((h[1]*i[0])-(h[0]*i[1]));
    /*x*/sol[1]=(t[1]-(i[1]*sol[2]))/i[0];
    /*z*/sol[3]=(s[0]-(e[0]*sol[1])-(e[1]*sol[2]))/e[2]
    /*w*/sol[0]=(r[0]-(a[1]*sol[1])-(a[2]*sol[2])-(a[3]*sol[3]))/a[0];
}

function afficheResltat(){
    document.getElementById("w").value = sol[0];
    document.getElementById("x").value = sol[1];
    document.getElementById("y").value = sol[2];
    document.getElementById("z").value = sol[3];
}

var res = document.querySelectorAll("input")[21];
res.addEventListener('click', resGo);
function resGo(){
    document.querySelectorAll("input")[21].style.zIndex = "0";
    document.querySelectorAll("input")[20].style.zIndex = "99";
}

var rei = document.querySelectorAll('input')[20];
rei.addEventListener("click", reiGo);
function reiGo(){
    for(var j=0 ; j<26 ; j++){
        if(j==20 || j==21){
            continue;
        }
        document.querySelectorAll("input")[j].value = "";
    }
    document.querySelectorAll("input")[0].focus();
    document.querySelectorAll("input")[20].style.zIndex = "0";
    document.querySelectorAll("input")[21].style.zIndex = "99";
}