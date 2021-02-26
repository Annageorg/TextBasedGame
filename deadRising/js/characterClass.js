class Character{
    constructor (id1, id2, id3){
        this._name = id1;             
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