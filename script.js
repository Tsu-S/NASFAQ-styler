function getForm() {
    var color1 = document.getElementById("form").elements[0].value;
    var color2 = document.getElementById("form").elements[1].value;
    var color3 = document.getElementById("form").elements[2].value;
    var backgroundurl = document.getElementById("form").elements[3].value;
    document.getElementById("gencss").innerHTML = color1+color2+color3+backgroundurl;
}