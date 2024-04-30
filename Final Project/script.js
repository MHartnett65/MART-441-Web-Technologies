
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


let playerX = canvas.width / 2;
let playerY = canvas.height / 2;
let playerSize = 30; 
let playerColor = '#FF0000'; 
let playerHealth = 200; 


let circles = [];
const numCircles = 10;
const circleSize = 20; 


let gameover = false;


const quotes = [
    "Colonialism resulted in loss of land, culture, and sovereignty for Native peoples.",
    "The boarding school era led to intergenerational trauma and cultural disconnection.",
    "Treaty violations and forced relocation continue to impact Native communities today.",
    "Historical trauma contributes to disparities in health, education, and economic opportunity.",
    "Colonization disrupted traditional Native governance structures and ways of life."
];


function drawPlayer() {
    ctx.fillStyle = playerColor; 
    ctx.fillRect(playerX - playerSize / 2, playerY - playerSize / 2, playerSize, playerSize);
}


function drawCircles() {
    for (let i = 0; i < circles.length; i++) {
        
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(circles[i].x, circles[i].y, circleSize, 0, Math.PI * 2);
        ctx.stroke();

        
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
    }
}


function update() {
    if (!gameover) {
        
        for (let i = 0; i < circles.length; i++) {
            const dx = playerX - circles[i].x;
            const dy = playerY - circles[i].y;
            const angle = Math.atan2(dy, dx);
            circles[i].x += Math.cos(angle) * 1; 
            circles[i].y += Math.sin(angle) * 1; 

            
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < circleSize + playerSize / 2) {
                playerHealth -= 10; 
                playerSize -= 5; 
                if (playerSize < 5 || playerHealth <= 0) { 
                    gameover = true;
                    playerColor = '#FFFFFF'; 
                    playerSize = 0; 
                } else {
                    
                    const colorValue = 255 - playerHealth * 2.55; 
                    playerColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
                }
                playerX = canvas.width / 2; 
                playerY = canvas.height / 2;
            }
        }
    }
}


function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    drawPlayer();

    
    drawCircles();

    
    ctx.fillStyle = '#000000';
    ctx.fillText('Health: ' + playerHealth, 10, 20);

    
    if (gameover) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        ctx.fillText('Game Over', canvas.width / 2 - 50, canvas.height / 2 - 20);
        ctx.fillText(randomQuote, canvas.width / 2 - 150, canvas.height / 2 + 20);
    }
}


function mouseMoveHandler(e) {
    const rect = canvas.getBoundingClientRect();
    playerX = e.clientX - rect.left;
    playerY = e.clientY - rect.top;
}


canvas.addEventListener('mousemove', mouseMoveHandler);


for (let i = 0; i < numCircles; i++) {
    circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    });
}


function gameLoop() {
    update();
    draw();
    if (!gameover) {
        requestAnimationFrame(gameLoop);
    }
}


gameLoop();
