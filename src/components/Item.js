class Item{
    // Variável de classe
    
    static lastId = 0 + Math.random() * 45;

    constructor(text){
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }

}

export default Item;