const text = document.getElementById("demo");
const originalText = text.innerHTML;
let clickCount = 0;

function onClickFunc() {
    clickCount++;
    const messages = [
        "How are you?",
        "Nice to meet you! 😊",
        "Let's work together!",
        "Click me again!"
    ];
    
    text.innerHTML = messages[clickCount % messages.length];
    text.style.animation = 'none';
    setTimeout(() => {
        text.style.animation = 'fadeInUp 0.5s ease';
    }, 10);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

function showMessage() {
    alert("Thanks for reaching out! I'll get back to you soon. 🚀");
} 
