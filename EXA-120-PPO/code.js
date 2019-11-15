document.addEventListener("DOMContentLoaded", init)

function init() {
//on apelle tous nos evenements
    document.addEventListener("DOMContentLoaded", page1)
    btn.addEventListener("click", page2)

}


function page1() {
    //une condition qui va lire le contenu des zone de text verifier si elles sont remplies
    // si elle le sont elle ajout la ligne mais si il y a des casses vides ou avec des valeurs invalides elle montre une ALERTE et n'ajoute pas la ligne au teableau
    //Mais qui marche pas
    if (inp1.value == !inp1 || inp2.value == !inp2) {
        // on cache le boutton si la conditon n'est pas réspectée
        // mais sa marche pas
        btn.classList.add("invisible")
        //on retire la classe invisible aux erreures pour les rendre visibole et indiquer que c'est faux
        erreur1.classList.remove("invisible")
        erreur2.classList.remove("invisible")
        erreur3.classList.remove("invisible")
        erreur4.classList.remove("invisible")
    } else {
        //si la condition est réspectée on affiche le boutton
        btn.classList.remove("invisible")
        //on stock la vlaeurs des inputes nom et prénom


        inp1 = document.getElementById("inp1").value;
        inp1 = document.getElementById("inp2").value;


        console.log("test")

    }

}

function page2() {
    //on echange la valeur des spane par le contenu des
    spn1 = document.getElementById("inp1").value;
    spn2 = document.getElementById("inp2").value;
}
