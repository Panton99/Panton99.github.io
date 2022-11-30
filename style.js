let button = document.getElementById("dark-button");
button.addEventListener("click", onClick());


function onClick() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var form = document.getElementById("form");
var valFName = false;
var valLName = false;
var valEmail = false;

const valSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("/contact.html" , {
        method: "POST",
        headers: {"Content-type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(data).toString(),
    }).then(() => console.log("Successfully submitted")).catch((error) => alert("Somethings wrong!"));

};
document.querySelector("form").addEventListener("submit", valSubmit);

