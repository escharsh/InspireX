const facts = [
    " Hi my name is Harshvardhan.",
    " I am 22 years old",
    " I love to play video games sometime code and sometimes singing!",
    "I speak Hindi, English, Punjab languages fluently.",
    "I’m learning to Full stack development in my free time."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
