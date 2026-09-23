// Custom heart cursor interaction & trail
const cursor = document.querySelector('.custom-cursor');
let lastTrailTime = 0;

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.1,
        ease: "power2.out"
    });

    const now = Date.now();
    if (now - lastTrailTime > 60) {
        createHeartTrail(e.clientX, e.clientY);
        lastTrailTime = now;
    }
});

function createHeartTrail(x, y) {
    const heart = document.createElement('div');
    heart.className = 'cursor-heart-trail';
    const trailHearts = ['💖', '💕', '💗', '✨'];
    heart.textContent = trailHearts[Math.floor(Math.random() * trailHearts.length)];
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    gsap.to(heart, {
        y: y - (Math.random() * 40 + 20),
        x: x + (Math.random() * 40 - 20),
        scale: 0.4,
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
        onComplete: () => heart.remove()
    });
}

// Floating elements
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '💌', '⭐', '💕', '♾️'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 12) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -400,
        duration: Math.random() * 8 + 8,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Initial animations
window.addEventListener('load', () => {
    gsap.from('.title', {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "bounce.out"
    });

    gsap.from('.letter-card', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.2)"
    });

    gsap.from('.next-button', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.8,
        ease: "elastic.out(1, 0.5)"
    });

    setInterval(createFloatingElement, 1800);
});

// Navigation button to last.html
const nextBtn = document.querySelector('.next-button');
nextBtn.addEventListener('click', () => {
    gsap.to(nextBtn, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });

    gsap.to('body', {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            window.location.href = 'last.html';
        }
    });
});
