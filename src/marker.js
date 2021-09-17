class Marker {
    constructor(size, color, remainingInk){
        this.size = size
        this.color = color
        this.remainingInk = remainingInk
        
}
write(inputstring) {
 
let nowhitespacestring = inputstring.replace(/\s/g,'')
 let stringarray = nowhitespacestring.split('')
 const characternumber = stringarray.length 
 this.remainingInk = this.remainingInk - characternumber

 if (this.remainingInk >= characternumber){
   return inputstring
 }else if (this.remainingInk < characternumber) {

  return inputstring.slice(-(inputstring.length - this.remainingInk))

 }
     
 }  
}


module.exports = Marker
