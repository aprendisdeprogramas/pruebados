const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

function createParticles(e) {
    const xPos = e.clientX;
    const yPos = e.clientY;

    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(xPos, yPos));
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.3) {
            particles.splice(i, 1);
            i--;
        }
    }
}

canvas.addEventListener('mousemove', createParticles);
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    createParticles(e.touches[0]);
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();
const navLinks1 = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');
const sections = document.querySelectorAll('.container > section');

function setActiveLink(index) {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

function scrollHandler() {
    const scrollTop = window.pageYOffset;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            setActiveLink(index);
        }
    });
}

window.addEventListener('scroll', scrollHandler);

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const sectionTop = sections[index].offsetTop;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });

        setActiveLink(index);
        
    });
});



window.addEventListener('scroll', scrollHandler);

navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const sectionTop = sections[index].offsetTop;

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });

        setActiveLink(index);
    });
});
// Código JavaScript existente
// ...

// Agrega el nuevo código al final del archivo
let bgChangeInterval;
let bgState = 1;

function changeBackground() {
  if (bgState === 1) {
    document.documentElement.style.setProperty('--bg1-opacity', '0');
    document.documentElement.style.setProperty('--bg2-opacity', '1');
    bgState = 2;
  } else {
    document.documentElement.style.setProperty('--bg1-opacity', '1');
    document.documentElement.style.setProperty('--bg2-opacity', '0');
    bgState = 1;
  }
}

function startBackgroundChange() {
  bgChangeInterval = setInterval(changeBackground, 1000);
}

function stopBackgroundChange() {
  clearInterval(bgChangeInterval);
}

startBackgroundChange();













