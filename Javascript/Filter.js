let arr = [1,2,1,2,3,6];

//filter method creates a new array filled with elements after filtering (using a condition eg)
//from an existing array

let ans = arr.filter(greaterThan5);
//all elements less than 5 are filtered out and only greater than 5 remain
function greaterThan5(num){
    return num > 5;
}

console.log(ans);