
function addUpNum(number){
   
    var result = number;
    for (i =0; i<number; i++){
        result += i;
    }
    return result;
}

console.log(addUpNum(5));