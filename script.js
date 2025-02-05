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


// Open chat box
document.querySelector('.chatBtn').addEventListener('click', function() {
    document.querySelector('.chatBox').style.display = 'flex';
});

// Close chat box
document.querySelector('.closeChat').addEventListener('click', function() {
    document.querySelector('.chatBox').style.display = 'none';
});

// message sending handler?
document.querySelector('.sendBtn').addEventListener('click', function() {
    var messageInput = document.querySelector('.messageInput');
    var message = messageInput.value.trim();
    var chatContent = document.querySelector('.chatContent');

    if (message !== '') {
        
        var userMessageContainer = document.createElement('div');
        userMessageContainer.innerHTML = `<strong>You:</strong> ${message}`;
        chatContent.appendChild(userMessageContainer);

        
        var botReplyContainer = document.createElement('div');
        botReplyContainer.innerHTML = `<strong>Support:</strong> <span class="typing">...</span>`;
        chatContent.appendChild(botReplyContainer);

        // typing effect
        setTimeout(() => {
            var botMessage = "We sincerely apologize for the inconvenience. Our Customer Support is currently under training to serve you better. In the meantime, feel free to explore other pages on our website. Thank you for your patience and understanding!";
            var typingElement = botReplyContainer.querySelector('.typing');
            typingElement.innerHTML = '';
            let i = 0;
            let typingInterval = setInterval(() => {
                if (i < botMessage.length) {
                    typingElement.innerHTML += botMessage.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50); // typing speed
        }, 1000); // delay

        messageInput.value = '';

        chatContent.scrollTop = chatContent.scrollHeight;
    }
});

// typing text effect 
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".typing-text", {
        strings: ["Shoes!", "Clothings!", "Fragrances", "Watches!", "Headwear!"],  // Fragrances Watches at Headwear hindi pa nagagwa!
        loop: true,
        typeSpeed: 70,
        backSpeed: 30,
        backDelay: 500,
    });
});
