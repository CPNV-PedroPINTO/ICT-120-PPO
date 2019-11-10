document.addEventListener("DOMContentLoaded", init);

function init() {


    cmdsave1.addEventListener("click", addline)
    killline1.addEventListener("click", killline)

}


function addline() {
    newtr = document.createElement('tr')
    newtd1 = document.createElement('td')
    newtd1.innerText = txtLieu.value
    newtd2 = document.createElement('td')
    newtd2.innertext = txtLieu2.value
    newtd3 = document.createElement('td')
    newtd3.innertext = transport.value
    newtd4 = document.createElement('td')
    newtd4.innertext = Date1.value
    newtd5 = document.createElement('td')
    newtd5.innertext = Date2.value
    newtd6 = document.createElement('td')
    newbtn = document.createElement('div')
    newtd6.appendChild(newbtn)
    newbtn.classList = "btn btn-danger"
    newbtn.innertext = 'supprimer'


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

function save1effect() {
    console.log('save1')
}



