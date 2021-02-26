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
        } else if (command == "search"){
            displayItemInfo(currentRoom);
        } else if (command == "take"){
            takeItems(currentRoom);
        }
    } else {
        alert("That is not a valid command please try again");
    }      
}

function startGame(){
    displayRoomInfo(currentRoom);
    // let state = true;
    document.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            let input = document.getElementById("userText").value.toLowerCase();
            playerInput(input);
            document.getElementById("userText").value = "";
            return;
        }    
    })

}
startGame();
