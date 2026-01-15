const btnDelete1 = document.querySelector("#btn-delete1");
const temaSemana1 = document.querySelector("#tema-semana1");
const nameToQuit1 = document.querySelector("#name-to-quit1");
const temaSemana2 = document.querySelector("#tema-semana2");
const nameToQuit2 = document.querySelector("#name-to-quit2");
const btnDelete2 = document.querySelector("#btn-delete2");

const meuTexto = document.querySelectorAll("input");
const inputs = Array.from(meuTexto);

inputs.map((input) =>
  input.setAttribute("size", input.value.trim().length + "px")
);
inputs.map((input) =>
  input.addEventListener("input", function () {
    this.setAttribute(
      "size",
      this.value.replace(/\s+/g, "").length +
        (this.value.match(/ /g) || []).length / 0.7
    );
  })
);

btnDelete1.addEventListener("click", () => {
  temaSemana1.classList.toggle("hidden");
  nameToQuit1.classList.toggle("hidden");
});

btnDelete2.addEventListener("click", () => {
  temaSemana2.classList.toggle("hidden");
  nameToQuit2.classList.toggle("hidden");
});

// Botão para adicionar/remover tema de Faça Seu Melhor no Ministério - Semana 1
const btnMinisterio1 = document.querySelector("#btn-ministerio1");
const temaMinisterio1 = document.querySelector("#tema-ministerio1");
const nomeMinisterio1SP = document.querySelector("#nome-ministerio1-sp");
const nomeMinisterio1SA = document.querySelector("#nome-ministerio1-sa");

if (btnMinisterio1) {
  btnMinisterio1.addEventListener("click", () => {
    temaMinisterio1.classList.toggle("hidden");
    nomeMinisterio1SP.classList.toggle("hidden");
    nomeMinisterio1SA.classList.toggle("hidden");
  });
}

// Botão para adicionar/remover tema de Faça Seu Melhor no Ministério - Semana 1 (pagwith2.html)
const btnMinisterioSemana1 = document.querySelector("#btn-ministerio-semana1");
const temaMinisterioSemana1 = document.querySelector(
  "#tema-ministerio-semana1"
);
const nomeMinisterioSemana1SP = document.querySelector(
  "#nome-ministerio-semana1-sp"
);
const nomeMinisterioSemana1SA = document.querySelector(
  "#nome-ministerio-semana1-sa"
);

if (btnMinisterioSemana1) {
  btnMinisterioSemana1.addEventListener("click", () => {
    temaMinisterioSemana1.classList.toggle("hidden");
    nomeMinisterioSemana1SP.classList.toggle("hidden");
    nomeMinisterioSemana1SA.classList.toggle("hidden");
  });
}

// Botão para adicionar/remover tema de Faça Seu Melhor no Ministério - Semana 2 (pagwith2.html)
const btnMinisterioSemana2 = document.querySelector("#btn-ministerio-semana2");
const temaMinisterioSemana2 = document.querySelector(
  "#tema-ministerio-semana2"
);
const nomeMinisterioSemana2SP = document.querySelector(
  "#nome-ministerio-semana2-sp"
);
const nomeMinisterioSemana2SA = document.querySelector(
  "#nome-ministerio-semana2-sa"
);

if (btnMinisterioSemana2) {
  btnMinisterioSemana2.addEventListener("click", () => {
    temaMinisterioSemana2.classList.toggle("hidden");
    nomeMinisterioSemana2SP.classList.toggle("hidden");
    nomeMinisterioSemana2SA.classList.toggle("hidden");
  });
}
