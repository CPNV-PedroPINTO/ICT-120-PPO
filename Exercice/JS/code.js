function Blue() {
    D1.style.backgroundColor="lightblue"
    D1.style.textDecoration="line-through"
}
function Clean(){
    D1.style.backgroundColor="White"
    D1.style.textDecoration="none"
}
function Arial(){
    D3.style.fontFamily="Arial"

}
function Normal() {
    D3.style.fontFamily=""
}
function init(){

    D1.addEventListener("click",Blue)
    D2.addEventListener("click",Clean)
    D3.addEventListener("mouseover",Arial)
    D3.addEventListener("mouseleave",Normal)
}
document.addEventListener("DOMContentLoaded",init)