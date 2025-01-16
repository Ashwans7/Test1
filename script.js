document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');

    const poems = [
        `I love you more bbygirl ❤️💖💝`,
        `I love you more bbygirl 💑💏💘`,
        `I love you more bbygirl 💕💗💓`
    ];

    yesBtn.addEventListener('click', () => {
        const randomPoem = poems[Math.floor(Math.random() * poems.length)];
        response.textContent = randomPoem;
        response.classList.add('show');
        
        // Add heart animation
        document.querySelectorAll('.heart').forEach(heart => {
            heart.style.animation = 'pulse 0.5s infinite';
        });
    });

    noBtn.addEventListener('click', () => {
        response.textContent = "Please reconsider... Our love could be the most beautiful story ever told. Every moment without you feels incomplete. Give our love a chance to bloom into something extraordinary.";
        response.classList.add('show');
    });

    // Make the "No" button run away from cursor
    noBtn.addEventListener('mouseover', (e) => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});