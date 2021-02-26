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

function displayRoomInfo(room){
    const textContent = room.describe();
    document.getElementById("text").innerHTML = textContent;
    // document.getElementById("userText").focus();
}

