//linking rooms
function fastLink(room1, room2, dir1, dir2){
    room1.linkRoom(dir1, room2);
    room2.linkRoom(dir2, room1);
}

fastLink(sideWard, ane, 'south', 'north');
fastLink(ane, cafe, 'east', 'west');
fastLink(cafe, neuro, 'east', 'west');
fastLink(cafe, xray, 'north', 'south');
fastLink(xray, droffice, 'east', 'west');
fastLink(xray, morgue, 'north', 'south');
fastLink(morgue, psych, 'west', 'east');
fastLink(morgue, exit, 'east', 'west');

//link items to rooms
sideWard.items = boltCutters;
neuro.items = armour;

//link characters to rooms
cafe.char = bob;
psych.char = zombie;
