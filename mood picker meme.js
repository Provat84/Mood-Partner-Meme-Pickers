const MOODS = {
  tired:   { label: "Tired 😴",   emoji: "😴", anim: "a-tired", captions: [
    "Me: I'll sleep early tonight. Also me at 3 AM: watching how bridges are built.",
    "My battery is at 1% and I don't have a charger.",
    "I'm not lazy, I'm in power saving mode.",
    "Napping is just buffering for real life." ] },
  hungry:  { label: "Hungry 🍕",  emoji: "🍕", anim: "a-hungry", captions: [
    "I just ate and I'm already thinking about the next meal.",
    "Opening the fridge every 10 minutes like new snacks will magically appear.",
    "My stomach is making sounds that scare even me.",
    "Diet starts tomorrow. Pizza starts now." ] },
  broke:   { label: "Broke 💸",   emoji: "💸", anim: "a-broke", captions: [
    "Me checking my bank balance: it's not a number, it's a cry for help.",
    "Money doesn't grow on trees, and trust me, I've checked.",
    "My wallet is on a very strict diet.",
    "Treating myself to... free WiFi." ] },
  happy:   { label: "Happy 😄",   emoji: "🥳", anim: "a-happy", captions: [
    "Exam over. Brain: deleted. Mood: legendary.",
    "I'm not saying I'm a main character, but the music is playing.",
    "Today's forecast: 100% chance of vibes.",
    "Nothing can hurt me right now. Except the bill." ] },
  stressed:{ label: "Stressed 😵", emoji: "😵", anim: "a-stress", captions: [
    "Calm on the outside. 47 browser tabs open on the inside.",
    "I have 99 problems and procrastinating is all of them.",
    "Please hold, my brain is buffering.",
    "Everything is fine. (Everything is on fire.)" ] },
  bored:   { label: "Bored 🥱",   emoji: "🥱", anim: "a-bored", captions: [
    "I've refreshed the same app 12 times. Still nothing.",
    "Bored enough to clean my room. Almost.",
    "Staring at the ceiling. It has not changed in 4 hours.",
    "I'd say 'let's do something', but my couch disagrees." ] }
};

const moodsEl = document.getElementById("moods");
const emojiEl = document.getElementById("emoji");
const captionEl = document.getElementById("caption");
const againBtn = document.getElementById("again");
let current = null;
let lastIndex = -1;

Object.entries(MOODS).forEach(([key, m]) => {
  const b = document.createElement("button");
  b.textContent = m.label;
  b.dataset.key = key;
  b.addEventListener("click", () => pick(key));
  moodsEl.appendChild(b);
});

function pick(key) {
  current = key;
  lastIndex = -1;
  document.querySelectorAll(".moods button").forEach(b =>
    b.classList.toggle("active", b.dataset.key === key));
  const m = MOODS[key];
  emojiEl.textContent = m.emoji;
  emojiEl.className = m.anim;
  againBtn.hidden = false;
  showCaption();
}

function showCaption() {
  const list = MOODS[current].captions;
  let i;
  do { i = Math.floor(Math.random() * list.length); } while (i === lastIndex && list.length > 1);
  lastIndex = i;
  captionEl.className = "";
  captionEl.textContent = list[i];
}

againBtn.addEventListener("click", showCaption);