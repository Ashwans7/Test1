document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');

    const poems = [
        `My love for you grows deeper each day,
        Like stars that light up the Milky Way.
        You're the missing piece I've been searching for,
        My heart is yours, forever more.`,
        
        `In your eyes, I see my future bright,
        Your love guides me through the darkest night.
        Together we'll build our dreams so true,
        My heart beats only, my dear, for you.`,
        
        `Like roses blooming in spring sunshine,
        My love grows stronger, yours and mine.
        Forever with you is all I need,
        Our hearts united, forever freed.`
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