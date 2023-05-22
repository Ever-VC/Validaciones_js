function validateInput(input, errorMessage) {

    if(!input.value) {
        input.classList.add("is-invalid");
        errorMessage.classList.add("invalid-feedback");
        return false;
    } else {
        input.classList.replace("is-invalid", "is-valid");
        return true;
    } 
}

export default validateInput;