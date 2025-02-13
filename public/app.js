"use strict";
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("#submit");
button.addEventListener("click", () => {
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let company = document.getElementById("company").value;
    let position = document.getElementById("position").value;
    let city = document.getElementById("location").value;
    let note = document.getElementById("note").value;
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
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("company").value = '';
    document.getElementById("position").value = '';
    document.getElementById("location").value = '';
    document.getElementById("note").value = '';
    liBtn.addEventListener("click", () => {
        ul.removeChild(li);
    });
    document.getElementById("name").focus();
});
