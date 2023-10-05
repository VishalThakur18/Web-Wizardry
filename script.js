const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open'); 
};

// Running Code

const codeLines = [
"EduGalaxy: ",
"Your gateway to mastering web technologies",
"Unlock the magic of the web and become a true developer!",
"Join us in your journey to unlock the magic of the web and become a true web wizard!"
];

function simulateTyping(element, text, delay) {
return new Promise(resolve => {
let index = 0;
const typingInterval = setInterval(() => {
if (index < text.length) {
element.textContent += text[index];
index++;
} else {
clearInterval(typingInterval);
resolve();
}
}, delay);
});
}

async function typeCodeLines() {
const codeContainer = document.querySelector(".code-container");
const blinkingCursor = document.createElement("span");
blinkingCursor.className = "blinking-cursor";

for (const line of codeLines) {
const codeLine = document.createElement("div");
codeLine.className = "code-line";
codeContainer.appendChild(codeLine);

await simulateTyping(codeLine, line, 50);

codeLine.appendChild(blinkingCursor.cloneNode(true));
}

// Wait for 5 seconds before resetting the animation
await new Promise(resolve => setTimeout(resolve, 4000));

// Clear codeContainer and start animation again
codeContainer.innerHTML = "";
typeCodeLines();
}

document.addEventListener("DOMContentLoaded", typeCodeLines);

//Modal (Videos)
document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("myCard");
    const modal = document.getElementById("myModal");
    const closeModal = document.getElementById("closeModal");

    card.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});