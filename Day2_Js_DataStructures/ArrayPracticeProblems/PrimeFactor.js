let number = parseInt(process.argv[2],10);

//function to find prime number
function primeNumber(number){
    let count =0;
    for(let i =1;i<=number;i++){
        if(number%i ==0){
            count++;
        }
    }

    if(count == 2){
        return number;
    }
}
let arr=[];
for(let i=1;i<=number;i++){
    if(primeNumber(i)){
        arr.push(i);
    }
}

console.log(arr);