export class Room {
    constructor(name) {
      this._name = name;
      this._description = "";
      this._linkedRooms = {};
      this._character = "";
    }
  
    get name() {
      return this._name;
    }
  
    get description() {
      return this._description;
    }
  
    get character() {
      return this._character
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
    set description(value) {
      if (value.length < 4) {
        alert("description is too short.");
        return;
      }
      this._description = value;
    }
  
    set character(value) {
      this._character = value;
    }
  
    //a method to produce friendly room description
    describe() {
      return "Looking around the " + this._name + " you can see " + this._description;
    }
  
    // a method to add rooms to link rooms to this one
    linkRoom(direction, roomToLink) {
      this._linkedRooms[direction] = roomToLink;
    }
  
    //a method to produce friendly description of linked rooms */
    getDetails() {
      const entries = Object.entries(this._linkedRooms);
      let details = []
      for (const [direction, room] of entries) {
        let text = " The " + room._name + " is to the " + direction;
        details.push(text);
      }
      return details;
    }

    //method to move to a new room
    move(direction) {
      if (direction in this._linkedRooms) {
        return this._linkedRooms[direction];
      } else {
        alert("You can't go that way",);
        alert(this._name)
        return this;
      }
    }
  }