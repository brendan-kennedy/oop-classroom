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

}

module.exports = Student
