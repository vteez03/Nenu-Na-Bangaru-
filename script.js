const messages = [
    "Nijamganaaa🥺?",
    "Malli alochinchu??",
    "Inko sari alochinchu bujji....",
    "Na bangaram kadhu🥺...",
    "Just think about it!",
    "Nuvvu kadhu ante, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Sare ithey, inka adaganule😔...",
    "Vadhuluthana enti, yes chepochuga! ❤"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change No button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase Yes button size
    const currentYesSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = '${currentYesSize * 1.2}px'; // Increase slightly

// Increase No button size by 10%
const currentNoSize = parseFloat(window.getComputedStyle(noButton).fontSize);
noButton.style.fontSize = `${currentNoSize * 1.1}px`; // Increase by 10% each click

 // Change No button color randomly
 const colors = ["#FFB6C1", "#E6A8D7", "#D8BFD8", "#F4C2C2", "#FFD1DC", "#E0BBE4"];
 noButton.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

     // Soft pastel color palette
     const pastelColors = ["#FFB6C1", "#E6A8D7", "#D8BFD8", "#F4C2C2", "#FFD1DC", "#E0BBE4"];
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
let noButton = document.getElementById("noButton");
let clickCount = 0; // Counter for clicks
let maxClicks = 20; // Limit clicks to 20

noButton.addEventListener("click", function () {
    if (clickCount < maxClicks) {
        let currentSize = parseInt(window.getComputedStyle(noButton).fontSize);
        noButton.style.fontSize = (currentSize + 2) + "px"; // Increase size
        clickCount++;
    } else {
        noButton.style.fontSize = "50px"; // Final size (adjust as needed)
    }
});
