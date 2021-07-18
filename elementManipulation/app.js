const btn = document.querySelector("button");

const section = document.querySelector("section");

btn.addEventListener("click", () => {
    section.classList.toggle("john-cena");
});

const list = document.querySelector("ol").children;

for (let i = 0; i < list.length; i++) {
    console.log(list[i].textContent);
}

console.log("The for of loop");

for (const li of list) {
    console.log(li.textContent);
}

console.log("The for in loop");

const person = { name: "Kenobi", profession: "Jedi" };

for (const key in person) {
    console.log(person[key]);
}
