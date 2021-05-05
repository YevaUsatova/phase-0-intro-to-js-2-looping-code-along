// Code your solutions in this file
function writeCards(names, event){
let newNames = [];
    for( let i=0; i<names.length; i++){
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)       
    }
    return newNames;
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num){
    while(num>=0) {
        console.log(num--);
    }

}