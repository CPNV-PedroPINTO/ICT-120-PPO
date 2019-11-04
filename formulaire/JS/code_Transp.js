document.addEventListener("DOMContentLoaded", init);


function init (){
    cmdsave.addEventListener("click",  cmdsave1);
}


function cmdsave1() {
    lul = document.createElement();
   lul.innerText = txtLieu.value;
    console.log('yo');
}

