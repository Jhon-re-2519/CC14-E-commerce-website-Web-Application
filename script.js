// Existing code for mobile menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


// Customer Support Chat
// Open chat box
document.querySelector('.chatBtn').addEventListener('click', function() {
    document.querySelector('.chatBox').style.display = 'flex';
});

// Close chat box
document.querySelector('.closeChat').addEventListener('click', function() {
    document.querySelector('.chatBox').style.display = 'none';
});

// Handle message sending
document.querySelector('.sendBtn').addEventListener('click', function() {
    var message = document.querySelector('.messageInput').value;
    if (message.trim() !== 'hello') {
        var messageContainer = document.createElement('div');
        messageContainer.innerHTML = `<strong>You:</strong> ${message}`;
        document.querySelector('.chatContent').appendChild(messageContainer);
        document.querySelector('.messageInput').value = ''; // Clear the input field
        document.querySelector('.chatContent').scrollTop = document.querySelector('.chatContent').scrollHeight; // Scroll to the bottom
    }
});


// typing text effect 
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".typing-text", {
        strings: ["Shoes!", "Polos!", "Jackets!", "T-shirts!", "Hats!"],
        loop: true,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 500,
    });
});
