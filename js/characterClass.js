class Character{
    constructor (id1){
        this._name = id1; 
        this._intro = "";            
        this._description = "";
        this._conversation = "";
    }
    get name(){
        return this._name;
    }
    get intro(){
        return this._intro;
    }    
    get description(){
        return this._description;
    }
    get conversation(){
        return this._converation;
    }

    set name(value){
        this._name = value;
    }
    set intro(value){
        this._intro = value;
    }
    set description(value){
        this._description = value;
    }
    set conversation (value){
        this._conversation = value;
    }
    describe() {
        return this._intro + this._name + this._description;
    }
    talk (){
        return this._name + ' says: ' + this._conversation;
    }
}

class Enemy extends Character{
    constructor (name) {
        super(name);
        this._health= 0; 
    }

    get health(){
        return this._health;
    }
    set health(value){
        this._health = value;
    }

}