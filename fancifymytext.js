
function Font(){
document.getElementById("elementID").style.fontSize = "24px";
}
function stylechange(){
    if(document.getElementById("fancy").checked){
        document.getElementById("elementID").style.fontWeight = "bold";
        document.getElementById("elementID").style.color = "blue";
        document.getElementById("elementID").style.textDecoration = "underline";

    }
    if(document.getElementById("boring").checked){
        document.getElementById("elementID").style.fontWeight = "normal";
        document.getElementById("elementID").style.color = "black";
        document.getElementById("elementID").style.textDecoration = "none";
    }

}
function moo(){
    var text = document.getElementById("elementID").value;
    var newtext = text.toUpperCase() + "-MOO.";
    document.getElementById("elementID").value = newtext;
}


