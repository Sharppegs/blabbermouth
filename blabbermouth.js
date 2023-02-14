import {cards} from './cardData.js'

const menuCards = document.getElementById("menu-cards")

const cardsDisplay = cards.map(item => 
        `<a href=${item.link} class="lesson-type-link aos-item"" data-aos="zoom-in"><div class="card-info"  >
            <h1 class="item-title">${item.title}</h1>
        <div class="lesson-types-button">Read More ></div>
        </div></a>`
).join(' ')

menuCards.innerHTML += cardsDisplay




console.log(cards)
