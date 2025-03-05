//generating random die roll function
function dieRoll(){
return Math.floor(Math.random()*6)+1;
}

//function to find maxroll
function rollUntilLimit(limit = 10){
let rollCount = new Map();

for(let i=1;i<=6;i++){
rollCount.set(i,0);
}

let maxRoll =0;
while(maxRoll<limit){
    let roll = dieRoll();
    rollCount.set(roll, rollCount.get(roll)+1 );
    maxRoll = Math.max(...rollCount.values());
}

let maxOccurrence = 1;
let minOccurrence = 1;

for(let [num,count] of rollCount){
    if(count>rollCount.get(maxOccurrence)){
        maxOccurrence = num;
    }

    if(count<rollCount.get(minOccurrence)){
        minOccurrence = num;
    }
}

return {rollCount : Object.fromEntries(rollCount),maxOccurrence,minOccurrence};
}

let result = rollUntilLimit();
console.log("Die roll counts:", result.rollCount);
console.log("Number that appeared the most times:", result.maxOccurrence, "with", result.rollCount[result.maxOccurrence], "times");
console.log("Number that appeared the least times:", result.minOccurrence, "with", result.rollCount[result.minOccurrence], "times");

