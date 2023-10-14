// Memberi warna text homepage-content
const blink1 = document.getElementById("text1");
const blink2 = document.getElementById("text2");
const blink3 = document.getElementById("text3");

function Color(element, color) {
    const currentColor = element.style.color;
    element.style.color = currentColor === color ? "black" : color;
}

setInterval(() => Color(blink1, "red"), 500);
setInterval(() => Color(blink2, "green"), 500);
setInterval(() => Color(blink3, "blue"), 500);

setTimeout(() => {clearInterval(blink1);}, 1000);
setTimeout(() => {clearInterval(blink2);}, 1000);
setTimeout(() => {clearInterval(blink3);}, 1000);
