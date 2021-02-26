class Room {
    constructor (name) {
        this._name = name;
        this._intro = "";      
        this._description = "";
        this._linkedRooms = {};
        this._items = "";
        this._key = "";
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
    get items(){
        return this._items;
    }
    get key(){
        return this._key;
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
    set items(value){
        this._items = value;
    }
    set key(value) {
        this._key = value;
    }

    describe() {
        return this.intro + this.name + this.description;
    }
    linkRoom(direction, roomToLink) {
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

