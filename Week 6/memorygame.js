document.addEventListener('DOMContentLoaded', function () {
    const blankImages = Array(12).fill('Cover Image.jpg'); 
    const actualImages = generateRandomizedImages();
    let flippedCards = [];
    let attempts = 0;
    let matches = 0;

    function generateRandomizedImages() {
        const imagePool = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'];
        const randomizedImages = [];

        for (let i = 0; i < 2; i++) {
            randomizedImages.push(...imagePool);
        }

        for (let i = randomizedImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomizedImages[i], randomizedImages[j]] = [randomizedImages[j], randomizedImages[i]];
        }

        return randomizedImages;
    }

    function createImageCard(image, index) {
        const card = document.createElement('div');
        card.classList.add('image-card');
        card.dataset.index = index;
        card.addEventListener('click', handleCardClick);

        const img = document.createElement('img');
        img.src = 'Cover Image.jpg';
        img.alt = 'Cover Image';

        card.appendChild(img);
        document.querySelector('.memory-game').appendChild(card);
    }

    function displayImages() {
        actualImages.forEach((image, index) => {
            createImageCard(image, index);
        });
    }

    function handleCardClick() {
        if (flippedCards.length < 2 && !flippedCards.includes(this)) {
            this.firstChild.src = actualImages[this.dataset.index];
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                attempts++;

                setTimeout(() => {
                    checkMatch();
                    updateScore();
                    flippedCards = [];
                    
                    if (matches === actualImages.length / 2) {
                        endGame(); 
                    }
                }, 1000);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;
        const index1 = card1.dataset.index;
        const index2 = card2.dataset.index;

        if (actualImages[index1] === actualImages[index2]) {
            matches++;
        } else {
            
            card1.firstChild.src = 'Cover Image.jpg';
            card2.firstChild.src = 'Cover Image.jpg';
        }
    }

    function updateScore() {
        // Display or update the score on the page (if desired)
        // Example: document.getElementById('score').innerText = `Attempts: ${attempts}, Matches: ${matches}`;
    }

    function endGame() {
        
        const score = { attempts, matches };
        localStorage.setItem('score', JSON.stringify(score));

        alert(`Congratulations! You won in ${attempts} attempts!`);
        window.location.href = 'finalpage.html';
    }

    displayImages();
});
