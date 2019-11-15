//cette ligne de code lancera a l'ouverture de la page la fonctio  init
document.addEventListener("DOMContentLoaded", init);

//cette ligne de code nous permets d'utiliser les evenements qu'on y mettera dedans
function init() {

    //cette ligne déclanchera l'evenemnt ajouterligne quant on cliquera sur le bouton cmdsave
    cmdsave.addEventListener("click", ajouterligne)

    //cette ligne déclanchera l'evenemnt killline quant on cliquera sur le bouton Killline1
    killline1.addEventListener("click", killline)

}

//fonction qui sert ajouter une ligne avec tous le contenu des zone textes indiqué
function ajouterligne() {
    //une condition qui va lire le contenu des zone de text verifier si elles sont remplies
    // si elle le sont elle ajout la ligne mais si il y a des casses vides ou avec des valeurs invalides elle montre une ALERTE et n'ajoute pas la ligne au teableau
    if (txtLieu.value == !txtLieu || txtLieu2.value == !txtLieu2 || transport.value == !transport || date.value == !date || date2.value == !date2) {
        //cette ALERTE apartaitera des qu'une INPUT de la console contiendra soit pas de valuer soit une valuer invalide (ex. une ville qui se nomme "   *espace*   ")
        alert("Veuillez rentré les valleurs manquantes")
    } else {
        //cette condition IF nous demande a l'aide d'une ALERTE si on veut vraiment ajouter la ligne
        // si on dit OK elle l'ajoute et si on dit ANNULER elle ne l'ajout pas
        if (confirm("Voulez-vous vraiment ajouter cet cette ligne ?")) {

            //cette ligne de code va nous créer un élément TR donc une nouvelle ligne (Table Row)
            newtr = document.createElement('tr')

            //cette ligne va nous créer un élément TD donc le contenu de la ligne (Table Data)
            // et le newtd1 indiquera l'emplacement dans le tableau
            newtd1 = document.createElement('td')

            //cette ligne de code dira que le contenu de la TD sera = a la valeur introduite dans la zone de text txtLieu
            newtd1.innerText = txtLieu.value

            //cette ligne va nous créer un élément TD donc le contenu de la ligne (Table Data)
            // et le newtd2 indiquera l'emplacement dans le tableau
            newtd2 = document.createElement('td')

            //cette ligne de code dira que le contenu de la TD sera = a la valeur introduite dans la zone de text txtLieu2
            newtd2.innerText = txtLieu2.value

            //cette ligne va nous créer un élément TD donc le contenu de la ligne (Table Data)
            // et le newtd3 indiquera l'emplacement dans le tableau
            newtd3 = document.createElement('td')

            //cette ligne de code dira que le contenu de la TD sera = a la valeur introduite dans la zone de text transport
            newtd3.innerText = transport.value

            //cette ligne va nous créer un élément TD donc le contenu de la ligne (Table Data)
            // et le newtd4 indiquera l'emplacement dans le tableau
            newtd4 = document.createElement('td')

            //cette ligne de code dira que le contenu de la TD sera = a la valeur introduite dans la zone de text date
            newtd4.innerText = date.value

            //cette ligne va nous créer un élément TD donc le contenu de la ligne (Table Data)
            // et le newtd5 indiquera l'emplacement dans le tableau
            newtd5 = document.createElement('td')

            //cette ligne de code dira que le contenu de la TD sera = a la valeur introduite dans la zone de text date
            newtd5.innerText = date2.value

            //cette ligne va nous créer un élément TD donc le contenu de la ligne (Table Data)
            // et le newtd5 indiquera l'emplacement dans le tableau
            newtd6 = document.createElement('td')

            //cette ligne va nous créer un élément DIV (qui sera un bouton avec de classe bootstarp)
            // et le newbtn indiquera l'emplacement dans le tableau
            newbtn = document.createElement('div')

            //cette ligne de code ajoute a la DIV stockée dans le newbtn des classes bootstrap qui la feront devenir un bouton
            newbtn.classList = "btn btn-danger"

            //cette ligne de code indiquera que dans le button il sera écrit Supprimer
            newbtn.innerText = 'Supprimer'

            //cette ligne de code indiquera que lorsque on cliquera sur le bouton créé dans le tableau (newbtn)
            // on déclanchera l'événment killline se qui suprimera la ligne en question
            newbtn.addEventListener('click', killline)

            //cette ligne de code ajoutera a la ligne 6 (le parent) le boutton stocké dans newbtn (l'enfant)
            newtd6.appendChild(newbtn)

            //cette ligne de code ajoutera a la TR (le parent) le contenu de newtd1(l'enfant) a la 1er colone du tableau
            newtr.appendChild(newtd1)

            //cette ligne de code ajoutera a la ligne 6 (le parent) le contenu de newtd2(l'enfant) a la 1er colone du tableau
            newtr.appendChild(newtd2)

            //cette ligne de code ajoutera a la ligne 6 (le parent)  le contenu de newtd3(l'enfant) a la 1er colone du tableau
            newtr.appendChild(newtd3)

            //cette ligne de code ajoutera a la ligne 6 (le parent) le contenu de newtd4(l'enfant) a la 1er colone du tableau
            newtr.appendChild(newtd4)

            //cette ligne de code ajoutera a la ligne 6 (le parent) le contenu de newtd5(l'enfant) a la 1er colone du tableau
            newtr.appendChild(newtd5)

            //cette ligne de code ajoutera a la ligne 6 (le parent)  le contenu de newtd6(l'enfant) a la 1er colone du tableau
            newtr.appendChild(newtd6)

            //cette ligne ajouter au tableau (tblbody (le parent)) la ligne newtr ainsi que tous les newtd et leurs contenu qui y on été ajouté
            tblbody.appendChild(newtr)
        }
    }
}


// foction qui permets de suprimer une ligne
function killline(event) {
    //Une conditon IF que montre une ALERTE avant de suprimer la ligne
    if (confirm("Voulez-vous vraiment supprimer cette ligne ?")) {
        button = event.target
        td = button.parentNode
        tr = td.parentNode
        table = tr.parentNode
        table.removeChild(tr)
    }
}




