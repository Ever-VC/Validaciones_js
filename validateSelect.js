function validateSelect(option, errorMessage) {
    if(option.selectedIndex === 0 || option.selectedIndex === null) {
        option.classList.add("is-invalid");
        errorMessage.classList.add("invalid-feedback");
        return false;
    } else {
        option.classList.replace("is-invalid", "is-valid");
        return true;
    } 
}

export default validateSelect;