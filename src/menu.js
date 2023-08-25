import pizza from './pizza.jpg';
import pasta from './pasta.jpg';

function createImage(image){
    const myImage = new Image();
    myImage.src = image;
    return myImage;
}

function createMenuItem(menuArray){
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item');
    for (let i = 0; i < menuArray.length; i++ ){
        if (i == 3) {
            //img
            itemContainer.appendChild( menuArray[i] );
        } else {
            let div = document.createElement('div');
            div.innerText = menuArray[i];
            itemContainer.appendChild( div );
        }
    }
    return itemContainer
};

const pizzaImg = createImage(pizza);
const pastaImg = createImage(pasta);

let menuArray = [
    ['Shrimp & Rocket Pizza',
    `Tantalize your taste buds with succulent shrimp, peppery arugula,
        and a zesty lemon drizzle.`,
    '£14.99',
    pizzaImg
    ],
    ['Pasta Pomodoro e Formaggio',
    `Indulge in the classic Italian comfort of al dente pasta, drenched
        in our rich tomato sauce and crowned with melted cheese.`,
    '£14.99',
    pastaImg
    ]
];

export default function home(){
    const content = document.createElement('div')
    menuArray.forEach((arr) => content.appendChild(createMenuItem(arr)));
    return content
}