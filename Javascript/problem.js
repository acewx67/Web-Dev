// let people = [
//     { name: "Alice", age: 21, status: true },
//     { name: "Max", age: 20, status: true },
//     { name: "Jane", age: 20, status: true },
//     { name: "Dave", age: 20, status: false },
//     { name: "Caroline", age: 19, status: true },
//     { name: "White", age: 19, status: true },
//     { name: "Green", age: 19, status: false },
//   ];

// people = people.filter(trueStatus);
// // people.filter(item => item.status);
// function trueStatus(obj){
//     return obj.status === true;
// }
// console.log(people);
// people.map(removeStatus);
// function removeStatus(obj){
//     delete obj.status;
// }
// console.log(people);
// // let ans = [];
// const ansObj = new Object();
// for(let i = 0; i < people.length; i++){
//     let temp = [];
//     let varAge = -1;
//     if(people[i] != -1){
//         temp.push(people[i]);
//         console.log(temp);
//         varAge = people[i].age + '';
//         ansObj[varAge] = [];
       
//     }
//     for(let j = i+1; j < people.length && people[i] != -1; j++){
//         if(people[i].age == people[j].age){
//             temp.push(people[j]);
//             people[j] = -1;
//         }
//     }
//     if(temp.length > 0){
//         // ans.push(temp);
//         ansObj[varAge].push(temp);
//     } 

// }



// console.log(ansObj);

let people = [
    { name: "Alice", age: 21, status: true },
    { name: "Max", age: 20, status: true },
    { name: "Jane", age: 20, status: true },
    { name: "Dave", age: 20, status: false },
    { name: "Caroline", age: 19, status: true },
    { name: "White", age: 19, status: true },
    { name: "Green", age: 19, status: false },
  ];

let peopleArr = people.filter(o => o.status).map((o) => ({name: o.name, age: o.age}));

console.log({peopleArr});

let result = {};

peopleArr.forEach(item => {
    let itemArr = result[item.age] ? result[item.age] :  [];
    itemArr.push(item);
    result[item.age] = itemArr;
});

console.log(result);
