// function fibo(n){
//     if(n === 1) return 1;
//     if(n === 0) return 0;

//     return fibo(n - 1) + fibo(n - 2);
// }
// console.log(fibo(10));


//remove duplicates from array

let arr = [1,1,2,4,5,3,2,4,5];
// let ans = new Array();
// let j = 0;
// function removeDuplicates(arr){
//     arr.sort();
//     console.log(arr);
//     for(let i = 0; i <= arr.length-1;i++){
//         if(arr[i] === arr[i+1]){
//             continue;
//         }
//         else{
//             ans[j] = arr[i];
//             j++;
//         }
//     }
//     console.log(ans);
// }
// removeDuplicates(arr);


// document.getElementById('head').innerHTML= '12345!';

const button = document.querySelector('#btn');
button.addEventListener('click', function(){
    // e.preventDefault();
    localStorage.setItem('itemsz',JSON.stringify(document.querySelector('#head').textContent))
});