document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");

    let clickedYes = false; // Variable to track who clicked "Yes"

    noButton.addEventListener("mouseenter", function () {
        // Generate random position for 'No' button
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Set the new position
        noButton.style.position = "absolute";
        noButton.style.left = newX + "px";
        noButton.style.top = newY + "px";
    });

    yesButton.addEventListener("click", function () {
        if (!clickedYes) {
            // Display the message only once per user
            message.textContent = "Love you too!";
            message.style.display = "block";
            clickedYes = true; // Set the variable to true
        }
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });
});

