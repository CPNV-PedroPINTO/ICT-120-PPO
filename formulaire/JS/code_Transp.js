document.addEventListener("DOMContentLoaded", init);

function init() {
    cmdsave.addEventListener("click", cmdsave1);
}

function addcol() {
    rows = tblBody.children
    for (i = 0; i < rows.length; i++) {
        tr = rows[i]
        newtd = document.createElement('td')
        newtd.innerText = 'Nouvelle ligne ' + i
        tr.appendChild(newtd)
    }
}

function cmdsave1() {
    ligne1 = document.createElement();
    ligne1.innerText = txtLieu.value;
    console.log('yo');
}

function addline() {
    newtr = document.createElement('tr')
    newtd1 = document.createElement('td')
    newtd1.innerText = 'ma'
    newtd2 = document.createElement('td')
    newtd2.innertext = 'Dalton'
    newtd3 = document.createElement('td')
    newdiv = document.createElement('div')
    newdiv.innerText = 'supprimer'
    newdiv.className = 'btn btn-danger'
    newdiv.addEventListener('click', killline)
    newtd3.appendChild(newdiv)
    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    tblbody.appendChild(newtr)
}

function killline(event) {
    button = event.target
    td = button.parentNode
    tr = td.parentNode
    table = tr.parentNode
    table.removeChild(tr)
}