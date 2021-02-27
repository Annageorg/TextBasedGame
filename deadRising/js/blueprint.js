//creating rooms, characters, and items

//create rooms
const sideWard = new Room("hospital room");
sideWard.intro = `<p>You are finally awake!!! How much time has passed?
years? months? weeks?</p> You look around and you are in a `
sideWard.description = `<p>It is completely empty, the lights in the room
are flickering, and you can't hear the usual hospital sounds. You can see
two doors to the east and south.</p><p>What do you want to do?</p>`;

const ane = new Room("A&E");
ane.intro = `<p>After maybe a lot of tries you managed to open the door</p>
Terrified you look around and see blood all over the walls. You are in the `
ane.description = `<p>This seems like an A&E, but not quite, something is not
right. It is very dark and you can't see much around</p>
<p>How will you proceed in this room?</p>`;


const cafe = new Room("cafeteria");
cafe.intro = `<p>That was tricky, hopefully you didn't make too much
noise trying to open the door, you don't want to do that! Dangerous 
things might be lurking in the shadows!</p> You are now in the `
cafe.description = `<p>The lights are so much better in this place.</p>
<p>What's next?</p>`;
cafe.key = "bolt cutters"

const neuro = new Room("neurology");
neuro.intro = `<p>Well done, you entered a new room</p> You are now in the `
neuro.description = `<p>There are strange chairs dotted around, you see some 
bodies laying around, but... Their brains are missing!!!</p>
<p>I would leave this room if I were you, but what are you gonna do?</p>`;

const xray = new Room("X-Ray");
xray.intro = `<p>That was tricky, but you did it!</p> You managed to enter the `
xray.description = `<p>There is a lot of equipment around, even some weird glow to 
some items...</p>
<p>It is advised to not touch anything. What are the next steps?</p>`;

const droffice = new Room("Dr Strange office");
const morgue = new Room("morgue");
const psych = new Room("Psychiatric ward");
const exit = new Room("Exit");

//create items
const boltCutters = new Item("bolt cutters");
boltCutters.description = "as a tool to go through locked doors"

//create characters
const bob = new Character("Bob");
bob.intro =`You look around and see a character called `
bob.description = `<p>He looks like a weird character, he doesn't seem he might
attack you. He looks like he wants to say something`
bob.conversation = `<p>Nice to see another one alive in these damned walls. Things
got scary mate. I don't know what is happening, but one thing I know, is that if you stumble 
upon a strange Doctor, don't make any sudden moves! Farewell, hope you manage to escape!</p>`

const zombie = new Enemy("zombie");
zombie.intro = `<p>When you opened the door, something attacked you. It seems that the armour 
you picked in the previous rooms protected you from massive damage.</p> 
You won the fight and saw that you fought a `
zombie.description = `<p>It looks a semi-dead, semi-alive thing that resembles a human being. 
All its clothes are shredded and you can see some bloodied bite marks all over his body.</p>`
zombie.health = 9;



