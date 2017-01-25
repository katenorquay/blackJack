
var cards = ['A', 'A', 'A', 'A', '2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7', '8', '8', '8', '8', '9', '9', '9', '9', '10', '10', '10', '10', 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q', 'K', 'K', 'K', 'K'];


function getCard(cards) {
  var card = cards[Math.floor(Math.random()*cards.length)]
  return card
}

function getValues(cards) {
  for (var i = 0; i < cards.length; i++) {
    if (cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K') {
       cards[i] = '10'
     }
    } else if (cards[i] === 'A') {
      cards[i] = '11'
    }
  }
  return cards
}


var dealerCards = []
getDealerCards(cards, dealerCards)

function getDealerCards(cards, dealerCards) {
  var cards = getValues(cards)
  if (dealerCards.length < 2) {
    dealerCards.push(getCard(cards), getCard(cards))
  } else {
    dealerCards.push(getCard(cards))
  }
  console.log(dealerCards)
  getTotal(dealerCards)
}

function getTotal(dealerCards) {
  var total = dealerCards.reduce(function (a, b) {
    return Number(a) + Number(b)
  })
    console.log(total)
    getTotal(dealerCards)
  }
  next(total, dealerCards)
}


function next(total, dealerCards) {
  if (total === 21) {
    console.log('winner')
  } else if (total < 17) {
    getDealerCards(cards, dealerCards)
  } else if (total > 21) {
    console.log('loser')
    }
  }
