document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');

    const poems = [
        `My darling, my love, my heart's pure delight,
        You're the stars in my sky, making everything bright.
        Every moment with you feels like heaven on earth,
        You're my greatest blessing, my infinite worth. ❤️`,
        
        `Like a rose in full bloom, my love grows each day,
        Your smile lights my world in the most beautiful way.
        Forever with you is a dream come true,
        My heart beats completely, eternally for you. 💝`,
        
        `In the garden of love, you're my sweetest flower,
        Your love gives me strength, grace, and power.
        Together we'll dance through life's precious song,
        In your heart is where I truly belong. 💖`,
        
        `You're the melody to my heart's sweetest tune,
        The sun to my day, my stars and my moon.
        Every breath, every moment, my love grows more true,
        My world is perfect because it has you. 💕`
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