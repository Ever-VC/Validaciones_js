function validateInput(fName, errorMessage) {

    if(!fName.value) {
        fName.classList.add("is-invalid");
        errorMessage.classList.replace("invalid-feedback", "text-danger");
        return false;
    } else {
        errorMessage.classList.replace("text-danger", "invalid-feedback");
        return true;
    } 
}

export default validateInput;