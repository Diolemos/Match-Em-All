const cardsData = [
  { name: "alolan-dugtrio", img: "src/images/alolan-dugtrio.png" },
  { name: "applin", img: "src/images/applin.png" },
  { name: "blastoise", img: "src/images/blastoise.png" },
  { name: "bulbusaur", img: "src/images/bulbusaur.png" },
  { name: "charizard", img: "src/images/charizard.png" },
  { name: "chatot", img: "src/images/chatot.png" },
  { name: "ditto", img: "src/images/ditto.png" },
  { name: "dollive", img: "src/images/dollive.png" },
  { name: "eevee", img: "src/images/eevee.png" },
  { name: "gastly", img: "src/images/gastly.png" },
  { name: "horsea", img: "src/images/horsea.png" },
  { name: "iono", img: "src/images/iono.png" },
  { name: "iron-leaves", img: "src/images/iron-leaves.png" },
  { name: "iron-valient", img: "src/images/iron-valient.png" },
  { name: "kangaskhan", img: "src/images/kangaskhan.png" },
  { name: "leafeon", img: "src/images/leafeon.png" },
  { name: "liten", img: "src/images/liten.png" },
  { name: "magikarp", img: "src/images/magikarp.png" },
  { name: "marill", img: "src/images/marill.png" },
  { name: "meowscarada", img: "src/images/meowscarada.png" },
  { name: "meowth", img: "src/images/meowth.png" },
  { name: "mew", img: "src/images/mew.png" },
  { name: "mewtwo", img: "src/images/mewtwo.png" },
  { name: "milcery", img: "src/images/milcery.png" },
  { name: "orthworm", img: "src/images/orthworm.png" },
  { name: "palafin", img: "src/images/palafin.png" },
  { name: "persian", img: "src/images/persian.png" },
  { name: "pikachu", img: "src/images/pikachu.png" },
  { name: "shiinotic", img: "src/images/shiinotic.png" },
  { name: "skarmory", img: "src/images/skarmory.png" },
  { name: "squirtle", img: "src/images/squirtle.png" },
  { name: "wugtrio", img: "src/images/wugtrio.png" }
];

const cards = [...cardsData, ...cardsData].sort(() => Math.random() - 0.5);
let openCards = [];

cards.forEach(({ name, img }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.name = name;
  card.onclick = handleClick;

  const front = document.createElement("img");
  front.src = img;
  front.className = "front";

  const back = document.createElement("div");
  back.className = "back";

  card.appendChild(front);
  card.appendChild(back);
  document.querySelector(".game").appendChild(card);
});

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("flipped")) {
    this.classList.add("flipped");
    openCards.push(this);
  }
  if (openCards.length === 2) {
    setTimeout(checkMatch, 600);
  }
}

function checkMatch() {
  const [first, second] = openCards;
  if (first.dataset.name === second.dataset.name) {
    first.classList.add("boxMatch");
    second.classList.add("boxMatch");
  } else {
    first.classList.remove("flipped");
    second.classList.remove("flipped");
  }
  openCards = [];

  const matched = document.querySelectorAll(".boxMatch");
  if (matched.length === cards.length) {
    alert("You matched 'em all!");
  }
}
