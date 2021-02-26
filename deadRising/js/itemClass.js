class Item {
    constructor (id1){
        this._name = id1;              
        this._description = "";
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
        return "You found some " + this._name + " it might help you " + this._description;
    }

}