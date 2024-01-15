const typingTextElement = document.getElementById('aboutTypingText');
const text = 'About Us ';
let index = 0;

function typeText() {
  typingTextElement.textContent = text.substring(0, index);

  if (index >= text.length) {
    clearInterval(typingInterval);
  } else {
    index++;
  }
}

const typingInterval = setInterval(typeText, 100);