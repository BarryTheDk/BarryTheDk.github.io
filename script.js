var lines = [
  // texts from https://docs.google.com/spreadsheets/d/1UPkXNVFkZBo9iyn0VKVlSIGpwhmBUUfd39P3UyI5vTU/edit#gid=0
  "Vik starts break timer but doesn't come back in time.",
  "Wolf can't just die when wipe is called",
  "BRODIE GOT A ROSETTE",
  "Someone is dropped to death with a swap/drag",
  "Peter shouts -COME ON-",
  "Dan Dies.... Again",
  "Josh tries to pro-raid us for a bit before giving up.",
  "Leo actually attends the raid",
  "Josh is angry",
  "Josh wonders why we are not proraiders :(",
  "Amy references Yorkshire",
  "Zaph's granny bladder)",
  "Josh abuses admin priviledges on Discord",
  "We need traps cleared but hunters turtle is on CD. ",
  "Josh says a boss is hard on Heroic/mentions he's doing heroic",
  "A pug stays for more than one wipe",
  "BLOODLUSSSST!",
  "Tai insults someone for absolutely no reason",
  "idling for longer than 10 minutes between bosspulls",
  "Amy doesn't get Tier",
  "Oh Look, Zaph is dead",
  "Tai sucks his teef THEN sighs",
  "Is this the one with the dragon?",
  "Zaph is a dumbass",
  "SOMEONE ninja pulls the boss.",
  "Tanks cant hear callouts, due to someone being a loud cunt",
  "Pi is a loud cunt",
  "Tai sucks his Teef",
  "Someone goes all tryhard (probably Barry/Dan",
  "Amy claims to be shit, pulls solid DPS anyway",
  "Greado says -Yeeeees?- in his Greado way",
  "Leo says -Bossman-",
  "Peter critisizes a pug hunter's talents and general wellbeing",
  "Tai sounds unamused)",
  "Murlock sounds",
  "Pi threatens to go to Tai's house",
  "Wolf Solo tank for a bit, pretends she's not super smug about it.",
  "Tai outs people for not having enchants",
  "Vik does a wattery fart and is proud of it",
  "Tai sighs",
  "Tai does his muttley laugh",
  "Pi threatens a pug",
  "Peter sounds like something is dying, because a swirly brushed past his hair.",
  "JAMIE. DOGGOS.",
  "Pi forgets to Bloodlust despite being told to Bloodlust literally 5 sec ago.",
  "Pi gets the same loot she is currently wearing... again ",
  "Jamie starts talking to Pi while in fight, tells him to fuck off ",
  "Did a healer get a CR? NOPE.",
  "Josh shouts at someone really angrily for no logical reason in a normal raid",
  "Everyone ignores Josh ",
  "Pi lets Tai bloodlust out of pity.(Or because she forgot to BL earlier)",
  "Zaph has a tantrum",
  "No one knows what caused the wipe so we all just blame Dan",
  "Vik has conversation with herself, everyone talks over her, Peter pretends to still care.",
  "Barry lets us know that he can, Infact: tank, heal and dps",
  "Amy mentions the Legendary Bow and how she didn't get it- AGAIN.",
  "Wolf tells healers Last Resort is gone, as if that's going to change anything.",
  "*Vape sounds over mic*",
  "Dan claims to not know, despite the fact it's been mentioned 40 times",
  "Wolf and Leo talk to eachother in stupid voices",
  "-BACK IN LEGION-",
  "Vik says mean things to Bo who is just trying to be a good doggo",
  "Greado says -Meh-",
  "Least 2 people don't have a fucking food buff despite their being food in the guild bank",
  "A Mage war ensues",
  "Greado: -Piiiiii, Manacachink-",
  "Dan Crashes. Again.",
  "Zaph grey screens at an inconvenient moment",
  "Someone reminisces about raid days gone by. Ahhh... the memories. ",
  "Heaaaliiing Tiiiiide Piiii",
  "Pi pretends she's too tired to raid",
  "Peter forgetting to breath in a sentence",
  "Amy talks weird...because Yano...",
  "Vik needs to fill her e-cig, Or grab a pill, or grab a drink-",
  "Tai calls Zaph a little bitch. Again.",
  "Someone mocks a PUGs ability to play the class because obv we play those classes better.",
  "Amy showcases her geography 'skills'",
  "-Pink Rubber!- being the pinacle of the raid",
  "Peter Telling us all how he could make survival work but never actually goes survival.",
  "Pi talks shit about other shamans",
  "Someone is kicked out of the discord channel for NO REASON",
  "Josh threatens to leave because we talk about pro raiding",
  "Pi calls Jamie a twat",
  "Pi acts offended",
  "Pi says -I'm too old for this-",
];

// Fisher-Yates Shuffle
var shuffle = function(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};
// Did I just steal this code from Wikipedia, or something?

var insertToCard = function(array) {
  var slot = 25;
  while (slot) {
    $("label:nth-child(" + slot + ") .mark span").text(array[slot + 1]);
    slot--;
  }
};

$(document).ready(function() {
  var shuffledLines = shuffle(lines);
  insertToCard(shuffledLines); // #hellaswag
  $("#seed").text(Math.floor(Math.random() * 100000000)); // TODO
});