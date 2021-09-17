class Student {
    constructor(name, skillLevel, assignments){
        this.name = name
        this.skillLevel = skillLevel
        this.assignments = []
}
study(){
   if (this.skillLevel < 100){
    this.skillLevel += 1
   }else{
       return this.skillLevel
}
return this
}
doHomework(object){ 
 if ( object.skillLevel > this.skillLevel){
    return object.complete = false 
}else{ 
    return  object.complete = true  
}

}

}

module.exports = Student
