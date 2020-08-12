export default class TagModel{

    constructor(){
        this.items = [];
    }

    add(item, callback){
        this.items.push(item);
        callback();
    }

    remove(index, callback){
        this.items.splice(index,1);
        callback();
    }

    getAll(){
        return this.items;
    }

    join(character){
        return this.items.join(character);
    }

    exists(item){
        const res = this.items.filter(i =>{
            return i === item
        });

        return res.length > 0; 
    }
}