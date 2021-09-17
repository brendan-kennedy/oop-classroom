class Room {
    constructor(name, description, contents){
        this.name = name
        this.description = description
        this.contents = []
    } 
add(item){
    this.contents.push(item)
    return this 
} 
has (reference){
 if(this.contents.includes(reference) === true ){ 
    return true
 }else{
     return false
 }
} 
}

module.exports = Room
