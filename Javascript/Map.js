let arr = [1,2,3,4,5,6,7,8,9,10];
//Performs a function for every element in array
//Does not make changes to the array unless reassigned the original array to changed array
//as done below
arr = arr.map(squaring);

function squaring(num){
    return num * num;
}

console.log(arr);