// Typing Effect
const words = ["Web Developer", "Programmer", "Tech Enthusiast"];
let i = 0, j = 0, text = "", isDeleting = false;

function type() {
    text = words[i];

    document.getElementById("typing").innerText =
        text.substring(0, j);

    if (!isDeleting && j < text.length) j++;
    else if (isDeleting && j > 0) j--;

    if (j === text.length) isDeleting = true;
    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Dark Mode
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Scroll Animation
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
