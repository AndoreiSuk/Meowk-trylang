const messages = [
    "Are you sure dear?",
    "Really sure??",
    "Final answer??",
    "Are you positive??",
    "Pookie please...",
    "Just think about it..❤️",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very sad...",
    "I will be very very very sad...",
    "I will be very very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "Pretty pretty please...❤️",
    "You're so pretty dear..."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}