const text = "Mahasiswa ITPLN Semester 3 yang sedang belajar di dunia IT.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect)