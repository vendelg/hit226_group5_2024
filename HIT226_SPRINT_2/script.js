document.getElementById("userInfoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // variables created for the scripts
    var firstNameInput = document.getElementById("firstname");
    var lastNameInput = document.getElementById("lastname");
    var mobileNumberInput = document.getElementById("mobilenumber");
    var customerEmailInput = document.getElementById("customerEmail");
    var addressInput = document.getElementById("address");

    // error variables created for the scripts
    var firstNameError = document.getElementById("firstnameError");
    var lastNameError = document.getElementById("lastnameError");
    var mobileNumberError = document.getElementById("mobilenumberError");
    var customerEmailError = document.getElementById("customerEmailError");
    var addressError = document.getElementById("addressError");
    var isValid = true;

    // if statement that checks if the website inputs are all valid
    if (!firstNameInput.value) {
        firstNameError.style.display = "block";
        isValid = false;
    } else {
        firstNameError.style.display = "none";
    }

    if (!lastNameInput.value) {
        lastNameError.style.display = "block";
        isValid = false;
    } else {
        lastNameError.style.display = "none";
    }

    if (!mobileNumberInput.checkValidity()) {
        mobileNumberError.style.display = "block";
        isValid = false;
    } else {
        mobileNumberError.style.display = "none";
    }

    if (!customerEmailInput.checkValidity()) {
        customerEmailError.style.display = "block";
        isValid = false;
    } else {
        customerEmailError.style.display = "none";
    }

    if (!addressInput.value) {
        addressError.style.display = "block";
        isValid = false;
    } else {
        addressError.style.display = "none";
    }


    // script for submit button
    if (isValid) {
        var userInfoDiv = document.getElementById("userInfo");
        var userInfoHTML = "<strong>User Information:</strong><br>";
        userInfoHTML += "First Name: " + firstNameInput.value + "<br>";
        userInfoHTML += "Last Name: " + lastNameInput.value + "<br>";
        userInfoHTML += "Mobile Number: " + mobileNumberInput.value + "<br>";
        userInfoHTML += "Email: " + customerEmailInput.value + "<br>";
        userInfoHTML += "Address: " + addressInput.value + "<br>";
        userInfoDiv.innerHTML = userInfoHTML;
        alert("Your information has been submitted and a confirmation email has been sent. Thank you");
    } else {
        alert("Please fill in all required fields correctly.");
    }
});

// script for text-to-speech button
document.getElementById("speakButton").addEventListener("click", function() {
    var firstNameInput = document.getElementById("firstname").value;
    var lastNameInput = document.getElementById("lastname").value;
    var mobileNumberInput = document.getElementById("mobilenumber").value;
    var customerEmailInput = document.getElementById("customerEmail").value;
    var addressInput = document.getElementById("address").value;

    var text = "The information that you have provided are the following: ";
    text += "First Name is: " + firstNameInput + ". ";
    text += "Last Name is: " + lastNameInput + ". ";
    text += "Mobile Number is: " + mobileNumberInput + ". ";
    text += "Email Address is: " + customerEmailInput + ". ";
    text += "Postal Address is: " + addressInput + ". ";
    text += "Press the green submit button if you would like to continue.";

    // Create a new SpeechSynthesisUtterance object
    var utterance = new SpeechSynthesisUtterance(text);

    // Speak the text
    window.speechSynthesis.speak(utterance);
});
