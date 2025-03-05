//generate random 3 digit number
function randomThreeDigitNumber(){
    return Math.floor(Math.random()*900)+100;
}

//generating 10 random  three digit number
let array = Array.from({length:10},randomThreeDigitNumber);
console.log("Generated Numbers : " , array);

//function to find second largest and second smallest\
function secondLargestAndSmallest(array){

        let largest = -Infinity, secondLargest = -Infinity;
        let smallest = Infinity , secondSmallest = -Infinity;

        //to find largest and second largest 
        for(let num of array){
            if(num>largest){
                secondLargest = largest;
                largest=num;
            }
            else if(num>secondLargest && num !== largest){
                secondLargest=num;
            }

            //to find smallest and second smallest
            if(num<smallest){
                secondSmallest = smallest;
                smallest = num;
            }
            else if(num<secondSmallest && num !== smallest ){
                secondSmallest = num;
            }
        }

        return {secondLargest,secondSmallest};
}

let {secondLargest,secondSmallest} = secondLargestAndSmallest(array);
console.log("Second Largest ", secondLargest);
console.log("Second Smallest", secondSmallest);