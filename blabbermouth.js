import {cards} from './cardData.js'

const menuCards = document.getElementById("menu-cards")

const cardsDisplay = cards.map(item => 
        `<div class="card-info">
           
            <img src=${item.image} alt=${item.id} />
            <h5 class="item-title">${item.title}</h5>
            
        </div>`
).join(' ')

menuCards.innerHTML += cardsDisplay




console.log(cards)
