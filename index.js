class Room {
    constructor (id1, id2){
        this._name = id1;              //the _ is that this is private, it could be name
        this._description = id2;
        this._linkedRooms = {};
    }
    get name(){
        return "This is the " + this._name;
    }
    get description(){
        return "This room is the " + this._description;
    }
    set name(value){
        if (value.length < 4){
            console.log ('name is too short')
            return;
        }
        this._name = value;
    }
    set description(value){
         if (value.length < 4){
            console.log ('name is too short')
            return;
        }
        this._description = value;
    }
    describe() {
        return "When you look around this is the " + this._name + " and in this room is " + this._description;
    }
    linkRoom (direction, roomToLink){
        this._linkedRooms[direction] = roomToLink;
    }
    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert ("You can't go that way",);
            return this;
        }
    }
}

class Item {
    constructor (id1, id2){
        this._name = id1;              //the _ is that this is private, it could be name
        this._description = id2;
    }
    get name(){
        return "This is" + this._name;
    }
    get description(){
        return "It is a " + this._description;
    }
    set name(value){
        if (value.length < 4){
            console.log ('name is too short')
            return;
        }
        this._name = value;
    }
    set description(value){
         if (value.length < 4){
            console.log ('name is too short')
            return;
        }
        this._description = value;
    }
    describe() {
        return "You found " + this._name + " and is " + this._description;
    }
}

class Character{
    constructor (id1, id2, id3){
        this._name = id1;              //the _ is that this is private, it could be name
        this._description = id2;
        this._conversation = id3;
    }
    get name(){
        return "This is" + this._name;
    }
    get description(){
        return "They are " + this._description;
    }
    get conversation(){
        return this._converation;
    }
    set name(value){
        this._name = value;
    }
    set description(value){
        this._description = value;
    }
    set conversation (value){
        this._conversation = value;
    }
    describe() {
        return "You look at " + this._name + " and they are" + this._description;
    }
    talk (){
        return this._name + 'says' + this._conversation;
    }
}


const hall = new Room ('Hall', 'where you go to other rooms');
const livingRoom = new Room ('living room', 'main room of the house');
const kitchen = new Room ('Kitchen', 'where the food is cooked');
const office = new Room ('Office', 'where serious studying happens');
const bedroom = new Room ('Bedroom', 'where you can sleep');

hall.linkRoom('west', kitchen);
kitchen.linkRoom('east',hall);
hall.linkRoom('east', office);
office.linkRoom('west', hall);
hall.linkRoom('north', livingRoom);
livingRoom.linkRoom('south', hall);
hall.linkRoom('south', bedroom);
bedroom.linkRoom('north', hall);

function displayRoomInfo(room){
    const textContent = room.describe();
    document.getElementById("textArea").innerHTML = textContent;
    document.getElementById("userText").focus();
}

function startGame(){
    currentRoom = hall;
    displayRoomInfo(hall);

    document.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            command = document.getElementById("userText").value;
            const directions = ["west","east","north","south"];

            if (directions.includes(command.toLowerCase())){
                currentRoom = currentRoom.move(command)
                displayRoomInfo(currentRoom);
            } else {
                alert("That is not a valid command please try again");
            }
            document.getElementById("userText").value = "";
        }
    })
}



// startGame();




// console.log(hall.describe());
// console.log(hall._linkedRooms.left.name);
// console.log(hall._linkedRooms.left.description);
// console.log(hall.move("left"));


// document.getElementById('textArea').innerHTML = kitchen.name;
// console.log(kitchen);
// console.log(kitchen.name);
// console.log(kitchen.description);
// kitchen.name='main kitchen'
// console.log(kitchen.name)