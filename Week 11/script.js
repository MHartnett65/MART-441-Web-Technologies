document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const backgroundMusic = document.getElementById('backgroundMusic');
  
    // Object class
    class GameObject {
      constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityX = Math.random() * 4 - 2; // Random initial velocity
        this.velocityY = Math.random() * 4 - 2;
      }
  
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  
      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
  
        // Check collision with canvas edges
        if (this.x <= 0 || this.x + this.width >= canvas.width) {
          this.velocityX *= -1;
        }
        if (this.y <= 0 || this.y + this.height >= canvas.height) {
          this.velocityY *= -1;
        }
      }
    }
  
    // Create player object
    const player = new GameObject(50, 50, 50, 50, 'blue');
  
    // Create autonomous object
    const autonomousObject = new GameObject(300, 200, 30, 30, 'red');
  
    function update() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw objects
      player.draw();
      autonomousObject.draw();
  
      // Update objects
      autonomousObject.update();
  
      // Check collision
      if (checkCollision(player, autonomousObject)) {
        canvas.style.backgroundColor = 'yellow';
        player.width -= 5; 
        player.height -= 5;
        autonomousObject.width -= 5; 
        autonomousObject.height -= 5;
      } else {
        canvas.style.backgroundColor = '#f0f0f0';
      }
  
      
      requestAnimationFrame(update);
    }
  
    function checkCollision(obj1, obj2) {
      return obj1.x < obj2.x + obj2.width &&
             obj1.x + obj1.width > obj2.x &&
             obj1.y < obj2.y + obj2.height &&
             obj1.y + obj1.height > obj2.y;
    }
  
    
    canvas.addEventListener('mousemove', function(event) {
      const rect = canvas.getBoundingClientRect();
      player.x = event.clientX - rect.left - (player.width / 2);
      player.y = event.clientY - rect.top - (player.height / 2);
    });
  
    // Start the game loop
    update();
  
    // Start background music
    backgroundMusic.play();
  });
  
  