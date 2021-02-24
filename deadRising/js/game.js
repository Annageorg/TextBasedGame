function displayRoomInfo(room){
    const textContent = room.describe();
    document.getElementById("text").innerHTML = textContent;
    // document.getElementById("userText").focus();
}

function startGame(){
    currentRoom = sideWard;
    displayRoomInfo(sideWard);

    document.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            input = document.getElementById("userText").value;
            const directions = ["west","east","north","south"];

            if ( directions.includes( input.toLowerCase() ) ){
                currentRoom = currentRoom.move(input)
                displayRoomInfo(currentRoom);
            } else {
                alert("That is not a valid command please try again");
            }
            document.getElementById("userText").value = "";
        }
        
    })
}
startGame();
