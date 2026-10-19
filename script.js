//your JS code here. If required.
let dropdown = document.getElementById("colorSelect")
let button = document.querySelector("input")

button.onclick = function () {
    let selectelem = dropdown.option[dropdown.selectedIndex];

    selectelem.remove()
} 