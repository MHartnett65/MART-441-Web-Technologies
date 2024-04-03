// Define your classes for objects
class GameObject {
    constructor(x, y, width, height, color, shape, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color; // Added color property
        this.shape = shape; // Added shape property
        this.speedX = speedX; // Added speedX property for horizontal movement
        this.speedY = speedY; // Added speedY property for vertical movement
    }

    // Update method for movement
    update(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off the canvas boundaries
        if (this.x <= 0 || this.x + this.width >= canvasWidth) {
            this.speedX *= -1; // Reverse horizontal speed
        }
        if (this.y <= 0 || this.y + this.height >= canvasHeight) {
            this.speedY *= -1; // Reverse vertical speed
        }
    }

    // Render method
    render(ctx) {
        ctx.fillStyle = this.color; // Set color
        ctx.beginPath();
        if (this.shape === 'rect') {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } else if (this.shape === 'star') {
            // Draw star shape
            ctx.moveTo(this.x + this.width / 2, this.y);
            for (let i = 1; i <= 5; i++) {
                ctx.lineTo(
                    this.x + this.width / 2 * Math.cos(i * 4 * Math.PI / 5),
                    this.y + this.width / 2 * Math.sin(i * 4 * Math.PI / 5)
                );
                ctx.lineTo(
                    this.x + this.width / 4 * Math.cos((i + 0.5) * 4 * Math.PI / 5),
                    this.y + this.width / 4 * Math.sin((i + 0.5) * 4 * Math.PI / 5)
                );
            }
            ctx.closePath();
            ctx.fill();
        }
    }
}

class Player extends GameObject {
    constructor(x, y, width, height, speed) {
        super(x, y, width, height);
        this.speed = speed;
    }

    // Movement method for player
    move(direction, canvasWidth, canvasHeight) {
        switch (direction) {
            case 'left':
                this.x -= this.speed;
                break;
            case 'right':
                this.x += this.speed;
                break;
            case 'up':
                this.y -= this.speed;
                break;
            case 'down':
                this.y += this.speed;
                break;
        }

        // Ensure player stays within canvas boundaries
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width;
        }
        if (this.y < 0) {
            this.y = 0;
        } else if (this.y + this.height > canvasHeight) {
            this.y = canvasHeight - this.height;
        }
    }

    // Override render method to draw player differently
    render(ctx) {
        ctx.fillStyle = '#00ff00'; // Green color for player
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Create player instance
const player = new Player(400, 500, 20, 20, 5);

// Embed JSON data for objects
const objectsData = [
    { "x": 100, "y": 100, "width": 50, "height": 50, "color": "#ff0000", "shape": "rect", "speedX": 1, "speedY": 1 }, // Red rectangle
    { "x": 200, "y": 200, "width": 50, "height": 50, "color": "#00ff00", "shape": "rect", "speedX": -1, "speedY": -1 }, // Green rectangle
    { "x": 300, "y": 300, "width": 50, "height": 50, "color": "#0000ff", "shape": "rect", "speedX": 2, "speedY": 2 }, // Blue rectangle
    { "x": 400, "y": 400, "width": 50, "height": 50, "color": "#ffff00", "shape": "rect", "speedX": -2, "speedY": -2 }, // Yellow rectangle
    { "x": 500, "y": 500, "width": 50, "height": 50, "color": "#ff00ff", "shape": "rect", "speedX": 1.5, "speedY": -1.5 }  // Magenta rectangle
];

// Create objects from embedded JSON data
const objects = objectsData.map(obj => new GameObject(obj.x, obj.y, obj.width, obj.height, obj.color, obj.shape, obj.speedX, obj.speedY));

// Embed JSON data for collectibles
const collectiblesData = [
    { "x": 150, "y": 150, "width": 30, "height": 30, "color": "#ffff00", "shape": "star", "speedX": 1.5, "speedY": 1.5 }, // Yellow star
    { "x": 250, "y": 250, "width": 30, "height": 30, "color": "#ffff00", "shape": "star", "speedX": -1.5, "speedY": -1.5 }, // Yellow star
    { "x": 350, "y": 350, "width": 30, "height": 30, "color": "#ffff00", "shape": "star", "speedX": 2, "speedY": -2 }  // Yellow star
];

// Create collectibles from embedded JSON data
const collectibles = collectiblesData.map(collectible => new GameObject(collectible.x, collectible.y, collectible.width, collectible.height, collectible.color, collectible.shape, collectible.speedX, collectible.speedY));

// Canvas and context setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Score
let score = 0;

// Keyboard event listeners for player movement
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            player.move('left', canvas.width, canvas.height);
            break;
        case 'ArrowRight':
            player.move('right', canvas.width, canvas.height);
            break;
        case 'ArrowUp':
            player.move('up', canvas.width, canvas.height);
            break;
        case 'ArrowDown':
            player.move('down', canvas.width, canvas.height);
            break;
    }
});

// Game loop function
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and render objects
    objects.forEach(obj => {
        obj.update(canvas.width, canvas.height);
        obj.render(ctx);
    });

    // Update and render collectibles
    collectibles.forEach(collectible => {
        collectible.update(canvas.width, canvas.height);
        collectible.render(ctx);
    });

    // Render player
    player.render(ctx);

    // Check for collisions between player and collectibles
    collectibles.forEach((collectible, index) => {
        if (collisionDetection(player, collectible)) {
            // Collision occurred, remove collectible from array
            collectibles.splice(index, 1);
            // Increment score
            score++;
        }
    });

    // Check for collisions between player and objects
    objects.forEach(obj => {
        if (collisionDetection(player, obj)) {
            // Collision occurred with object, reset the game
            score = 0;
            // Reset player position
            player.x = 400;
            player.y = 500;
            // Reset collectibles
            collectibles.splice(0, collectibles.length, ...collectiblesData.map(collectible => new GameObject(collectible.x, collectible.y, collectible.width, collectible.height, collectible.color, collectible.shape, collectible.speedX, collectible.speedY)));
        }
    });

    // Render score
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 30);

    requestAnimationFrame(gameLoop);
}

// Function to detect collisions between two objects
function collisionDetection(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
}

// Start the game loop
gameLoop();
