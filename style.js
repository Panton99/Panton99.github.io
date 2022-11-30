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

    fetch("/" , {
        method: "POST",
        headers: {"Content-type": "application/x-www-form-urlendcoded"},
        body: new URLSearchParams(data).toString(),
    }).then(() => console.log("Successfully submitted")).catch((error) => alert("Somethings wrong!"));

};
document.querySelector("form").addEventListener("submit", valSubmit);




// function validateName(val, status) {
//     var regex = /^[a-zA-Z]*$/;
//     if(val.value.length > 0) {
//         return true;
//     }
//     if (regex.test(val.value)) {
//         return true;
//     }
// }

// function validiation(val) {
//     val.preventDefault();
//     var data = new FormData(val.target);
//     valFName = validateName(document.getElementById('firstName'), valFName);
//     valLName = validateName(document.getElementById('lastName'), valLName);
//     var msg = documnte.getElementById("submitMsg");

//     if (!valFName || !valLName) {
//         alert("Type your name.");
//     }

//     fetch(val.target.action, {
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(res => {
//         msg.innerHTML = "Thank you for the submission!";
//         form.reset();
//     }).catch(error => {
//         msg.innerHTML = "There was a problem submitting your form. Try again."
//     });
// }
// form.addEventListener("submit", validiation)
