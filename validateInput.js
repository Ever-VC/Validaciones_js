function validateInput(fName, errorMessage) {

    if(!fName.value) {
        fName.classList.add("is-invalid");
        errorMessage.classList.add("invalid-feedback");
        return false;
    } else {
        fName.classList.replace("is-invalid", "is-valid");
        return true;
    } 
}

export default validateInput;