function playerInput(pValue){
    pValue = pValue.split(" ");
    let command = pValue[0];
    if ( commands.includes(command) ){
        if (command == "go"){
            changeRoom(pValue[1]);
        } else if (command == "help"){
            showhelp();
        } else if (command == "inventory"){
            showbag();
        }
    } else {
        alert("That is not a valid command please try again");
    }      
}

function changeRoom(dir){
    if ( directions.includes(dir) ){
        currentRoom = currentRoom.move(dir)
        displayRoomInfo(currentRoom);
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
    } else {
        let msg = "<p>Here are your items: </p><ul>"
    for (let i=0; i<bag.length; i++){
        msg += "<li>" +  bag[i] + "</li>"
    }
    msg += "</ul>" + "<p>...Press escape to go back to the room</p>"
    document.getElementById("text").innerHTML = msg;
    }    
    document.addEventListener("keydown", function(event){
        if (event.key === "Escape"){
            displayRoomInfo(currentRoom);
        }
        
    })
}