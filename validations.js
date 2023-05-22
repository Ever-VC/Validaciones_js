import validateInput from "./validateInput.js";
import validateSelect from "./validateSelect.js";
import validateCheckBox from "./validateCheckBox.js";

const validations = (e) => {
    e.preventDefault();

    //Validation for First name
    const fName = document.querySelector("#firstName");
    const errorMessageF = fName.nextElementSibling;
    validateInput(fName, errorMessageF);

    //Validation for Last name
    const lName = document.querySelector("#lastName");
    const errorMessageL = lName.nextElementSibling;
    validateInput(lName, errorMessageL);

    //Validation for username
    const userName = document.querySelector("#username");
    const errorMessageUser = userName.nextElementSibling;
    validateInput(userName, errorMessageUser);

    //Validation for email
    /* const email = document.querySelector("#email");
    const errorMessageEmail = email.nextElementSibling;
    validateInput(email, errorMessageEmail); */

    //Validation for address
    const address = document.querySelector("#address");
    const errorMessageAddress = address.nextElementSibling;

    if (address.value.length > 10 || address.value.length === 0) {
        errorMessageAddress.textContent = "Please enter your shipping address."
        validateInput(address, errorMessageAddress);
    } else { 
        address.classList.add("is-invalid");
        errorMessageAddress.classList.add("invalid-feedback");
        errorMessageAddress.textContent = "Please enter a valid address.";
    }

    //Validation for select
    const country = document.querySelector("#country");
    const errorMessageSelect = country.nextElementSibling;
    validateSelect(country, errorMessageSelect);

    //Validation for select
    const state = document.querySelector("#state");
    state.nextElementSibling.setAttribute("display", "block");
    const errorMessageState = state.nextElementSibling;
    validateSelect(state, errorMessageState);

    //Validation for zip code
    const zip = document.querySelector("#zip");
    const errorMessageZip = zip.nextElementSibling;
    validateInput(zip, errorMessageZip);

    //Validation for nane on card
    const nameCard = document.querySelector("#cc-name");
    const errorMessageNameCard = nameCard.nextElementSibling;
    validateInput(nameCard, errorMessageNameCard);

    //Validation for nane on card
    const checkBox = document.querySelector("#same-address");
    const errorMessageCheckBox = checkBox.nextElementSibling;

    //Validation for nane on card
    const checkBox2 = document.querySelector("#same-address");
    const errorMessageCheckBox2 = checkBox2.nextElementSibling;
    validateCheckBox(checkBox, checkBox2, errorMessageCheckBox2);

    //Validation for credit card number
    const numberCard = document.querySelector("#cc-number");
    const errorMessageNumberCard = numberCard.nextElementSibling;
    validateInput(numberCard, errorMessageNumberCard);

    //Validation for expiration date
    const expiration = document.querySelector("#cc-expiration");
    const errorMessageExpiration = expiration.nextElementSibling;
    validateInput(expiration, errorMessageExpiration);

    //Validation for ccv
    const cvv = document.querySelector("#cc-cvv");
    const errorMessageCvv = cvv.nextElementSibling;
    validateInput(cvv, errorMessageCvv);
    
}

export default validations;