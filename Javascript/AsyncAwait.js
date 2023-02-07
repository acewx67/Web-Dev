async function foo(){
    
    let p1 = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('resolved after 2sec');
            resolve(12);
        },2000);
    });
    let p2Val;
    let p2 = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('resolved after 3 sec');
            let arr = [1,2,3,4,5,6,70];
            resolve(arr);
        },3000);
    });
    console.log(`${p2Val} this is p2 value`);
    p2Val = await p2;
    //To perform any operation on received data like p2's resolved value(12) we have to wait for
    //promise to be completed, await keyword stops program execution till a value is returned
    //from the promise
    console.log(`${p2Val} this is p2 value`);
    
}

foo();
console.log(foo);