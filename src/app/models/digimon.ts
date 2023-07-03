export class Digimon {

    constructor( _id = "", name= "", img= "", level=""){
        this._id = _id;
        this.name = name;
        this.img = img;
        this.level = level;
    }
    
    _id: string;
    name: string;
    img: string;
    level: string;
}
