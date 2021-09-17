class Student {
    constructor(name, skillLevel){
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
 if (!object){
     this.assignments.forEach(assignment => {
         if ( this.skillLevel > assignment.skillLevel)
            assignment.completed = true 
         else assignment.completed = false
     })
 }else{ 
    if ( object.skillLevel >= this.skillLevel){
        object.completed = false 
    }else{ 
        object.completed = true 
    
    }
    if (object.skillLevel && object.skillLevel <= 100 && object.skillLevel > 0) this.assignments.push(object)
}

}
}

module.exports = Student
