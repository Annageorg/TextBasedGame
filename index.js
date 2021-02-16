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
        return "Kitchen is " + this._description;
    }
    set name(value){
        // if (value.length < 4){
        //     console.log ('name is too short')
        //     return;
        // }
        this._name = value;
    }
    set description(value){
         // if (value.length < 4){
        //     console.log ('name is too short')
        //     return;
        // }
        this._description = value;
    }
    describe() {
        return "When you look around this is the " + this._name + " and in this room is " + this._description;
    }
    linkRoom (direction, roomToLink){
        this._linkedRooms[direction] = roomToLink;
    }
}

const kitchen = new Room ('Kitchen', 'where the food is cooked');
const livingRoom = new Room ('living room', 'main room of the house');

kitchen.linkRoom('left', livingRoom);

// document.getElementById('textArea').innerHTML = kitchen.name;
// console.log(kitchen);
// console.log(kitchen.name);
// console.log(kitchen.description);
// kitchen.name='main kitchen'
// console.log(kitchen.name)

console.log(kitchen.describe());
console.log(kitchen._linkedRooms.left.name);
