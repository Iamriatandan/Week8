//creating array with random elements
let array = [-1, 2 , 4, 1, -2, -3, 0];

//function to find three elements whose sum is 0
function sumIsZero(array){
    for(let i =0;i<array.length;i++)
    {
        for(let j =i+1;j<array.length;j++){
            for(let k =j+1;k<array.length;k++){
                if(array[i]+array[j]+array[k] == 0){
                    console.log(array[i],array[j],array[k]);
                }
            }
        }
    }
}

console.log(sumIsZero(array));