let arr = [1,2,3,1,2,1,3];


let ans = [];
ans = arr.filter(removeDupes);
console.log(arr);
function removeDupes(num,index){
    return arr.indexOf(num)==index;
}
console.log(ans);

