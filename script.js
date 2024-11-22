// Fungsi untuk kejutan
function showSurprise() {
    alert('🎉 Selamat ulang tahun, Rara! 🎶');
    const audio = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');
    audio.play();

    const message = document.getElementById("romantic-message");
    message.innerHTML = `
        <p>Rara, semoga di ulang tahunmu ini, kamu terus bahagia, selalu sehat, dan semua mimpimu tercapai. 🌟</p>
        <p>Aku janji, aku akan selalu ada buat kamu. Terima kasih udah bikin dunia ini lebih indah! 💕</p>
    `;
    startConfetti();
}

// Efek confetti sederhana
function startConfetti() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ["#ff5c8a", "#ffc3a0", "#fff"];

    function Particle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.radius = Math.random() * 6 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 3 + 1;

        this.update = function () {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = 0 - this.radius;
                this.x = Math.random() * canvas.width;
            }
        };

        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        };
    }

    function initParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
}
