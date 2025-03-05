//generate random 3 digit number
function randomThreeDigitNumber(){
    return Math.floor(Math.random()*900)+100;
}

//generating 10 random  three digit number
let array = Array.from({length:10},randomThreeDigitNumber);
console.log("Generated Numbers : " , array);

//function to sort the array
function sortArray(array){
    for(let i =0;i<array.length-1;i++){
        for(let j =i+1;j<array.length;j++){
            if(array[i]>array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

let sortedArr = sortArray(array);
console.log("Sorted Array " , sortedArr);
console.log("Second Largest : ", sortedArr[sortedArr.length-2]);
console.log("Second Smallest : ", sortedArr[1]);