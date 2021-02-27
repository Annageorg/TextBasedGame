class Item {
    constructor (id1){
        this._name = id1;              
        this._description = "";
        this._effect = 0;
    }
    get name(){
        return this._name;
    }
    get description(){
        return "It is a " + this._description;
    }
    get effect(){
        return this._effect;
    }

    set name(value){
        this._name = value;
    }
    set description(value){
        this._description = value;
    }
    set effect(value){
        this._effect = value;
    } 

    describe() {
        return "You found " + this._name + " it might help you " + this._description;
    }

}