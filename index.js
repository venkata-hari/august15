var button = document.getElementById("button");
button.onclick = function() {
    var person = prompt("Enter Your Name");
    if (person != null) {
        document.getElementById("p").innerHTML = " " + person;
        document.getElementsByClassName("button")[0].style.display = "none"
        document.getElementById("s1").style.display = "block"
        document.getElementById("body").style.backgroundColor = "#91c749"
        document.getElementById("s2").style.display = "block"
    }
    if (person == "") {
        alert("please enter name");
        document.getElementsByClassName("button")[0].style.display = "block"
        document.getElementById("s1").style.display = "none"
        document.getElementById("body").style.backgroundColor = "white"
        document.getElementById("s2").style.display = "none"

    }
}