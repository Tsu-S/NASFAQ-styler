function getValues() {
    var color1 = document.getElementById("values").elements[0].value;
    var color2 = document.getElementById("values").elements[1].value;
    var color3 = document.getElementById("values").elements[2].value;
    var backgroundurl = document.getElementById("values").elements[3].value;
    document.getElementById("gencss").innerHTML = color1+color2+color3+backgroundurl;
}

function getStyles() {
    var market = document.getElementById("styles").elements[0].checked;
    var activity = document.getElementById("styles").elements[1].checked;
    var floor = document.getElementById("styles").elements[2].checked;
    var info = document.getElementById("styles").elements[3].checked;
    var leaderboard = document.getElementById("styles").elements[4].checked;
    var supers = document.getElementById("styles").elements[5].checked;
    var benchmark = document.getElementById("styles").elements[6].checked;
    var gacha = document.getElementById("styles").elements[7].checked;
}
