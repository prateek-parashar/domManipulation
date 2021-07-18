const btn = document.querySelector("button");

const section = document.querySelector("section");

btn.addEventListener("click", () => {
    if (section.className === "bg-red see-me") {
        section.className = "john-cena";
    } else {
        console.log("HERERE");
        section.className = "bg-red see-me";
    }
});
