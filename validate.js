const validatePromo = (e) => {
    e.preventDefault();
    const code = document.querySelector("[data-code]").value;
    
    if(!code) {
        const message = document.querySelector("[data-promo-error]");
        e.target.classList.remove("btn-secondary");
        e.target.classList.add("btn-danger");
        message.textContent = "No debe dejar vacío este campo.";
        message.classList.add("text-danger");
        return false;
    }

    if (code.length > 2 && code === '123') {
        const message = document.querySelector("[data-promo-error]");
        e.target.classList.toggle("btn-danger");
        e.target.classList.toggle("btn-secondary");
        e.target.classList.add("btn-success");
        message.textContent = "Código válido. Aplicado 10% de descuento.";
        message.classList.toggle("text-danger");
        message.classList.add("text-success");
        return true;
    }
}

export default validatePromo;