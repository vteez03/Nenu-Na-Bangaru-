function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change button color each time it's clicked
    const colors = ["#ff5722", "#ff9800", "#ffeb3b", "#03a9f4", "#9c27b0"];
    noButton.style.backgroundColor = colors[messageIndex % colors.length];

    // Increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = '${currentSize * 1.5}px';
}