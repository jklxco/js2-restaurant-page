import Inside from './restaurant.jpeg';

function header() {
    const header = document.createElement('h1');
    header.textContent = 'Trattoria La Dolce Vita';
    return header 
}
function headline(){
    const headline = document.createElement('h2');
    headline.textContent = "Experience the Sweet Life: Authentic Italian Delights at Trattoria La Dolce Vita"
    return headline
}

function restaurantImage(){
    const myImage = new Image();
    myImage.src = Inside;
    return myImage;
}

function reviewCopy(){
    const reviewCopy = document.createElement('p');
    reviewCopy.textContent = `Immerse yourself in the essence of Italy\'s culinary culture at Trattoria La Dolce Vita.
        Our chefs pour their hearts into crafting each dish, using only the freshest, locally sourced 
        ingredients. From the comforting embrace of our handmade pasta to the delightful flavors of
        our wood-fired pizzas, every bite transports you to the heart of Italy. Join us for a dining
        experience that captures the true spirit of la dolce vita \– the sweet life. Buon appetito!`;
    return reviewCopy
}

export default function home(){
    const content = document.createElement('div')
    content.appendChild(header());
    content.appendChild(headline());
    content.appendChild(restaurantImage());
    content.appendChild(reviewCopy());
    return content
}

