import { createTimeline } from "../general.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ---------------- PLAYER ----------------
const plane = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    width: 40,
    height: 40,
    color: "#feca57",
};
let mouseX = plane.x;
let mouseY = plane.y;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ---------------- TEXT PLANETS ----------------
const planets = [
    { name: "Harmoni", x: 250, y: 250, size: 50, hp: 8, dx: 2, dy: 1, scale: 0 },
    { name: "Bintang", x: 600, y: 350, size: 50, hp: 8, dx: -2, dy: 2, scale: 0 },
    { name: "Ilyas", x: 950, y: 200, size: 50, hp: 8, dx: 1, dy: -1, scale: 0 },
];

let gameRunning = false;
let gameLoopId = null;
let bulletInterval = null;
const bullets = [];
const particles = [];

// ---------------- DRAW PLANE ----------------
function drawPlane() {
    ctx.save();
    ctx.translate(plane.x, plane.y);
    ctx.beginPath();
    ctx.moveTo(0, -plane.height / 2);
    ctx.lineTo(plane.width / 2, plane.height / 2);
    ctx.lineTo(-plane.width / 2, plane.height / 2);
    ctx.closePath();
    ctx.fillStyle = plane.color;
    ctx.fill();
    ctx.restore();
}

// ---------------- DRAW TEXT PLANET ----------------
function drawTextPlanet(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(p.scale, p.scale); // ADD SCALE HERE
    ctx.font = `bold ${p.size}px Poppins`;
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(p.name, 0, 0);
    ctx.restore();
}


// ---------------- EXPLOSION PARTICLES ----------------
function createExplosion(x, y, count = 15) {
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;

        particles.push({
            x,
            y,
            size: Math.random() * 6 + 3,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            alpha: 1,
        });
    }
    if (planets.length === 0) closeGame();

}

function drawParticles() {
    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.size *= 0.94;
        p.alpha -= 0.02;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        if (p.alpha <= 0) particles.splice(i, 1);
    });
}

// ---------------- COLLISION BETWEEN TEXT ----------------
function handlePlanetCollisions() {
    for (let i = 0; i < planets.length; i++) {
        const p1 = planets[i];
        for (let j = i + 1; j < planets.length; j++) {
            const p2 = planets[j];

            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = (p1.size + p2.size) / 2;

            if (dist < minDist) {
                const angle = Math.atan2(dy, dx);
                const overlap = 0.5 * (minDist - dist);
                const sin = Math.sin(angle);
                const cos = Math.cos(angle);

                p1.x -= overlap * cos;
                p1.y -= overlap * sin;
                p2.x += overlap * cos;
                p2.y += overlap * sin;

                [p1.dx, p2.dx] = [p2.dx, p1.dx];
                [p1.dy, p2.dy] = [p2.dy, p1.dy];
            }
        }
    }
}

// ---------------- CREATE CHILD ----------------
function spawnChildren(parent) {
    const newSize = parent.size * 0.6;
    if (newSize < 14) return;

    const child1 = {
        name: parent.name,
        x: parent.x,
        y: parent.y,
        size: newSize,
        hp: Math.floor(parent.hp / 2),
        dx: Math.random() * 1 + 0.3,
        dy: Math.random() * 1 + 0.3,
    };

    const child2 = {
        name: parent.name,
        x: parent.x,
        y: parent.y,
        size: newSize,
        hp: Math.floor(parent.hp / 2),
        dx: -(Math.random() * 1 + 0.3),
        dy: -(Math.random() * 1 + 0.3),
    };

    planets.push(child1, child2);

    gsap.from([child1, child2], {
        size: 0,
        duration: 0.3,
        ease: "back.out(2)"
    });
}

// ---------------- UPDATE LOOP ----------------
function update() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    plane.x += (mouseX - plane.x) * 0.1;
    plane.y += (mouseY - plane.y) * 0.1;

    drawPlane();
    drawParticles(); // draw explosion particles

    planets.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        drawTextPlanet(p);
    });

    handlePlanetCollisions();

    // bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.y -= b.speed;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = "orange";
        ctx.fill();

        for (let j = planets.length - 1; j >= 0; j--) {
            const p = planets[j];
            const dx = b.x - p.x;
            const dy = b.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < p.size / 2 + b.radius) {
                p.hp--;
                bullets.splice(i, 1);

                if (p.hp <= 0) {
                    const dead = planets.splice(j, 1)[0];

                    createExplosion(dead.x, dead.y, 18); // ADD EXPLOSION

                    setTimeout(() => {
                        spawnChildren(dead);
                    }, 150); // spawn children AFTER the explosion starts
                }
            }
        }

        if (b.y < 0) bullets.splice(i, 1);
    }

    gameLoopId = requestAnimationFrame(update);
}

export function startGame() {
    gameRunning = true;

    let tl = createTimeline();
    tl.to(".sgame", { opacity: 1 })
        .to(planets, {
            scale: 1,
            duration: 0.6,
            ease: "back.out(2)",
            stagger: 1
        });

    // Spawn peluru tiap 250ms
    bulletInterval = setInterval(() => {
        bullets.push({
            x: plane.x,
            y: plane.y - 20,
            radius: 5,
            speed: 10,
        });
    }, 250);

    update();
}

export function closeGame() {
    gameRunning = false;

    // Stop requestAnimationFrame
    if (gameLoopId) cancelAnimationFrame(gameLoopId);

    // Stop interval peluru
    if (bulletInterval) clearInterval(bulletInterval);

    // Fade out game screen
    let tl = createTimeline();
    tl.to(".sgame", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            // Clear canvas completely
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }).to(".closing", { opacity: 1, onComplete: () => gsap.to(section, { display: "none" }) })

    // Reset all game objects
    planets.length = 0;
    bullets.length = 0;
    particles.length = 0;
    childPlanets.length = 0;

    console.log("Game closed.");
}
