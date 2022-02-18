// In begining we checked via short message if this file is connected to the index file by this small message.
// let message = "😁👍 Keep Rocking!";
// console.log(message);

let card1 = 0;
let card2 = 0;
let Card_N = 0;

let sum = card1 + card2;
let message = "";
let hasblackjack = false;
let gameOn = true;
let sumN = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");

let cardsEl = document.querySelector("#card-el");

function startGame() {
  // This gives us draw for the new set of cards when the player begins or starts the game.
  card1 = Math.ceil(Math.random() * 10 + 1);
  card2 = Math.ceil(Math.random() * 10 + 1);
  sum = card1 + card2;
  
  if (sum <= 20) {
    message = "Do you want to draw New card? If 'yes' then press New Card!";
    messageEl.textContent = message;

    sumEl.textContent = "sum:" + (card1 + card2);
    cardsEl.textContent = "Sum of Cards Value is :" + card1 + "*" + card2;
  } else if (sum === 21) {
    message = "Congratulations!!! You have got BlackJack!";

    messageEl.textContent = message;
    sumEl.textContent = "sum:" + card1 + card2;
    cardsEl.textContent += card1 + "**" + card2 + "--";
    hasblackjack = true;
  } else {
    message = " You are out of the game!";
    gameOn = false;
  }
}

function newCard() {
  if (gameOn) {
    // new card withdrawn shows this:
    Card_N = Math.ceil(Math.random() * 10 + 1);
    sumN = sumN + sum + Card_N;
    if (sumN <= 20) {
      message = "Do you want to draw New card? If 'yes' then press New Card!";
      messageEl.textContent = message;
      sumEl.textContent = "sum:" + sumN;
      cardsEl.textContent += "*" + Card_N;
    } else if (sumN === 21) {
      message = "Congratulations!!! You have got BlackJack!";

      messageEl.textContent = message;
      sumEl.textContent = "sum:" + sumN;
      cardsEl.textContent += "*" + Card_N;
      hasblackjack = true;
    } else {
      message = " You are out of the game!";
      messageEl.textContent = message;
      sumEl.textContent = "sum:" + sumN;
      cardsEl.textContent += "*" + Card_N;

      gameOn = false;
    }
  }
}
