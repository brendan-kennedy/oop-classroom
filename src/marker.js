class Marker {
    constructor(size, color, remainingInk){
        this.size = size
        this.color = color
        this.remainingInk = remainingInk
        
}
write(inputstring) {
 
let nowhitespacestring = inputstring.replace(/\s/g,'')
 const characternumber = nowhitespacestring.length 
 this.remainingInk -= characternumber

 if (this.remainingInk >= characternumber){
   return inputstring
 }else if (this.remainingInk < characternumber) { 
   return inputstring.slice(0, this.remainingInk)

 }
     
 }  
}


module.exports = Marker
