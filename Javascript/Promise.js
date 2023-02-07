let p = new Promise( (resolve,reject) =>{
    setTimeout( ()=>{
        console.log('resolved after 2 seconds');
        resolve(12);
    },2000);
});

p.then( (value) => {
    console.log('promise has completed execution');
});