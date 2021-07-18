const btn = document.querySelector("button");

const section = document.querySelector("section");

btn.addEventListener("click", () => {
    section.classList.toggle("john-cena");
});

const list = document.querySelector("ol");

const item = document.createElement("li");

item.innerText = "List Item 5";

const item2 = item.cloneNode(false);
