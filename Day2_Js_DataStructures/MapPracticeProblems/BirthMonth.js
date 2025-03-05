//generate hashmap
function generateMap(){
    let birthMonth = new Map();
    
//initializing map with new array for every month
for(let i =1;i<=12;i++){
    birthMonth.set(i,[]);
}

//generating random birthday for 50 people
for(let i =1;i<=50;i++){
    let month = Math.floor(Math.random()*12)+1;
    birthMonth.get(month).push(i);
}
return birthMonth;
}

let birthMonthData = generateMap();

console.log("Individuals grouped by birth month:");
for (let [month, individuals] of birthMonthData) {
    console.log(`Month ${month}: ${individuals.length > 0 ? individuals.join(", ") : "No birthdays"}`);
}

