let currentRoom = sideWard;
const commands = ["go", "search", "take", "inventory", "talk", "attack", "help"]
const directions = ["west","east","north","south"];
let bag = [];


function startGame(){
    displayRoomInfo(currentRoom);

    document.addEventListener("keydown", function(event){

        if (event.key === "Enter"){
            let input = document.getElementById("userText").value.toLowerCase();
            playerInput(input);

            document.getElementById("userText").value = "";
        }
        
    })
}
startGame();
