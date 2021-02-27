let currentRoom = sideWard;
const commands = ["go", "search", "take", "inventory", "talk", "attack", "help"]
const directions = ["west","east","north","south"];
let bag = [];
let pHealth = 10;
let state = true;

function changeRoom(room,dir){
    if ( directions.includes(dir) ){
        if (room == ane && dir =="east") {
            if ( bag.includes(cafe.key) ) {
                currentRoom = currentRoom.move(dir)
                displayRoomInfo(currentRoom);
            } else{
                alert("You need something to open the door");
            };
        } else if (room == cafe && dir == "east"){
            let outcome = fight(pHealth, neuro);
                if (outcome){
                    currentRoom = currentRoom.move(dir)
                    displayRoomInfo(currentRoom);
                } else {
                    alert (`You were attacked and lost the fight. Game over!!
                    Refresh the page to try again`);
                }

        } else {
            currentRoom = currentRoom.move(dir)
            displayRoomInfo(currentRoom);
            return;
        };    
    } else {
        alert ("That is not a valid direction, please try again")
    };
}

function displayRoomInfo(room){
    let charMsg = "";
    if (room.char === ""){
        charMsg = "";
    } else {
        charMsg = room.char.describe();
    }
    const textContent = room.describe() + charMsg;
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

function talkTo (room){
    let msg = "";
    if (room.char ===""){        
        msg = "<p>There is no-one in this room to talk to</p>"
        msg += "<p>...Press escape to go back to the room</p>"
        document.getElementById("text").innerHTML = msg;
        document.addEventListener("keydown", function(event){
            if (event.key === "Escape"){
                displayRoomInfo(currentRoom);
            }    
        })
   
    } else {
        msg = room.char.talk();
        msg += "<p>...Press escape to go back to the room</p>"
        document.getElementById("text").innerHTML = msg;
        document.addEventListener("keydown", function(event){
            if (event.key === "Escape"){
                displayRoomInfo(currentRoom);
            }    
        })
    }

}

function fight(value, room){
    if (value >= room.char.health){
        return true;
    } else {
        return false;
    }
}   
