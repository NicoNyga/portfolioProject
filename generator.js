//random index picker
const randIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
}; 

const randPrice = () => {
    return Math.floor(Math.random() * 10000);
}

//options for sale scenario
const scene = [
    "Taking a walk in the park.", 
    "Night fishing.", 
    "Competing in a semfinale at a poker tournament.", 
    "Pretending to be a statue in a park.", 
    "Bumping into a stranger when getting on a bus.",
    "Attending a masquerade ball dressed as a famous historical figure.",
    "Accidentally teleporting to a parallel universe while doing laundry.",
    "Finding a talking animal in your backyard and having a conversation with it.",
    "Participating in a competitive pancake eating contest.",
    "Getting caught in a hilarious case of mistaken identity at a fancy restaurant.",
    "Joining a laughter yoga class and laughing uncontrollably for an hour.",
    "Being chased by a flock of enthusiastic ducks in a public park.",
    "Attending a silent disco and dancing like nobody's watching.",
    "Getting stuck in an elevator with a group of singing opera performers.",
    "Participating in a synchronized swimming competition with inflatable pool toys.",
    "Accidentally becoming a contestant on a wacky game show without knowing the rules.",
    "Taking a spontaneous hot air balloon ride and landing in a field of sunflowers."
  
];
const opLine = [
    "OUCH! This coffee is hot!", 
    "That's a funny looking t-shirt you're wearing!", 
    "You've got something between your teeth!", 
    "Wanna race to the next whisky bar?", 
    "What is your PROBLEM!!!", 
    "Why so serious? Did your pet unicorn escape again?",
    "Guess what? I just found your long-lost sock soulmate!",
    "Do you have a map? I keep getting lost in your amazing sense of style!"
];
const product = [
    "A Vacuum Cleaner", 
    "A Greenlandic Dictionary", 
    "A Stamp Collection", 
    "A Cat", 
    "2 Tons of frehsly caught lobsters", 
    "Your mother in law",
    "A Singing Toothbrush",
    "A Sock Sorting Machine",
    "A Pocket-sized Unicorn",
    "A Bubble Wrap Suit",
    "A Banana Phone",
    "A Portable Frog Machine",
    "A Robot Butler",
    "A Self-Watering Plant Pot",
    "A Time-Traveling Umbrella",
    "A Musical Car Horn",
    "A Flying Carpet",
    "A Personalized Meteor Shower",
    "A Pizza Delivery Drone",
    "A Rainbow Generator"
];

//array holding scene, opening line and product
let randSituo = [];

//function taking option and placing it into situation array
const getVal = () => {
    const randScene = scene[randIndex(scene)];
    randSituo.push(randScene);
    const randOpLine =  opLine[randIndex(opLine)];
    randSituo.push(randOpLine);
    const randProduct = product[randIndex(product)];
    randSituo.push(randProduct);
    randSituo.push(randPrice());
}

getVal();


function createTask() {
    console.log("Hello!" + 
    "\n" 
    + "I am your sales coach." + 
    "\n" 
    + "With my help you will be able to sell" +
    "\n"
    + "anything to" + 
    "\n"
    + "anyone in" + 
    "\n"
    + "any situation!" + 
    "\n" +
    "\n"

    + "You have been given the following challenge:"+
    "\n"
    + `1: You are: ${randSituo[0]}` +
    "\n"
    + `2: A person says to you: ${randSituo[1]}` +
    "\n"
    + `3: Convince the person to buy: ${randSituo[2]} for the price of $${randSituo[3]}.`
    )
}


createTask();