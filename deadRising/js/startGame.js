function playerInput(pValue){
    pValue = pValue.split(" ");
    let command = pValue[0];
    if ( commands.includes(command) ){
        if (command == "go"){            
            changeRoom(currentRoom, pValue[1]);
        } else if (command == "help"){
            showhelp();
        } else if (command == "inventory"){
            showbag();
        } else if (command == "search"){
            displayItemInfo(currentRoom);
        } else if (command == "take"){
            takeItems(currentRoom);
        } else if (command == "talk"){
            talkTo(currentRoom);
        };
    } else {
        alert("That is not a valid command please try again");
    }      
}

function startGame(){
    if (state = true){
        displayRoomInfo(currentRoom);  
        document.addEventListener("keydown", function(event){
            if (event.key === "Enter"){
                let input = document.getElementById("userText").value.toLowerCase();
                playerInput(input);
                document.getElementById("userText").value = "";
                return;
            }    
        });

        document.addEventListener("keydown", function(event){
            if (event.key === "Escape"){
                displayRoomInfo(currentRoom);
            }        
         });

    } else {
        alert("You lost refresh the page to try again")
    }
}
startGame();
