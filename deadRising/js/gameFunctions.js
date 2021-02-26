let currentRoom = sideWard;
const commands = ["go", "search", "take", "inventory", "talk", "attack", "help"]
const directions = ["west","east","north","south"];
let bag = [];

function changeRoom(dir){
    if ( directions.includes(dir) ){
        currentRoom = currentRoom.move(dir)
        displayRoomInfo(currentRoom);
        return;
    } 
}

function displayRoomInfo(room){
    const textContent = room.describe();
    document.getElementById("text").innerHTML = textContent;
    document.getElementById("userText").focus();
}

function showhelp(){
    let msg = "<p>Here are the possible commands: </p><ul>"
    for (let i=0; i<commands.length; i++){
        msg += "<li>" +  commands[i] + "</li>"
    }
    msg += "</ul>" + "<p>...Press escape to go back to the room</p>"
    document.getElementById("text").innerHTML = msg;
    document.addEventListener("keydown", function(event){
        if (event.key === "Escape"){
            displayRoomInfo(currentRoom);
        }
        
    })
}

function showbag(){
    if(bag.length ===0){
        msg = "<p>You are not carrying anything</p>"
        msg += "<p>...Press escape to go back to the room</p>"
        document.getElementById("text").innerHTML = msg;
        document.getElementById("userText").focus();
    } else {
        let msg = "<p>Here are your items: </p><ul>"
    for (let i=0; i<bag.length; i++){
        msg += "<li>" +  bag[i] + "</li>"
    }
    msg += "</ul>" + "<p>...Press escape to go back to the room</p>"
    document.getElementById("text").innerHTML = msg;
    document.getElementById("userText").focus();
    }

    document.addEventListener("keydown", function(event){
        if (event.key === "Escape"){
            displayRoomInfo(currentRoom);
        }
        
    })
}

function displayItemInfo(room){
    if (room.items != null){
        const textContent = room.items.describe();
        document.getElementById("text").innerHTML = textContent;
        document.getElementById("userText").focus();
        document.addEventListener("keydown", function(event){
            if (event.key === "Escape"){
                displayRoomInfo(currentRoom);
            }        
        })
    } else {
        msg = "<p>There are no items here</p>"
        document.getElementById("text").innerHTML = msg;
        document.getElementById("userText").focus();
    }
}

function takeItems (currentRoom){
    bag.push(currentRoom.items.name);
    msg = "<p>You picked up the " + currentRoom.items.name +"</p>"
    msg += "<p>...Press escape to go back to the room</p>"
    document.getElementById("text").innerHTML = msg;
    document.getElementById("userText").focus();

    document.addEventListener("keydown", function(event){
        if (event.key === "Escape"){
            displayRoomInfo(currentRoom);
        }        
    })
}