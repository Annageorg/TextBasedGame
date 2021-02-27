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
        } else if (command == "attack"){
            if (currentRoom.char){
                let outcome = fight(pHealth, currentRoom);
                if (outcome){
                    msg = "<p>You fougth and won the battle</p>"
                    document.getElementById("text").innerHTML = msg;
                } else {
                    alert(`You should have listened to Bob! You DIED!!
                    GAME OVER! Refresh the page to try again.`)
                    state = false;
                }
            } else {
                msg = "<p>There is no-one to attack here</p>"
                document.getElementById("text").innerHTML = msg;
            };            
        };
    } else {
        alert("That is not a valid command please try again");
    }      
}

function startGame(){

    if (state){
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
    };
};
startGame();
