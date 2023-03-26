

const meuTexto = document.querySelectorAll("input");
    const inputs = Array.from(meuTexto);

    inputs.map(input => input.setAttribute("size", input.value.trim().length  + "px"));
    inputs.map(input => input.addEventListener('input', function () {
    this.setAttribute("size", this.value.replace(/\s+/g, "").length + (this.value.match(/ /g) || []).length / 1.6);
}));

