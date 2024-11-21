let revealBtn = document.querySelector(".animated-button");
let message = document.getElementById("message");

revealBtn.addEventListener("click", () => {
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");

        setTimeout(function() {
            message.classList.add("hidden");
        }, 3000);
    }
});

