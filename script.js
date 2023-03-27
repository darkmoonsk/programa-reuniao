const btnDelete1 = document.querySelector("#btn-delete1");
const temaSemana1 = document.querySelector("#tema-semana1");
const nameToQuit1 = document.querySelector("#name-to-quit1");
const temaSemana2 = document.querySelector("#tema-semana2");
const nameToQuit2 = document.querySelector("#name-to-quit2");
const btnDelete2 = document.querySelector("#btn-delete2");


const meuTexto = document.querySelectorAll("input");
    const inputs = Array.from(meuTexto);

    inputs.map(input => input.setAttribute("size", input.value.trim().length  + "px"));
    inputs.map(input => input.addEventListener('input', function () {
    this.setAttribute("size", this.value.replace(/\s+/g, "").length + (this.value.match(/ /g) || []).length / 1.6);
}));

btnDelete1.addEventListener("click", () => {
    temaSemana1.classList.toggle("hidden");
    nameToQuit1.classList.toggle("hidden");
});

btnDelete2.addEventListener("click", () => {
    temaSemana2.classList.toggle("hidden");
    nameToQuit2.classList.toggle("hidden");
});

