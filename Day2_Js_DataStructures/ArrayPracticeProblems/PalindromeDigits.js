//function to find repeated digits
function repeatedDigits(){
    let array = [];
    for(let i=10;i<=99;i++){
        let tens = Math.floor(i/10);
        let ones = i%10;
    
        if(tens == ones){
            array.push(i);
        }
    }
    return array;
}

let result = repeatedDigits();
console.log("Repeated digits are : " , result);