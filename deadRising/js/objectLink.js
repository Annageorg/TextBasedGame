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
sideWard.linkItems(sideWard, boltCutters)
//link characters to rooms



// function displayCharInfo(char){
//     const textContent = room.describe();
//     document.getElementById("text").innerHTML = textContent;
// }

// function displayItemInfo(item){
//     const textContent = room.describe();
//     document.getElementById("text").innerHTML = textContent;
// }

// function displayInventory(inv){
//     const textContent = room.describe();
//     document.getElementById("text").innerHTML = textContent;
// }