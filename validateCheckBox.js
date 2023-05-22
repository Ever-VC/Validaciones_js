function validateCheckBox(check1, check2, errorMessage) {  
    if(check1.checked) {
        console.log("Esta chekeado");
        errorMessage.classList.replace("invalid-feedback", "invalid-feedback");
        return false;
    } else {
        return true;
    } 
}

export default validateCheckBox;