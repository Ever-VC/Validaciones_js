import validateInput from "./validateInput.js";

const validations = (e) => {
    e.preventDefault();

    //Validation for First name
    const fName = document.querySelector("#firstName");
    const errorMessage = document.querySelector(".col-sm-6").lastElementChild;
    validateInput(fName, errorMessage);
}

export default validations;