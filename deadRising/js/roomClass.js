class Room {
    constructor (name) {
        this._name = name;
        this._intro = "";      
        this._description = "";
        this._linkedRooms = {};
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
        return this._intro + this._name + this._description;
    }
    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }
    move (direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert ("You try but the door cannot open");
            return this;
        }
    }
}

