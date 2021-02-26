class Room {
    constructor (name) {
        this._name = name;
        this._intro = "";      
        this._description = "";
        this._linkedRooms = {};
        this._items = {};
    }

    get name() {
        return this._name;
    }
    get intro() {
        return this._intro;
    }
    get description() {
        return this._description;
    }

    set name(value) {
        this._name = value;
    }
    set intro(value){
        this._intro = value;
    }
    set description(value) {
        this._description = value;
    }

    describe() {
        return this.intro + this.name + this.description;
    }
    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }
    move (direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert ("Seems you can't go that way");
            return this;
        }
    }
    linkItems(roomToPlace, item){
        this._items[roomToPlace] = item;
    }
    show(){
        
    }
}

class Locked extends Room {
    constructor(name){
        super(name);
        this._key = "";
    }
    get key(){
        return this._key;
    }
    set key(value) {
        this._key = value;
    }
}

