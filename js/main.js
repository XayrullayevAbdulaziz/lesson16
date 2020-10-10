console.log("salom")
function meningfunksiyam() {
    console.log("aaaaa")
}
document.getElementById("text").innerText='<b>qaaa</b>'
document.getElementById("text1").innerHTML='<b>qaaa</b>'
function yon() {
document.getElementById("rasm").src="images/doc_2020-01-23_17-54-19.gif"
}
function och() {
    document.getElementById("rasm").src="images/pic_bulboff.gif"
}
function yonoch() {

    if(document.getElementById("rasm").src=="http://localhost:63342/lesson16/images/doc_2020-01-23_17-54-19.gif"){
        document.getElementById("rasm").src="images/pic_bulboff.gif"
        document.getElementById("but").innerText='yon'
      document.getElementById("body").style.backgroundColor='black'
    }
    else {
        document.getElementById("rasm").src="images/doc_2020-01-23_17-54-19.gif"
        document.getElementById("but").innerText='och'
        document.getElementById("body").style.backgroundColor='white'
    }

}