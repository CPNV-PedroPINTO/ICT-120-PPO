function Blue() {
    D1.style.backgroundColor = "lightblue"
    D1.style.textDecoration = "line-through"
}

function Clean() {
    D1.style.backgroundColor = "White"
    D1.style.textDecoration = "none"
}

function Arial() {
    D3.style.fontFamily = "Arial"

}

function Normal() {
    D3.style.fontFamily = ""
}

function YES() {
    if (D4_1.checked && D4_2.checked) {

        DIV4.style.backgroundColor = "Green"
        DIV4.style.color = "White"
        DIV4.style.border = "solid 0px black"
        document.getElementById("DIV4").innerHTML = "YES";

    }
}

function supr() {
    delet.style.display = "none"

}

function initiales() {
    initiale = ""
    longeur = 0
    espaces = ""
    initiale = nom.value.substr(0, 1)
    console.log(initiale)
    espaces = nom.value.lastIndexOf(" ")
    initiale = initiale + nom.value.substr(espaces + 1, 1)
    console.log(initiale)
    longeur = nom.value.length
    initiale = initiale + nom.value.substr(longeur - 1, 1)
    console.log(initiale)
    Ini.value = initiale.toUpperCase()
}


function AVM() {
    marques.disabled=true;
    pret.disabled=false;
    partez.disabled=true;

    marques.style.display = "inline";
    pret.style.display = "inline";
    partez.style.display = "inline";

    cours.src = "images/marks.png"
}

function Pret() {
    marques.disabled = true;
    pret.disabled = true;
    partez.disabled = false;

    marques.style.display = "none";
    pret.style.display = "inline";
    partez.style.display = "inline";
    cours.src = "images/set.png"

}

function Partez() {
    marques.disabled = true;
    pret.disabled = true;
    partez.disabled = true;

    marques.style.display = "none";
    pret.style.display = "none";
    partez.classList.remove("invisible")
    cours.src = "images/go.png"


    setTimeout (timeout, 3* 1000);

}
function timeout() {
    marques.disabled=false;
    pret.disabled=true;
    partez.disabled=true;

    marques.style.display = "inline";
    pret.style.display = "inline";
    partez.classList.add("invisible")

    cours.src = "images/empty.png"
}

function init() {

    D1.addEventListener("click", Blue)
    D2.addEventListener("click", Clean)
    D3.addEventListener("mouseover", Arial)
    D3.addEventListener("mouseleave", Normal)
    D4_1.addEventListener("click", YES)
    D4_2.addEventListener("click", YES)
    clicktxt.addEventListener("click", supr)
    D6.addEventListener("keyup", initiales)
    partez.style.display = "none"
    marques.addEventListener("click", AVM)
    pret.addEventListener("click", Pret)
    partez.addEventListener("click", Partez)
    cours.src = "images/empty.png"
}

document.addEventListener("DOMContentLoaded", init)

//document.getElementById("myText").value = "Johnny Bravo";
