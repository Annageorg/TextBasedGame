class Item {
    constructor (id1){
        this._name = id1;              
        this._description = "";
        // this._placed = {};
    }
    get name(){
        return this._name;
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