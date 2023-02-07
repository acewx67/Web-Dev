let p1 = new Promise( (resolve, reject) =>{
    setTimeout( () => {
        console.log('resolved after 2seconds');
        resolve(56);
    },2000);
});

p1.then( (value) => {
    let p2 = new Promise( (resolve, reject) =>{
        setTimeout( () => {
            console.log('resolved after 3 seconds');
            resolve('promise 2');
        },3000);
    });
    return p2;
}).then( (value) => {
    console.log('we are done');
}).then( (value) => {
    function abc(a,b){
        return a + b;
    }
    return abc(2,3);
}).then( (value) => {
    console.log(value);
});