// function for making the cards enlarged when hovering over them //
function enlargeCard(card) {
    card.classList.add("enlarged");
}

function shrinkCard(card) {
    card.classList.remove("enlarged");
}

// code for each seperate card to become enlarged after hovering over it //
document.getElementById("card1").addEventListener("mouseover", function() {
    enlargeCard(this);
});

document.getElementById("card1").addEventListener("mouseout", function() {
    shrinkCard(this);
});


document.getElementById("card2").addEventListener("mouseover", function() {
    enlargeCard(this);
});

document.getElementById("card2").addEventListener("mouseout", function() {
    shrinkCard(this);
});



document.getElementById("card3").addEventListener("mouseover", function() {
    enlargeCard(this);
});

document.getElementById("card3").addEventListener("mouseout", function() {
    shrinkCard(this);
});



document.getElementById("card4").addEventListener("mouseover", function() {
    enlargeCard(this);
});

document.getElementById("card4").addEventListener("mouseout", function() {
    shrinkCard(this);
});

// script for the text to speech button //
document.getElementById("speakButton").addEventListener("click", function() {

    var text = "Please select the genre of book you would like to browse: fiction, non fiction, romance and classic"
    
    // website collects the variables to make its script to say //
    var utterance = new SpeechSynthesisUtterance(text);

    // code for the website to say the script //
    window.speechSynthesis.speak(utterance);
});
