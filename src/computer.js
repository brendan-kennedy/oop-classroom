class Computer {
  constructor(name, operatingSystem, processor, memory, graphics, on){
    this.name = name
    this.operatingSystem = operatingSystem
    this.processor = processor
    this.memory = memory
    this.graphics = graphics
    this.on       = false
    
}
power() { 
    if(this.on){
        this.on = false
    }else{
        this.on = true
    }
       
}
}

module.exports = Computer
