class SocialJusticeImage {
    constructor(title, imageUrl, description, author, year) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

const socialJusticeImages = [
    new SocialJusticeImage("The Process", "image1.jpg", "Students working hard on their Ribbon shirts and skirts.", "Matt Hartnett", 2024),
    new SocialJusticeImage("Finished Project", "image2.jpg", "Hard work paid off", "Matt Hartnett", 2024),
    new SocialJusticeImage("HIA Resources", "image3.jpg", "Resources for our people", "Matt Hartnett", 2024),
    new SocialJusticeImage("Remember the Dakota 38!", "image4.jpg", "Art of the remember the 38. Blood is on Lincolns hands.", "Matt Hartnett", 2023),
    new SocialJusticeImage("Supa Man", "image5.jpg", "Native Hero and Role model", "Matt Hartnett", 2023),
];

const imageDisplay = document.getElementById("image-display");
const titleDisplay = document.getElementById("title");
const descriptionDisplay = document.getElementById("description");
const authorDisplay = document.getElementById("author");
const yearDisplay = document.getElementById("year");
const showRandomButton = document.getElementById("show-random");

showRandomButton.addEventListener("click", showRandomImage);

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * socialJusticeImages.length);
    const randomImage = socialJusticeImages[randomIndex];

    imageDisplay.src = randomImage.imageUrl;
    titleDisplay.innerText = randomImage.title;
    descriptionDisplay.innerText = randomImage.description;
    authorDisplay.innerText = `Author: ${randomImage.author}`;
    yearDisplay.innerText = `Year: ${randomImage.year}`;
}
