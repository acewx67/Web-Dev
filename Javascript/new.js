let people = [
    { name: "Alice", age: 21, status: true },
    { name: "Max", age: 20, status: true },
    { name: "Jane", age: 20, status: true },
    { name: "Dave", age: 20, status: false },
    { name: "Caroline", age: 19, status: true },
    { name: "White", age: 19, status: true },
    { name: "Green", age: 19, status: false },
  ];

people = people.filter(trueStatus);
// people.filter(item => item.status);
function trueStatus(obj){
    return obj.status === true;
}
console.log(people);
people.map(removeStatus);
function removeStatus(obj){
    delete obj.status;
}

let ansObj = new Object();
