let ul = document.querySelector("ul")!;
let input = document.querySelector("input")!;
let button = document.querySelector("#submit")!;

button.addEventListener("click", () => {

    let username = (<HTMLInputElement>document.getElementById("name")).value!;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let phone = (<HTMLInputElement>document.getElementById("phone")).value;
    let company = (<HTMLInputElement>document.getElementById("company")).value;
    let position = (<HTMLInputElement>document.getElementById("position")).value;
    let city = (<HTMLInputElement>document.getElementById("location")).value;
    let note = (<HTMLInputElement>document.getElementById("note")).value;

    let contact = [`Name: ${username}`, `Email: ${email}`, `Phone: ${phone}`, `Company: ${company}`, `Location: ${position}`, `Location: ${city}`, `Notes: ${note}`];

    let li = document.createElement("li");
    let liText = document.createElement("span");
    let liBtn = document.createElement("button");
    let text = contact.join(" | ");

    li.appendChild(liText);
    liText.innerText = text;
    li.appendChild(liBtn);
    liBtn.textContent = "Delete";
    ul.appendChild(li);

    (<HTMLInputElement>document.getElementById("name")).value = '';
    (<HTMLInputElement>document.getElementById("email")).value = '';
    (<HTMLInputElement>document.getElementById("phone")).value = '';
    (<HTMLInputElement>document.getElementById("company")).value = '';
    (<HTMLInputElement>document.getElementById("position")).value = '';
    (<HTMLInputElement>document.getElementById("location")).value = '';
    (<HTMLInputElement>document.getElementById("note")).value = '';

    liBtn.addEventListener("click", () => {
        ul.removeChild(li);
    });

    (<HTMLInputElement>document.getElementById("name")).focus();
    
});