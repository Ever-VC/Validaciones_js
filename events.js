// Trabajando con módulos
import validatePromo from "./validate.js";
import validations from "./validations.js";

const btnPromo = document.querySelector("[data-promo]");
const btnCheckout = document.querySelector("[data-submit]")

btnPromo.addEventListener('click', validatePromo);
btnCheckout.addEventListener('click', validations);