class CardEngine {
  constructor() {
    this.cards = [ "A", "2", "3", "4", "5", "6", "7","8","9", "10", "J","Q","K"];
    this.suits = ["diamonds", "hearts", "spades", "clubs"];
    this.deck = [];
    this.ground = [];
    this.player1 = new Player();
    this.player2 = new Player();
    this.isFirstPlayerTurn = true;
  }

  init() {
    const startGameBtn = document.getElementsByClassName("startGameBtn");
    startGameBtn[0].addEventListener("click", () => {
      document.getElementById("ground").innerHTML = "";
      this.buildDeck();
      this.shuffle();
      this.deal();
    });

    const player1Btn = document.getElementById("player1");
    player1Btn.addEventListener("click", () => {
      if (this.player1.allCaedsArray.length == 0) {
        alert("Player 2 win");
        this.reset();
        return;
      }
      if (this.isFirstPlayerTurn) {
        this.isFirstPlayerTurn = !this.isFirstPlayerTurn;
        this.doPlay(this.player1.allCaedsArray.pop());
      }
    });

    const player2Btn = document.getElementById("player2");
    player2Btn.addEventListener("click", () => {
      if (this.player2.allCaedsArray.length == 0) {
        alert("Player 1 win");
        this.reset();
        return;
      }
      if (!this.isFirstPlayerTurn) {
        this.isFirstPlayerTurn = !this.isFirstPlayerTurn;
        this.doPlay(this.player2.allCaedsArray.pop());
      }
    });
  }

  reset() {
    this.deck = [];
    this.ground = [];
    this.player1 = new Player();
    this.player2 = new Player();
    this.isFirstPlayerTurn = true;
    this.buildDeck();
    this.shuffle();
    this.deal();
  }

  buildDeck() {
    for (var i = 0; i < this.suits.length; i++) {
      for (var x = 0; x < this.cards.length; x++) {
        this.deck.push(new Card(this.suits[i], this.cards[x]));
      }
    }
  }

  shuffle() {
    for (var i = 0; i < this.deck.length; i++) {
      var location1 = Math.floor(Math.random() * this.deck.length);
      var location2 = Math.floor(Math.random() * this.deck.length);
      var tmp = this.deck[location1];
      this.deck[location1] = this.deck[location2];
      this.deck[location2] = tmp;
    }
  }

  deal() {
    this.player1.allCaedsArray = this.deck.slice(0, 26);
    this.player2.allCaedsArray = this.deck.slice(26, 53);
  }

  draw(newCard) {
    
    var card = document.createElement("div");
    var value = document.createElement("div");
    var suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + newCard.suit;
    value.innerHTML = newCard.value;
    card.appendChild(value);
    card.appendChild(suit);

    var element = document.getElementById("ground");

    if (0 != element.childElementCount) {
      element.removeChild(document.getElementById("ground").lastChild);
    }
    document.getElementById("ground").appendChild(card);
  }
 doPlay(newCard) {
    this.draw(newCard);
    if (this.ground.length == 0) {
      this.ground.push(newCard);
      return;
    }
    var lastGroundCard = this.ground.pop();
    this.ground.push(lastGroundCard);
    if (newCard.value === lastGroundCard.value) {
      if (this.isFirstPlayerTurn) {
        this.player1.allCaedsArray.push(newCard);
        this.player1.allCaedsArray.push(...this.ground);
        document.getElementById("ground").innerHTML = "";
        alert("Congrats");
      } else {
        this.player2.allCaedsArray.push(newCard);
        this.player2.allCaedsArray.push(...this.ground);
        document.getElementById("ground").innerHTML = "";
        alert("Congrats");
      }
      this.ground = [];
    } else {
      this.ground.push(newCard);
    }
  }
}

class Player {
  constructor(name, allCaedsArray) {
    this.name = name;
    this.allCaedsArray = allCaedsArray;
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

let cardEngine = new CardEngine();
cardEngine.init();
