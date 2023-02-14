let x = {
    name : 'x',
    age : 24,
    city : 'hyd',
};

function sayHi(){
    alert('Hello');
}
x.message = sayHi;

x.message();