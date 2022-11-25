let button = document.getElementById("dark-button");
button.addEventListener("click", onClick());


function onClick() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


